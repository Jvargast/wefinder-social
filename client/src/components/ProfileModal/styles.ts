import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  h3 {
    color: black;
  }

  button {
    width: 6rem;
    height: 2rem;
    align-self: flex-end;
    background-color: aquamarine;
    border-radius: 14px;
    padding: 4px;
    color: black;
  }

  div {
    display: flex;
    gap: 1rem;
    height: 2rem;
    width: 100%;
  }
`;

export const Input = styled.input`
border: none;
      outline: none;
      background-color: #e0dadb;
      border-radius: 8px;
      padding: 20px;
      flex: 1;
      color: black;
`;
