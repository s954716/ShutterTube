import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { Col, Container, Row } from "react-bootstrap";
import MessagerEditButton from "./MessagerEditButton";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import axios from "axios";
import MessagerCards from "./MessagerCards";
import { useMessagerInfor } from "../../hooks";


const Project = () => {
  const [isAddMessager,setIsAddMessager] = useState(false);

  const {filterMessagerList} = useMessagerInfor(isAddMessager);

  const handleMessager = (setIsSubmit,selectedMessagerData,setLgShow,setIsDefaultOption) => {
    setIsSubmit(true);
    axios
    .post("https://api.airtable.com/v0/appzUYfhFTQydamJK/messgers",
    {
      fields: {
        name: selectedMessagerData.selectedValue,
        messagerInfor: selectedMessagerData.userInfor,
        projects: [window.location.href.split(`project/`)[1]]
      }
    },
    {
      headers: {
          Authorization: `Bearer keyMHZ3pIwRcsJmoj`
      }
    }
    )
    .then((res) => {
      console.log(res);
      setIsSubmit(false);
      setLgShow(false);
      setIsDefaultOption(true);
      setIsAddMessager(true);
    })
    .catch((err) => {console.log(err)})
  };

  return (
    <div style={{backgroundImage: "linear-gradient(111.7deg, #a529b9 19.9%, #50b1e1 95%)", height:"100vh"}}>
      <Header bgc={{ background: "rgba(0,0,0,0.8)"}} isDashboard={true} isProject={true}></Header>
      <Container fluid="fluid">
        <Row className="justify-content-center">
          <Col xs={12} sm={10}>
              <Row className="justify-content-center">
                <Col xs={10} className="mt-5">
                  <Row>
                    {
                      filterMessagerList.map((messager,index) => {
                        return(
                          <MessagerCards messager={messager} index={index} key={index}></MessagerCards>
                        )
                      })
                    }
                  </Row>
                  <MessagerEditButton icon={faPlus} onMessagerSelect={handleMessager}>Messenger Link</MessagerEditButton>
                </Col>
              </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Project;
