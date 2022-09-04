import React from 'react';

/* import Post from '../Post'; */

import { Container, Tab, Posts } from './styles';

const Feed = () => {


  return (
    <Container>
      <Tab>Publicaciones</Tab>
      <Posts>
      {/* loading
        ? "Cargando Publicaciones...."
        : posts.map((post:any, id:any) => {
            return <Post data={post} key={id} loading={loading}/>;
          }) */}
      </Posts>
    </Container>
  );
};

export default Feed;