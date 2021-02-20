import React from "react";
import styled from "styled-components";
import MobileHead from "../../images/banner/mobile-head.jpg";
import IntegrationsImg from "../../images/integrations.png";
import DragAndDropImg from "../../images/drag-and-drop.png";
import MainScreenImg from "../../images/Main-Screen.png";
import { Accordion, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const StyledBtn = styled.button`
  display: inline-block;
  background-color: #c82c29;
  padding: 12px 30px;
  color: #fff;
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: 500;
  border: none;
  position: relative;
  z-index: 1;
  transition: all 0.5s;

  :active {
    border: none;
  }
`;

const StyledTittle = styled.h1`
  font-size: 64px;
  font-family: Poppins, sans-serif;
  font-weight: 600;
  color: #001737;
  line-height: 70px;
`;

const StyledImg = styled.img`
  border: 10px solid #fff;
  border-radius: 45px;
  position: relative;
  z-index: 3;
`;

const StyledWaveBlock = styled.div`
  position: absolute;
  width: 800px;
  height: 800px;
  right: -240px;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  z-index: 2;

  .waves {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(156, 156, 156, 0.3);
    opacity: 0;
    border-radius: 50%;
    background-clip: padding-box;
    -webkit-animation: waves 6s ease-in-out infinite;
    animation: waves 6s ease-in-out infinite;
  }

  .wave-1 {
    animation-delay: 2s;
  }

  .wave-2 {
    animation-delay: 3s;
  }

  .wave-3 {
    animation-delay: 4s;
  }

  @keyframes waves {
    0% {
      -webkit-transform: scale(0.5, 0.5);
      transform: scale(0.5, 0.5);
      opacity: 0;
    }
    50% {
      opacity: 0.9;
    }
    100% {
      -webkit-transform: scale(0.9, 0.9);
      transform: scale(0.9, 0.9);
      opacity: 0;
    }
  }
`;

const StyledIntegration = styled.div`
  .Integration__main__title {
    font-size: 20px;
    color: #001737;
    font-family: Poppins, sans-serif;
    font-weight: 600;
  }
  .Integration__main__title::before {
    position: absolute;
    left: 17px;
    top: 11px;
    width: 30px;
    height: 3px;
    content: "";
    background-color: #001737;
  }
  .Integration__sub__title {
    color: #001737;
    font-size: 36px;
    font-family: Poppins, sans-serif;
    font-weight: 600;
  }
  p {
    color: #576477;
    font-family: Poppins, sans-serif;
    line-height: 30px;
  }
`;

const StyledFeature = styled.div`
  .Integration__sub__title {
    color: #001737;
    font-size: 36px;
    font-family: Poppins, sans-serif;
    font-weight: 600;
  }
  p {
    color: #576477;
    font-family: Poppins, sans-serif;
    line-height: 30px;
  }
`;
const StyledPlatforms = styled.div`
  .Integration__sub__title {
    color: #001737;
    font-size: 36px;
    font-family: Poppins, sans-serif;
    font-weight: 600;
  }
  p {
    color: #576477;
    font-family: Poppins, sans-serif;
    line-height: 30px;
  }
`;

const StyledQuestions = styled.div`
  .sub__title {
    color: #001737;
    font-size: 36px;
    font-family: Poppins, sans-serif;
    font-weight: 600;
  }
  p {
    color: #576477;
    font-family: Poppins, sans-serif;
    line-height: 30px;
  }
`;

const StyledPlus = styled.div`
  color: #576477;
  font-size: 2em;
  position: absolute;
  top: 0px;
  left: 10px;
  line-height: 1.4em;
  cursor: pointer;
`;

const StyledAccordionCard = styled(Card)`
  cursor: pointer;
  border: none;

  .card__header {
    border-radius: 5px !important;
    border: 2px solid #576477;
    background-color: #fff;
  }
`;

const StyledCardText = styled.span`
  color: #576477;
  font-family: Poppins, sans-serif;
`;

export const BannerHeadings = () => {
  return (
    <>
      <StyledTittle>
        Unleash The Full Potential
        <span style={{ fontWeight: "200" }}> Of Your Social Bio link.</span>
      </StyledTittle>
      <Link to="/shuttertube/login">
        <StyledBtn size="lg" className="mt-5">
          Get started
        </StyledBtn>
      </Link>
    </>
  );
};

export const BannerImg = () => {
  return (
    <div className="text-right">
      <StyledImg src={MobileHead} alt="" />
    </div>
  );
};

export const WaveCircle = () => {
  return (
    <StyledWaveBlock>
      <div className="waves wave-1"></div>
      <div className="waves wave-2"></div>
      <div className="waves wave-3"></div>
    </StyledWaveBlock>
  );
};

export const IntegrationContent = () => {
  return (
    <>
      <StyledIntegration>
        <h4 className="Integration__main__title mb-3 ml-5">
          THIRD-PARTY PIXELS
        </h4>
        <h2 className="Integration__sub__title mb-4">Powerful Integrations</h2>
        <p className="mb-5">
          Tracking conversions is a must if you are looking to improve ROI. You
          can now integrate Instagram, Facebook, Twitter, Linkedin, Google Ads,
          Google Analytics and Pinterest to track your results.
        </p>
      </StyledIntegration>
      <StyledIntegration>
        <h4 className="Integration__main__title mb-3">Collect Leads</h4>
        <p className="mb-5">
          Allow visitors to join your newsletter list, by integrating sign-up
          forms via Mailchimp. Connect your Mailchimp and start collecting
          leads.
        </p>
      </StyledIntegration>
    </>
  );
};

export const IntegrationImg = () => {
  return <img src={IntegrationsImg} alt="" />;
};

export const FeatureImg = () => {
  return <img src={DragAndDropImg} alt="" />;
};

export const FeatureContent = () => {
  return (
    <>
      <StyledFeature>
        <h2 className="Integration__sub__title mb-4">
          Drag &amp; Drop <span>editor.</span>
        </h2>
        <p>
          Manage all your links, content, integrations and page settings in one
          place, using our visual drag and drop editor.
        </p>
      </StyledFeature>
      <Link to="/shuttertube/login">
        <StyledBtn size="lg" className="mt-3">
          Get started
        </StyledBtn>
      </Link>
    </>
  );
};

export const PlatformsContent = () => {
  return (
    <>
      <StyledPlatforms>
        <h2 className="Integration__sub__title mb-4">
          <span style={{ fontWeight: "200" }}>Add content from your</span>{" "}
          <br />
          favorite platforms.
        </h2>
        <p>
          Adding content from other sites has never been easier.
          <br />
          Simply enter your link and let Stacky do the rest for you.
        </p>
        <p className="mt-3">Embed supported platforms:</p>
        <p className="mt-n3">
          <b>SoundCloud</b>, <b>YouTube</b>, <b>Spotify</b>, <b>Vimeo</b> and
          <b>Twitch</b>.
        </p>
      </StyledPlatforms>
      <Link to="/shuttertube/login">
        <StyledBtn size="lg">Get started</StyledBtn>
      </Link>
    </>
  );
};

export const PlatformsImg = () => {
  return (
    <div className="text-center">
      <img src={MainScreenImg} alt="" />
    </div>
  );
};

export const QuestionsAndAnswers = () => {
  return (
    <>
      <StyledQuestions className="justify-content-center row mb-4">
        <Col xs={6} className="text-center">
          <h2 className="sub__title">Frequently Asked Questions.</h2>
          <p>
            Here are the answers to some of the most common questions we hear
            from our appreciated customers.
          </p>
        </Col>
      </StyledQuestions>
      <Accordion defaultActiveKey="1">
        <StyledAccordionCard className="mb-2">
          <Card.Header className="card__header">
            <Accordion.Toggle as="div" eventKey="0" className="ml-3">
              <StyledPlus> + </StyledPlus>
              <StyledCardText>What integrations are available?</StyledCardText>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <StyledCardText>
                The available integrations on Stacky are with Instagram,
                Facebook, Twitter, Pinterest, Linkedin, Google Ads, and Google
                Analytics.
              </StyledCardText>
            </Card.Body>
          </Accordion.Collapse>
        </StyledAccordionCard>
      </Accordion>
      <Accordion defaultActiveKey="1">
        <StyledAccordionCard className="mb-2">
          <Card.Header className="card__header">
            <Accordion.Toggle as="div" eventKey="0" className="ml-3">
              <StyledPlus> + </StyledPlus>
              <StyledCardText>What social accounts can I add?</StyledCardText>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <StyledCardText>
                When it comes to adding other social accounts to your Stacky
                page, you just type your social handle in the social field and
                you're good to go. <br />
                We currently support: Facebook, Twitter, Instagram, Pinterest,
                Linkedin, YouTube, Patreon, VK and Snapchat.
              </StyledCardText>
            </Card.Body>
          </Accordion.Collapse>
        </StyledAccordionCard>
      </Accordion>
      <Accordion defaultActiveKey="1">
        <StyledAccordionCard className="mb-2">
          <Card.Header className="card__header">
            <Accordion.Toggle as="div" eventKey="0" className="ml-3">
              <StyledPlus> + </StyledPlus>
              <StyledCardText>What does link in bio mean?</StyledCardText>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <StyledCardText>
                On Instagram, the only clickable link that you can have is on
                your profile page, under your profile name. Although the field
                is called website, you can add any link to that field.
                <br /> For example, if you want to redirect your followers to a
                certain website from a post you made on instagram, you can
                simply add the link to the website section on your profile, and
                tell your followers that in order to access that website, they
                have to click the link in bio.
              </StyledCardText>
            </Card.Body>
          </Accordion.Collapse>
        </StyledAccordionCard>
      </Accordion>
    </>
  );
};
