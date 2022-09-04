import styled from 'styled-components';

export const Container = styled.div`
display: none;
@media (min-width: 1000px) {
    display: flex;
  width: 100%;
  /* height: 100%; */
  color: var(--gray);
  background:#fff;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
}
  
`;
export const Banner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* width: 80%; */
  background: #fff;
  padding: 8px 2px 8px 2px;
`;

export const Avatar = styled.div`
  width: max(45px, min(115px, 22vw));
  height: max(45px, min(115px, 22vw));
  border: 3.75px solid var(--primary);
  margin-right: 15px;
  background: var(--gray);
  border-radius: 50%;
  bottom: max(-60px, -10vw);
  display: flex;
  justify-content: center;
  align-items: center;
`;