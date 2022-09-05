import React from 'react';
import PostModal from '../PostModal';
import ProfilePage from '../ProfilePage';

import {
  Container,
  Header,
  BottomMenu,
  HomeIcon,
  SearchIcon,
  BellIcon,
  EmailIcon,
} from './styles';

export default function Main() {
  return (
    <Container>
      <Header>
        <PostModal/>
      </Header>
      {/* <ProfilePage /> */}
      {/* <BottomMenu>
        <HomeIcon className="active" />
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </BottomMenu> */}
    </Container>
  )
}
