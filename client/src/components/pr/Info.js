import React, { useEffect, useState } from "react";
import { GLOBALTYPES } from "../../redux/actions/globalTypes";
import FollowBtn from "../FollowBtn";
import EditProfile from "./Edit";
import Followers from "./Followers";
import Following from "./Following";

const Info = ({ id, auth, profile, dispatch, theme }) => {
  const [userData, setUserData] = useState([]);
  const [onEdit, setOnEdit] = useState(false);
  const [showFollowers, setShowFollowers] = useState(false);
  const [showFollowing, setShowFollowing] = useState(false);


  useEffect(() => {
    async function getUser() {
      if(id === auth.user._id){
          setUserData([auth.user])
    }else{
        const newData = profile.users.filter(user => user._id === id)
          setUserData(newData)
    }
    }

    getUser();
    
}, [id, auth, dispatch,profile.users])
  

  useEffect(() => {
    if (showFollowers || showFollowing || onEdit) {
      dispatch({ type: GLOBALTYPES.MODAL, payload: true });
    } else {
      dispatch({ type: GLOBALTYPES.MODAL, payload: false });
    }
  }, [showFollowers, showFollowing, onEdit, dispatch]);


  return (
    <div className="info">
      {userData.map((user) => (
        <div className="info_container" key={user._id}>
          <img src={user.avatar} alt="avatar" style={{width:"150px", borderRadius:"9999px", height:"150px", filter: theme ? 'invert(1)' : 'invert(0)'}} /> 

          <div className="info_content">
            <div className="info_content_title">
              <h2>{user.username}</h2>
              {user._id === auth.user._id ? (
                <button
                  className="btn btn-outline-info"
                  onClick={() => setOnEdit(true)}
                >
                  Editar Perfil
                </button>
              ) : (
                <FollowBtn user={user} />
              )}
            </div>

            <div className="follow_btn">
              <span className="mr-4" onClick={() => setShowFollowers(true)}>
                {user.followers.length} Seguidores
              </span>
              <span className="ml-4" onClick={() => setShowFollowing(true)}>
                {user.following.length} Siguiendo
              </span>
            </div>

            <h6 style={{display:"flex"}}>
            <span style={{fontWeight:"bold"}}>Nombre startup:</span> <span style={{fontWeight:"bold", color:"purple", marginLeft:"5px"}}> {user.startupName}</span> 
              <span style={{fontWeight:"bold", marginLeft:"5px"}}>Teléfono: +569 </span>{user.mobile}
            </h6>
            <p className="m-0"><span style={{fontWeight:"bold"}}>Cargo: </span>{user.occupation}</p>
            <h6 className="m-0"><span style={{fontWeight:"bold"}}>Email: </span>{user.email}</h6>
            <p><span style={{fontWeight:"bold"}}>Área de solución: </span>{user.solutionArea}</p>
            <p><span style={{fontWeight:"bold"}}>Interés: </span>{user.interest}</p>
            <p><span style={{fontWeight:"bold"}}>Descripción: </span>{user.story}</p>
          </div>

          {onEdit && <EditProfile setOnEdit={setOnEdit} />}

          {showFollowers && (
            <Followers
              users={user.followers}
              setShowFollowers={setShowFollowers}
            />
          )}
          {showFollowing && (
            <Following
              users={user.following}
              setShowFollowing={setShowFollowing}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Info;
