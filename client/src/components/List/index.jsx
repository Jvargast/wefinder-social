import React from 'react';

import { Container, Item, Title, ItemContainer } from './styles';

const List = ({ title, elements }) => {
  return (
    <Container>
      <Item>
        <Title>{title}</Title>
      </Item>

      {elements.map((element, index) => (
        <ItemContainer key={index}>{element}</ItemContainer>
      ))}
    </Container>
  );
};

export default List;