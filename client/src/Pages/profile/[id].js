import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Info from "../../components/pr/Info";
import LoadIcon from "../../assets/spinner.svg";
import Posts from "../../components/pr/Posts";
import Saved from "../../components/pr/saved";
import { getProfileUsers } from "../../redux/actions/profileAction";


const Profile = () => {
  const { profile, auth, theme} = useSelector((state) => state);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [saveTab, setSaveTab] = useState(false);

  useEffect(() => {
    if(profile.ids.every(item => item !== id)){
        dispatch(getProfileUsers({id, auth}))
    }
},[id, auth, dispatch, profile.ids])
  return (
    <div style={{ marginTop: "80px" }} className="profile">
     <Info auth={auth} profile={profile} dispatch={dispatch} id={id} theme={theme} />

      {auth.user._id === id && (
        <div className="profile_tab">
          <button
            className={saveTab ? "" : "active"}
            onClick={() => setSaveTab(false)}
            style={{borderRadius:"999px"}}
          >
            Publicaciones
          </button>
          <button
            className={saveTab ? "active" : ""}
            onClick={() => setSaveTab(true)}
            style={{borderRadius:"999px"}}
          >
            Guardados
          </button>
        </div>
      )}

      {profile.loading ? (
        <img className="d-block mx-auto" src={LoadIcon} alt="loading" />
      ) : (
        <>
          {saveTab ? (
            <Saved auth={auth} dispatch={dispatch} />
          ) : (
            <Posts auth={auth} profile={profile} dispatch={dispatch} id={id} theme={theme}/>
          )}
        </>
      )}
    </div>
  );
};

export default Profile;
