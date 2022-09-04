import React from 'react';
import { useSelector } from 'react-redux';

import Post from '../Post'; 

import { Container, Tab, Posts } from './styles';

const Feed = () => {

  const {homePosts} = useSelector((state)=>state);


  return (
    <Container>
      <Tab>Publicaciones</Tab>
      <Posts>
      {homePosts.loading
        ? "Cargando Publicaciones...."
        : homePosts.postInit.map((post, id) => {
            return <Post data={post} key={id} loading={homePosts.loading}/>;
          })}
      </Posts>
    </Container>
  );
};

export default Feed;