import React from "react";

import { Container, Image, Tab } from "./styles";
import pitch from '../../assets/pitch.jpg';
const News = () => {
  return (
    <Container>
      <Image>
        <img src={pitch} alt="pitch" style={{width:"120px", height:"120px", border:"2px solid #d5d6d8", borderRadius:"10px"}}/>
      </Image>
      <Tab>Crea un <span style={{color:"#34b5bc", fontSize:"16px", fontWeight:"bold"}}>pitch</span> efectivo y atractivo para cumplir tus objetivos</Tab>
    </Container>
  );
};

export default News;
