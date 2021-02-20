import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Section = ({bgc, leftCol ,rightCol,left,right,anchorId,children,isDashboard,xsLeftCol,xsRightCol,userProjects}) => {
  return (
    <section style={bgc} className={isDashboard? "pt-3 pb-3" : "pt-5 pb-5"} id={anchorId}>
      <Container fluid={isDashboard? "fluid" : "sm"}>
        <Row className="align-items-center">
          <Col xs={xsLeftCol || 12} md={leftCol} userProjects={userProjects}>{left}</Col>
          <Col xs={xsRightCol || 12} md={rightCol}>{right}{children}</Col>
        </Row>
      </Container>
    </section>
  );
};

export default Section;
