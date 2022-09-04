import styled from 'styled-components';

import { Search } from '../../styles/Icons';

export const ContainerSearch = styled.div`
  display: flex;
  width: 100%;
  height: 150px;
  position: fixed;
  top: 0;
  z-index: 3;
  max-height: 85px;
  justify-content: space-around;
  background: rgb(175,73,149);
background: linear-gradient(90deg, rgba(175,73,149,1) 0%, rgba(82,61,144,1) 100%);
  color: white;
`;

export const IconContainer = styled.div`
  /* position: relative;
  bottom: -85px;
  left: 21px;
  height: 670px;
  background: rgb(89 72 159); */
  display: none;

  @media (min-width: 1000px) {width: 50%;
    height: 100px;
    max-height: 85px;
    color:white;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;}

    
`;

export const SearchWrapper = styled.form`
  padding: 18px 24px;
  /* width: min(399px, 100%); */
  z-index: 2;
  max-height: 65px;
  position: relative;
  min-width: 250px;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 39px;
  font-size: 14px;
  padding: 0 10px 0 52px;
  border-radius: 19.5px;
  background: var(--white);
  color:var(--primary);
  &::placeholder {
    color: var(--gray);
  }

    
    ~ svg {
      position: relative;
    top: -33px;
    left: 15px;
    z-index: 1;
    transition: 180ms ease-in-out;
  }
    
  outline: 0;
  &:focus {
    border: 1px solid var(--wefinder);
    ~ svg {
      fill: #ffffff;
    }
  }
`;

export const SearchIcon = styled(Search)`
  width: 27px;
  height: 27px;
  fill: white;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 57px 24px 200px;
  margin-top: 3px;
  > div + div {
    margin-top: 15px;
  }
`;

export const Logo = styled.img`
    width: 100%;
    height: 100%;
`;