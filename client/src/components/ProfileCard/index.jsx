import React from 'react';
import { Follow, FollowStatus, ProfileContainer, ProfileImages, ProfileName, V1 } from './styles';
import Cover from '../../assets/Cover.jpeg';
import Profile from '../../assets/user.svg';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const ProfileCard = ({location}) => {
  const {user} = useSelector((state) => state.authReducer.authData);
  let {posts} = useSelector((state)=>state.postReducer);
  posts = posts.filter((post)=> post.userId===user._id);

  
  return (
    <ProfileContainer>
        <ProfileImages>
            <img src={user.coverPicture ? "http://localhost:4200/images/" + user.coverPicture
              : Cover} alt=""/>
            <img src={user.profilePicture
              ? "http://localhost:4200/images/" + user.profilePicture
              : Profile} alt=""/>
        </ProfileImages>
        <ProfileName>
            <span>{user.username}</span>
            <span>{user.worksAt ? user.worksAt: "Escribe sobre ti"}</span>
        </ProfileName>
        <FollowStatus>
            <hr/>
            <div>
                <Follow>
                    <span>
                        {user.followers.length}
                    </span>
                    <span>
                        Seguidores
                    </span>
                </Follow>
                <V1></V1>
                <Follow>
                    <span>
                    {user.following.length}
                    </span>
                    <span>
                        Siguiendo
                    </span>
                </Follow>
                {location === 'profilePage'  && (
                <>
                <V1>
                </V1>
                <Follow>
                    <span>{posts.length}</span>
                    <span>Publicaciones</span>
                </Follow>
                </>)}
            </div>
            <hr/>
        </FollowStatus>
        {location === 'profilePage' ? "" : <span>
            <Link to={`/profile/${user._id}`} style={{textDecoration:"none", color:"inherit", cursor:"pointer"}}> Mi perfil</Link></span>}
    </ProfileContainer>
  )
}

export default ProfileCard