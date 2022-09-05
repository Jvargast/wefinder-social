import {
  Container,
  Header,
  BottomMenu,
  HomeIcon,
  SearchIcon,
  BellIcon,
  EmailIcon,
} from '../Main/styles';
import PostModalLogin from '../PostModalLogin';
import ProfilePage from '../ProfilePage';

export default function MainLogin() {
  return (
    <Container>    
      <Header>
        <PostModalLogin/>
      </Header>
      <ProfilePage/>
      {/* <BottomMenu>
        <HomeIcon className="active" />
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </BottomMenu> */}
    </Container>
  )
}
