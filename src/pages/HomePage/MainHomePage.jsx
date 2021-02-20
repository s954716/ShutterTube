import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Section from "../../components/layout/Section";
import {BannerHeadings,BannerImg,WaveCircle,IntegrationContent, IntegrationImg, FeatureImg,FeatureContent, PlatformsContent, PlatformsImg, QuestionsAndAnswers} from "./contents";


const headerDefaultStyle = {
  backgroundColor: "#e5e9f2",
  position:"fixed",
  top:"0",
  right:"0",
  left:"0",
  zIndex:10,
  transition: "0.4s"
}

const MainHomePage = () => {
  const [headerColor, setHeaderColor] = useState(headerDefaultStyle);

  useEffect(() => {
    window.onscroll = () => {
      if(window.pageYOffset > 0 ) setHeaderColor({...headerDefaultStyle, backgroundColor: "#FFFF", boxShadow: "0 0 4px rgb(0 0 0 / 14%), 0 4px 8px rgb(218 213 213 / 31%)"})
      else setHeaderColor({...headerDefaultStyle})
    }
  }, []);

  return (
    <>
      <Header bgc={headerColor} isDashboard={false} isProject={false}/>
      <Section anchorId="home" bgc={{ backgroundColor: "#e5e9f2",overflow:"hidden",marginTop:"60px" }} leftCol="7" rightCol="5" left={<BannerHeadings/>} right={<BannerImg/>}>
        <WaveCircle/>
      </Section>
      <Section anchorId="integrations" bgc={{ backgroundColor: "#FFFF" }} leftCol="6" rightCol="6" left={<IntegrationContent/>} right={<IntegrationImg/>}>
      </Section>
      <Section anchorId="features" bgc={{ backgroundColor: "#e5e9f2"}} leftCol="6" rightCol="6" left={<FeatureImg/>} right={<FeatureContent/>}>
      </Section>
      <Section bgc={{ backgroundColor: "#FFFF" }} leftCol="6" rightCol="6" left={<PlatformsContent/>} right={<PlatformsImg/>}>
      </Section>
      <Section anchorId="faq" bgc={{ backgroundColor: "#FFFF" }} leftCol="12" rightCol="0" left={<QuestionsAndAnswers/>}>
      </Section>
      <Footer/>
    </>
  );
};

export default MainHomePage;
