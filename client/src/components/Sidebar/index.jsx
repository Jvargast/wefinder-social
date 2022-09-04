import React, { /* useState */ } from 'react';
import StickyBox from 'react-sticky-box';

import List from '../List';
/* import FollowSuggestion from '../FollowSuggestion'; */
import News from '../News';

import {
  Container,
  Body,
} from './styles';


const SideBar = () => {
  /* const [persons, setPersons] = useState([1,2]);
  setPersons([1,2]); */


  return (
    <Container>
      <StickyBox>
        <Body>
          <List
            title="¿Buscas servicios?"
            elements={[
              <News />,
              <News />,
            ]}
          />
          {/* <List
            title="Sugerencias para ti"
            elements={[persons.map((item,i) =>  {return( <FollowSuggestion/>)})
            ]}
          />  */}
        </Body>
      </StickyBox>
    </Container>
  );
};
export default SideBar;