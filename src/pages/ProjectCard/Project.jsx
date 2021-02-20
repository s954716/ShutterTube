import React, { useState } from "react";
import Header from "../../components/Header";
import { Col, Container, Row } from "react-bootstrap";
import MessagerEditButton from "./MessagerEditButton";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import axios from "axios";
import MessagerCards from "./MessagerCards";

const handleMessager = (setIsSubmit,selectedMessagerData,setLgShow) => {
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
  })
  .catch((err) => {console.log(err)})
};

const Project = () => {
  return (
    <div style={{background: "linear-gradient(to bottom, #292E49, #536976, #BBD2C5)",height:"100vh"}}>
      <Header bgc={{ background: "rgba(0,0,0,0.8)"}} isDashboard={true} isProject={true}></Header>
      <Container fluid="fluid">
        <Row className="justify-content-center">
          <Col xs={12} sm={10}>
              <Row className="justify-content-center">
                <Col xs={10} className="mt-5">
                  <MessagerCards></MessagerCards>
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
