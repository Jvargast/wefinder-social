import Main from '../Main';
import SideBar from '../Sidebar';

import { Container, Wrapper } from './styles';
import Form from '../Form';

export default function Layout() {
  return (
    <Container>
      <Wrapper>
        <Form/>
        <Main />
        <SideBar />
      </Wrapper>
    </Container>
  )
}
