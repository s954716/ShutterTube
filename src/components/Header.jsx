import React from "react";
import { Button, Col, Container, Nav, Row } from "react-bootstrap";
import styled from "styled-components";
import Logo from "../images/shutter_tube_logo.png";
import DashboardLogo from "../images/shutter_tube_logo_white.png";
import { Anchor } from 'antd';
import AuthContext from "./AuthContext";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faCog, faEye, faQrcode, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";


const { Link } = Anchor;
const StyledLink = styled(Link)`
  .ant-anchor-link-title {
      padding: 20px 20px;
      color: #576477;
      display:block
  }
  .ant-anchor-link-title:hover {
      color: #576477;
          text-decoration: none;
  }
`;
const StyledDashboardLink = styled(Link)`
  .ant-anchor-link-title {
      padding: 20px 5px;
      color: #FFF;
      display:block
  }
  .ant-anchor-link-title:hover {
      color: #FFF;
          text-decoration: none;
  }
`;

const StyledAnchor = styled(Anchor)`
  .ant-anchor {
    display: flex;
  }
`;

const StyledBtnIcon = styled(Button)`
  :hover .hover__color {
    color: #212529;
  }
`;

const Header = ({bgc,isDashboard,isProject,onLoginOut}) => {
  const { userData, setUserData } = useContext(AuthContext);
  console.log("in header",userData)

  const handleLoginOutClicked = (event) => {
    event.preventDefault();
    onLoginOut && onLoginOut();
  };
  return (
    <header style={bgc}>
      <Container fluid={isDashboard? "fluid" : "lg"}>
        <Row>
          <Col xs={3}>
            <img src={isDashboard ? DashboardLogo : Logo} alt="ShutterTube" style={{ height: "65px",cursor: "pointer"}}/>
          </Col>
          <Col xs={9}>
          {
            !isDashboard && 
            <Nav style={{ justifyContent: "flex-end" }}>
              <StyledAnchor >
                  <StyledLink href="#integrations" title="Integrations"></StyledLink>
                  <StyledLink href="#features" title="Features"></StyledLink>
                  <StyledLink href="#faq" title="FAQ"></StyledLink>
                  <StyledLink href="/shuttertube/login" title="Login"></StyledLink>
              </StyledAnchor>
            </Nav>
          }
          {
            isDashboard && !isProject && 
            <Nav style={{ justifyContent: "flex-end" }}>
              <div style={{display:"flex",justifyContent:"center",alignItems:"center",color:"#FFF",padding:"0 1rem"}}><span>{userData.userName}</span></div>
              <StyledAnchor onClick={handleLoginOutClicked}>
                  <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <FontAwesomeIcon icon={faSignOutAlt} color="white" size="sm"/> 
                  </div>
                  <StyledDashboardLink title="Logout"></StyledDashboardLink>
              </StyledAnchor>
            </Nav>
          }
          {
            isDashboard && isProject && 
            <Nav style={{ justifyContent: "flex-end",alignItems: "center", height: "100%" }}>
              <StyledBtnIcon variant="outline-light" style={{margin:"0 5px"}}><FontAwesomeIcon icon={faCog} color="white" size="sm" className="hover__color"/><span className="d-none d-sm-inline-block pl-2 pr-2">Settings</span></StyledBtnIcon>
              <StyledBtnIcon variant="outline-light" style={{margin:"0 5px"}}><FontAwesomeIcon icon={faQrcode} color="white" size="sm" className="hover__color"/><span className="d-none d-sm-inline-block pl-2 pr-2">QR Code</span></StyledBtnIcon>
              <StyledBtnIcon variant="outline-light" style={{margin:"0 5px"}}><FontAwesomeIcon icon={faEye} color="white" size="sm" className="hover__color"/><span className="d-none d-sm-inline-block pl-2 pr-2">Preview</span></StyledBtnIcon>
              <StyledBtnIcon variant="outline-light" style={{margin:"0 5px"}} href={`/shuttertube/dashboard/${localStorage.getItem('id')}`}><FontAwesomeIcon icon={faAngleLeft} color="white" size="sm" className="hover__color"/><span className="d-none d-sm-inline-block pl-2 pr-2">Back</span></StyledBtnIcon>
            </Nav>
          }
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
