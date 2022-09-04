import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
  max-width: 552px;
  background-color: white;
  max-height: 90%;
  overflow: initial;
  border-radius: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  top: 32px;
  margin: 0 auto;
`;

export const Header = styled.div`
  display: flex;
  padding: 16px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  font-size: 16px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.6);
  font-weight: 400;
  justify-content: space-between;
  align-items: center;
  h2 {
    color:black;
  }
  button {
    height: 40px;
    width: 40px;
    min-width: auto;
    color: rgba(0, 0, 0, 0.15);
    cursor: pointer;
    svg,
    img {
      pointer-events: none;
    }
  }
`;

export const SharedContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
  vertical-align: baseline;
  background: transparent;
  padding: 8px 12px;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 24px;
  svg,
  img {
    width: 48px;
    height: 48px;
    background-clip: content-box;
    border: 2px solid transparent;
    border-radius: 50%;
  }
  span {
    font-weight: 600;
    font-size: 16px;
    line-height: 1.5;
    margin-left: 5px;
  }
`;

export const SharedCreation = styled.div`
  display: flex;
  justify-content: center;
  padding: 12px 24px 12px 16px;
  align-items: center;
`;

export const AssetButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  min-width: auto;
  color: rgba(0, 0, 0, 0.5);
  img {
    width: 18px;
    height: 18px;
  }
`;

export const AttachAssets = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  ${AssetButton} {
    width: 40px;
  }
`;

export const SharedComment = styled.div`
  padding-left: 8px;
  margin-right: auto;
  border-left: 1px solid rgba(0, 0, 0, 0.15);
  ${AssetButton} {
    svg {
      margin-right: 5px;
    }
  }
`;

export const PostButton = styled.button`
  min-width: 60px;
  border-radius: 20px;
  padding:10px;
  background: ${(props) => (props.disabled ? "rgba(0, 0, 0, 0.8)" : "var(--wefinder)")};
  color: ${(props) => (props.disabled ? "gray" : "white")};
  &:hover {
    background: ${(props) =>
      props.disabled ? "rgba(0, 0, 0, 0.08)" : "#ffb900"};
  }
`;

export const Editor = styled.div`
  padding: 12px 24px;
  textarea {
    width: 100%;
    min-height: 100px;
    resize: none;
    color:black;
  }
  input {
    width: 100%;
    height: 35px;
    font-size: 18px;
    margin-bottom: 20px;
  }
`;

export const UploadImage = styled.div`
  text-align: center;
  img {
    width: 100%;
    height: 200px;
    object-fit: contain;
  }
`;
