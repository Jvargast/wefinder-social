import React from "react";
import StickyBox from "react-sticky-box";
import FollowSuggestion from "../FollowSuggestion";
import InfoCard from "../InfoCard";
import List from "../List";
import { Body } from "../Sidebar/styles";
import { Container } from "./styles";

const ProfileLeft = () => {
  return (
    <Container>
      <StickyBox>
        <Body>
        <InfoCard />
          <List
            title="Sugerencias para ti"
            elements={[
              <FollowSuggestion
                name="Luiz Batanero"
                nickname="@luizbatanero"
                picture="a"
                followers="a"
                id="a"
              />,
              <FollowSuggestion name="Luke Morales" nickname="@lukemorales" picture="a" followers="a" id="a"/>,
              <FollowSuggestion
                name="Camila Magalhães"
                nickname="@camilaamgl"
                picture="a"
                followers="a"
                id="a"
              />,
            ]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default ProfileLeft;
