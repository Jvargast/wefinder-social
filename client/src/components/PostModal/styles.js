import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  background-color: #e0dbdb;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1 rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

export const SharedBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #2b2a2a;
  background: #e0dbdb;
  div {
    button {
      outline: none;
      background: transparent;
      font-size: 14px;
      line-height: 1.5;
      min-height: 48px;
      color: rgba(0, 0, 0, 0.6);
      border: none;
      display: flex;
      align-items: center;
      font-weight: 600;
      transition: ease-out;
      cursor: pointer;
      img {
        width: 15px;
        height: 15px;
      }
    }
    &:first-child {
      display: flex;
      align-items: center;
      padding: 0 16px 0 16px;
      img {
        width: 48px;
        border-radius: 50%;
        margin-right: 8px;
        height: 48px;
      }
      button {
        margin: 4px 0;
        flex-grow: 1;
        border-radius: 35px;
        padding-left: 16px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        background-color: white;
        text-align: left;
      }
    }
    &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-bottom: 4px;
      button {
        img {
          margin: 0 4px 0 -2px;
        }
        span {
          color: #038d84;
          &:hover {
            color: #ffb900;
          }
        }
      }
    }
  }
`;

export const PreviewImage = styled.div`
  position: relative;
  height: 100%;
  /* display: flex; */
  div {
    & > img {
      position: absolute;
      right: 1rem;
      top: 0.5rem;
      cursor: pointer;
      filter: invert(99%) sepia(88%) saturate(2%) hue-rotate(264deg) brightness(112%) contrast(100%);
    }
  }
  & > img {
    width: 100%;
    max-height: 20rem;
    object-fit: contain;
    border-radius: 0.5rem;
  }
`;
export const PostButton = styled.button`
  min-width: 60px;
  border-radius: 20px;
  padding-left: 16px;
  padding-right: 16px;
  background: ${(props) => (props.disabled ? "rgba(0, 0, 0, 0.8)" : "#038d84")};
  color: ${(props) => (props.disabled ? "rgba(1, 1, 1, 0.8)" : "white")};
  &:hover {
    background: ${(props) =>
      props.disabled ? "rgba(0, 0, 0, 0.08)" : "#ffb900"};
  }
`;