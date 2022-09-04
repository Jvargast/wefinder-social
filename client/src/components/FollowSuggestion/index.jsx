import React, { useState } from 'react';

import { Container, Avatar, Info, FollowButton } from './styles';
import userIcon from "../../assets/user.svg";
import { useDispatch, useSelector } from 'react-redux';
import { followUser, unfollowUser } from '../../actions/UserActions';



const FollowSuggestion = ({ name, nickname, picture, id, followers }) => {
  const dispatch =useDispatch();
  const {user} = useSelector((state)=> state.authReducer.authData);
  const [following, setFollowing] = useState(followers.includes(user._id))
  /* console.log("initialState",following) */
  const handleFollow = async() => {
    
    following ? 
    await dispatch(followUser(id, user)) : 
    await dispatch(unfollowUser(id, user));
    console.log("dentro del handle",following);
    setFollowing((prev)=>!prev)
  }
  return (
    <Container>
      <div>
        <Avatar>
          <img src={picture ? "http://localhost:4200/images/" + picture : userIcon} alt="main-user"/>
        </Avatar>

        <Info>
          <strong>{name}</strong>
          <span>@{nickname}</span>
        </Info>
      </div>

      <FollowButton outlined onClick={handleFollow}>{following ? "Dejar de seguir" : "Seguir"}</FollowButton>
    </Container>
  );
};

export default FollowSuggestion;