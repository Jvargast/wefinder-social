import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 14px;
`;

export const Item = styled.div`
  padding: 10px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  & + div {
    border-top: 1px solid var(--outline);
  }
  &:first-child {
    padding-top: 13px;
    background: rgb(71,51,128);
    background: linear-gradient(90deg, rgba(71,51,128,1) 0%, rgba(128,102,159,1) 85%);
    border-radius: 14px 14px 0 0;
  }
  div:last-child {
    padding-bottom: 17px;
  }
`;
export const ItemContainer = styled.div`
  padding: 10px 16px;
  & + div {
    /* border-top: 1px solid var(--outline); */
  }
  &:first-child {
    padding-top: 13px;
  }
  &:last-child {
    padding-bottom: 17px;
  }
`;

export const Title = styled.span`
  font-size: 16px;
  color: white;
`;