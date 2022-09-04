import styled from 'styled-components';

export const Form = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-right: 20px;
  input {
    width: 100%;
    margin-left: 10px;
    margin-right: -62px;
    border: none;
    border-radius: 9999px;
    padding: 5px;
    color: black;
  }
  button {
    margin-left: -50px;
    border: none;
    color: black;
    font-size: 16px;
    padding: 10px 30px;
    border-radius: 9999px;
    cursor: pointer;
  }
`;