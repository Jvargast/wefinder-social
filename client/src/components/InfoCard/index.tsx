import React, { useEffect, useState } from "react";
/* import { UilPen } from "@iconscout/react-unicons"; */
/* import ProfileModal from "../ProfileModal/ProfileModal"; */
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { InfoHead, PersonalInfo, Info } from "./styles";
import EditIcon from "@mui/icons-material/Edit";
import ProfileModal from "../ProfileModal";

import * as UserApi from "../../api/UserRequest";
/*import { logout } from "../../actions/AuthActions"; */


const InfoCard = () => {
  const params = useParams();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  

  const profileUserId = params.id;
  const [profileUser, setProfileUser] = useState<any>({});

  const { user } = useSelector((state: any) => state.authReducer.authData);

  useEffect(() => {
    const fetchProfileUser = async () => {
      if (profileUserId === user._id) {
        setProfileUser(user);
      } else {
        console.log("fetching");
        const profileUser = await UserApi.getUser(profileUserId);
        setProfileUser(profileUser);
      }
    };
    fetchProfileUser();
  }, [profileUserId, user]);

  return (
    <PersonalInfo className="InfoCard">
      <InfoHead className="infoHead">
        <h4>Información del perfil</h4>
        {user._id === profileUserId ? (
          <div>
            <EditIcon onClick={handleOpen} style={{ cursor: "pointer" }} />
            <ProfileModal open={open} handleClose={handleClose} data={user} />
          </div>
        ) : (
          ""
        )}
      </InfoHead>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Info className="info">
          
          <span>
            <b>Contacto</b>
          </span>
          <span>{profileUser.contactName}</span>
        </Info>
        <Info className="info">
          <span>
            <b>Cargo </b>
          </span>
          <span>{profileUser.occupation}</span>
        </Info>
        <Info className="info">
          <span>
            <b>Telefono móvil </b>
          </span>
          <span>{profileUser.phone}</span>
        </Info>
        <Info className="info">
          <span>
            <b>Área de solución </b>
          </span>
          <span>{profileUser.solutionArea}</span>
        </Info>
        <Info className="info">
          <span>
            <b>Interés de la red </b>
          </span>
          <span>{profileUser.interest}</span>
        </Info>
      </div>
    </PersonalInfo>
  );
};

export default InfoCard;
