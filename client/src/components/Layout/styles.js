import styled from "styled-components";

export const Container = styled.div`
  background: #eee;
`;

export const Wrapper = styled.div`
  margin-top: 30px;
  @media (min-width: 1000px) {
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
  }
`;

export const LeftSide =styled.div`
  display: none;
  @media (min-width: 1000px) {
    display:flex; 
    flex-direction:column;
    gap:1rem; 
    overflow:auto; 
    margin-top:80px; 
    margin-right:50px; 
    width:300px;
  }
`;
