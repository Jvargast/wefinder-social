import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: none;
  @media (min-width: 1000px) {
    border-radius: 1.5rem;
    display: flex;
    flex-direction: column;
    position: relative;
    gap: 1rem;
    overflow-x: clip;
    background-color: #fff;
  }

  & > span {
    font-weight: bold;
    color: orange;
    align-self: center;
    margin-bottom: 1rem;
    cursor: pointer;
  }
`;

export const ProfileImages = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > img:nth-of-type(1) {
    width: 100%;
  }
  & > img:nth-of-type(2) {
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    position: absolute;
    bottom: -3rem;
    box-shadow: var(--wefinder);
  }
`;

export const ProfileName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
  gap: 10px;

  & > span:nth-of-type(1) {
    font-weight: bold;
    color: black;
  }
  & > span:nth-of-type(2) {
    color: black;
  }
`;

export const FollowStatus = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  & > hr {
    width: 85%;
    border: 1px solid var(--wefinder);
  }
  & > div {
    display: flex;
    gap: 1rem;
    width: 80%;
    justify-content: space-around;
    align-items: center;
  }
`;

export const Follow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  align-items: center;
  justify-content: center;

  & > span:nth-of-type(1) {
    font-weight: bold;
    color: black;
  }
  & > span:nth-of-type(2) {
    color: gray;
    font-size: 13px;
  }
`;

export const V1 = styled.div`
  height: 150%;
  border-left: 2px solid var(--wefinder);
`;
