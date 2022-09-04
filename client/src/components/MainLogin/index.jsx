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
import logo from '../../assets/wefinderlogo.svg'
export default function MainLogin() {
  return (
    <Container>    
      <Header>
        <PostModalLogin/>
      </Header>
      <img src={logo} alt="logo" style={{marginTop:"83px", background:"#AF4995"}}/>
      <BottomMenu>
        <HomeIcon className="active" />
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </BottomMenu>
    </Container>
  )
}
