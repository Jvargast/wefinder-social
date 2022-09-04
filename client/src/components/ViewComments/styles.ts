import { Link } from "react-router-dom";
import styled from "styled-components";

export const ProfileLink = styled(Link)`
  text-decoration: none;
  color: black;
  span {
    margin-right: 5px;
    margin-left: 5px;
    font-weight: 900;
    color: black;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  
  button {
    margin-bottom: 0.25rem;
    color: #636363;
    cursor: pointer;
    font-size: 14px;
    border: none;
    background: transparent;
  }
`;