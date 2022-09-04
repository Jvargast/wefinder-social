import React from "react";
import { useSelector } from "react-redux";
import { ChevronLeft, ChevronRight } from "styled-icons/material-outlined";
import Story from "./Story";
import { Container, Banner } from "./styles";
export default function Stories() {
  const { story, auth, theme } = useSelector(state => state)


  return (
    <Container>
      <div style={{ color: "#878787", fontSize:"16px" }}>Vitrina Destacados</div>
      <div style={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
        <ChevronLeft width={50} height={50} />
        <Banner>
          {story.stories.map(story => (
            <Story key={story._id} story={story} theme={theme} auth={auth}/>
          ))}
        </Banner>
        <ChevronRight width={50} height={50} />
      </div>
      <div style={{color:"white", width:"170px" }}></div>
    </Container>
  );
}
