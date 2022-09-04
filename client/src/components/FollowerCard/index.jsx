import React from 'react';
import {
    FollowerCardContainer,
  } from './styles';

const FollowerCard = () => {
  return (
    <FollowerCardContainer className="FollowersCard">
      <h3>People you may know</h3>

      {/* persons.map((person, id) => {
        if (person._id !== user._id) return <User person={person} key={id} />;
      }) */}
      {/* !location ? (
        <span onClick={() => setModalOpened(true)}>Show more</span>
      ) : (
        ""
      ) */}

      {/* <FollowersModal
        modalOpened={modalOpened}
        setModalOpened={setModalOpened}
      /> */}
    </FollowerCardContainer>
  )
}

export default FollowerCard