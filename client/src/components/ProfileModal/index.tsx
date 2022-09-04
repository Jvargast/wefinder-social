import { CloseIcon } from "@chakra-ui/icons";
import { Box, Modal } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Form, Input } from "./styles";
import { uploadImage } from "../../actions/UploadActions";
import { updateUser } from "../../actions/UserActions";
/* import { updateUser } from "../../actions/UserAction"; */


const ProfileModal = ({ open, handleClose, data }: any) => {
  const { password, ...other } = data;

  const [formData, setFormData] = useState(other);
  const [profileImage, setProfileImage] = useState<any>(null);
  const [coverImage, setCoverImage] = useState<any>(null);
  const dispatch = useDispatch<any>();
  const param = useParams();
  /* const { user } = useSelector((state:any) => state.authReducer.authData); */

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onImageChange = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      event.target.name === "profileImage"
        ? setProfileImage(img)
        : setCoverImage(img);
    }
  };
  //form submission
  const handleSubmit = (e: any) => {
    e.preventDefault();
    let UserData = formData;
    if (profileImage) {
      const data = new FormData();
      const fileName = Date.now() + profileImage.name;
      data.append("name", fileName);
      data.append("file", profileImage);
      UserData.profilePicture = fileName;
      try {
        dispatch(uploadImage(data));
      } catch (err) {
        console.log(err);
      }
    }
    if (coverImage) {
      const dataForm = new FormData();
      const fileName = Date.now() + coverImage.name;
      dataForm.append("name", fileName);
      dataForm.append("file", coverImage);
      UserData.coverPicture = fileName;
      try {
        dispatch(uploadImage(dataForm));
        console.log(formData);
      } catch (err) {
        console.log(err);
      }
    }
    dispatch(updateUser(param.id, UserData));
    handleClose();
  };
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 650,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <CloseIcon onClick={handleClose} style={{ width: "26px", cursor:"pointer" }} />
        <Form className="infoForm" onSubmit={handleSubmit}>
          <h3>Tu información</h3>
          <div>
            <Input
              value={formData.contactName}
              onChange={handleChange}
              type="text"
              placeholder="Nombre de contacto"
              name="contactName"
              className="infoInput"
            />
            <Input
              value={formData.phone}
              onChange={handleChange}
              type="text"
              placeholder="Telefono Móvil"
              name="phone"
              className="infoInput"
            />
            
          </div>

          <div>
          <Input
              value={formData.worksAt}
              onChange={handleChange}
              type="text"
              placeholder="Área de solución"
              name="solutionArea"
              className="infoInput"
            />
          </div>

          <div>
          <Input
              value={formData.occupation}
              onChange={handleChange}
              type="text"
              placeholder="Cargo"
              name="occupation"
              className="infoInput"
            />
            
            <Input
              value={formData.interest}
              onChange={handleChange}
              type="text"
              placeholder="Interes de la red"
              name="interest"
              className="infoInput"
            />
          </div>

          <div>
            Imagen de perfil
            <input type="file" name="profileImage" onChange={onImageChange} />
            Fondo de perfil
            <input type="file" name="coverImage" onChange={onImageChange} />
          </div>

          <button className="button infoButton" type="submit">
            Actualizar
          </button>
        </Form>
      </Box>
    </Modal>
  );
};

export default ProfileModal;
