import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 14px;
  align-items: center;
  > span {
    color: var(--gray);
    margin-bottom: 3px;
  }
`;

export const Image = styled.div`
    margin-top: 12px;
    width: 120px;
    height: min(120px,max(175px,30vw));
    background: var(--outline);
    border-radius: 14px;
    cursor: pointer;
`;

export const Tab = styled.div`
    width: 50%;
    height: 75px;
    margin-left: 10px;
    color: black;
`;