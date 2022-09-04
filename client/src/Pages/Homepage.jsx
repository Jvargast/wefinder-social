import React from "react";
/* import { useSelector } from "react-redux"; */
import Form from "../components/Form";
import { Container, Wrapper } from "../components/Layout/styles";
import Main from "../components/Main";
import MainLogin from "../components/MainLogin";
import SideBar from "../components/Sidebar";

export default function Homepage() {
  /* const user = useSelector((state) => state.authReducer.authData); */
  return (
    <>
      <Container>
        <Wrapper>
          <Form/>
          {false ? <Main /> : <MainLogin/>}
          <div style={{marginTop:"60px",marginLeft:"20px", width:"300px"}}>
            <SideBar />
          </div>
        </Wrapper>
      </Container>
    </>
  );
}
