import styled from "styled-components";

export const PersonalInfo = styled.div`
  gap: 0.75rem;
  background-color: white;
  border-radius: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 200px;
`;

export const InfoHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
  background: rgb(80,70,143);
  background: linear-gradient(90deg, rgba(80,70,143,1) 0%, rgba(122,105,161,1) 48%);
  border-radius: 15px 15px 0 0;
  padding: 10px 16px;
`;

export const Info = styled.div`
margin-left: 15px;
padding: 4px;
    span {
      margin-right: 5px;
      color:gray;
        b {
            color: black;
        }
    }
`;