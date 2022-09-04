import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Tab = styled.div`
  padding: 11px 0 15px;
  text-align: center;
  font-weight: bold;
  font-size: 15px;
  outline: 0;
  cursor: pointer;
  color: var(--white);
  border-bottom: 2px solid var(--wefinder);
  background: rgb(78,67,143);
  margin-top: 84px;
  background: linear-gradient(90deg, rgba(78,67,143,1) 17%, rgba(87,75,147,1) 43%, rgba(122,105,161,1) 77%);
  &:hover {
    
  }
`;

export const Posts = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
`;