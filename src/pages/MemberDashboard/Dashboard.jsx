import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import AuthContext from "../../components/AuthContext";
import Header from "../../components/Header";
import Section from "../../components/layout/Section";
import { NewProjectBtn, ProjectTable, ProjectTitle } from "./content";


const Dashboard = () => {
  const { userData, setUserData } = useContext(AuthContext);
  const history = useHistory();
  const [userProjects,setUserProjects] = useState([]);
  let projectInforList= [];
  const nowDate = `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`;

  const handleLoginOut = () => {
    localStorage.clear();
    setUserData({
      userName: "",
      id: "",
      hasLogin: false
    });
    history.push("/shuttertube");
  };

  const handleNewProject = () => {
    Swal.fire({
      title: 'Create a Project',
      html: `<span style="color: #9ca8b3;padding: 0 1rem;font-weight: 400; font-size: 13px">A project can manage multiple bio link pages and shortened links. It helps you keep things clean and organized.</span>`,
      input: 'text',
      showCloseButton: true,
      confirmButtonText: 'create',
      showLoaderOnConfirm: true,
      inputPlaceholder: 'Type your project name',
      }).then((res) => {
        if (res.isConfirmed) {
          axios
          .post("https://api.airtable.com/v0/appzUYfhFTQydamJK/projects",
            {
              records: [
                {
                  fields: {
                    name: res.value,
                    create: nowDate,
                    users: [
                      localStorage.getItem("id")
                    ]
                  }
                }
              ]
            },
            {
              headers: {
                  Authorization: `Bearer keyMHZ3pIwRcsJmoj`
              }
            }
          )
          .then(() => {
            Swal.fire({
              icon: "success",
              title: "Create success!",
              confirmButtonText: "OK"
              }).then(() => {
                window.location.reload();
              })
          })
          .catch((err) => {console.log(err)})
        }
      })
  };


  const handleDelete = (id) => {
    console.log(id)
    axios
    .delete(`https://api.airtable.com/v0/appzUYfhFTQydamJK/projects/${id}`,
      {
        headers: {
            Authorization: `Bearer keyMHZ3pIwRcsJmoj`
        }
      }
    )
    .then(() => {
      Swal.fire({
        icon: "success",
        title: "Delete success!",
        confirmButtonText: "OK"
        }).then(() => {
          window.location.reload();
        })
    })
    .catch((err) => {console.log(err)})
  };

  useEffect(() => {
    axios
    .get(`https://api.airtable.com/v0/appzUYfhFTQydamJK/users/${userData.id || localStorage.getItem("id")}`,
      {
        headers: {
            Authorization: `Bearer keyMHZ3pIwRcsJmoj`
        }
      }
    )
    .then((res) => {
        console.log("in specfic user",res)
        for (const project of res.data.fields.projects) {
            axios
            .get(`https://api.airtable.com/v0/appzUYfhFTQydamJK/projects/${project}`,
              {
                headers: {
                    Authorization: `Bearer keyMHZ3pIwRcsJmoj`
                }
              }
            )
            .then((res) => {
              console.log("res",res)
              projectInforList = [...projectInforList,res.data];
              setUserProjects(projectInforList);
            })
            .catch((err) => {console.log(err)});
        }
        // setUserProjects(projectInforList);
      }
    )
    .catch((err => {console.log(err)}));
  }, []);


  return (
    <>
      <Header bgc={{ backgroundImage: "linear-gradient(to right, #0487D9 0%, #F24C27 100%)"}} isDashboard={true} isProject={false} onLoginOut={handleLoginOut}></Header>
      <Section leftCol="8" rightCol="4" xsLeftCol="8" xsRightCol="4" left={<ProjectTitle/>} right={<NewProjectBtn onCreateNewProject={handleNewProject}/>} isDashboard={true}></Section>
      <Section leftCol="12" rightCol="0" left={<ProjectTable userProjects={userProjects} onRecordDeleted={handleDelete}/>} isDashboard={true}></Section>
      <footer style={{background:"#212121",position:"fixed",bottom:"0",right:"0",left:"0"}}>        
        <section style={{padding:"5px 0 5px 0", backgroundImage: "linear-gradient(to right, #0487D9 0%, #F24C27 100%)"}}/>
        <Container fluid="sm">
            <Row>
              <Col xs={12}>
                <p className="text-center pt-3 pb-3 mb-0" style={{ color: "#FFF" }}>
                  © Copyright 2021 ShutterTube - All Rights Reserved.
                </p>
              </Col>
            </Row>
          </Container>
      </footer>
    </>
  );
};

export default Dashboard;
