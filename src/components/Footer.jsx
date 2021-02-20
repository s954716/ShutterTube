import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <section style={{padding:"100px 0 50px 0", background: "linear-gradient(to bottom,#fff 0,#dae1e9 100%)"}}>
      <Container fluid="sm">
        <Row>
          <Col xs={12}>
            <p className="text-center" style={{ color: "#576477" }}>
              © Copyright 2021 ShutterTube - All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Footer;
