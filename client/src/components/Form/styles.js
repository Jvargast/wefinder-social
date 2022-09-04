import styled from 'styled-components';


export const Container = styled.div`
  display: none;
  @media (min-width: 1000px) {
    display: flex;
    flex-direction: column;
    width: min(399px, 100%);
    min-height: 100vh;
    
  }
`;

export const Formulario = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 14px;
  height: 620px;
`;
export const FormularioLogin = styled.div`
display: flex;
  flex-direction: column;
  background: white;
  border-radius: 14px;
  height: 460px;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 57px 24px 200px;
  margin-top: 30px;
  > div + div {
    margin-top: 15px;
  }
`;

export const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: min(33vw, 70px);
  background: rgb(71,51,128);
background: linear-gradient(90deg, rgba(71,51,128,1) 0%, rgba(128,102,159,1) 85%);
  border-radius: 14px 14px 0 0;
  position: relative;
`;

export const Avatar = styled.div`
  width: max(45px, min(100px, 22vw));
  height: max(45px, min(100px, 22vw));
  background: var(--gray);
  border-radius: 50%;
  position: absolute;
  bottom: max(-60px, -10vw);
  display: flex;

`;

export const Title = styled.h1`
    margin-top: 60px;
    font-size: 24px;
    color: var(--gray);
`;

export const Input = styled.input`
    border-radius: 10px;
    border: 1px solid gray;
    width: 80%;
    padding: 5px;
    margin-bottom: 10px;
`;

export const Button = styled.button`
    background: #aa4e9e;
    padding: 9px 18px 9px 18px;
    border-radius: 10px;
    cursor: pointer;
    color: white;
`;

export const Pass = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  margin-right: 20px;
  align-items: baseline;

  input {
    margin-left: 10px;
    margin-right: -62px;
    color: black;
    border-radius: 10px;
    border: 1px solid gray;
    width: 100%;
    padding: 5px;
    margin-bottom: 10px;
  }

  span {
    margin-left: -50px;
    border: none;
    color: black;
    font-size: 16px;
    padding: 10px 30px;
    border-radius: 9999px;
    cursor: pointer;
  }
`;