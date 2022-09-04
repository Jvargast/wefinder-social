import { CloseIcon } from "@chakra-ui/icons";
import { Box, Modal } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GLOBALTYPES } from "../../redux/actions/globalTypes";
import { createStory } from "../../redux/actions/storyAction";
import {
  Content,
  Editor,
  Header,
  PostButton,
  SharedContent,
  SharedCreation,
  UploadImage,
  UserInfo,
} from "./styles";
import { imageShow } from "../../utils/mediaShow";

/* import { uploadImage, uploadPost } from "../../actions/UploadActions"; */

const ModalForm = ({ open, handleClose }) => {
  const { auth, theme, socket } = useSelector((state) => state);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 650,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [content, setContent] = useState("");
  const [images, setImages] = useState([]);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const files = [...e.target.files];
    let err = "";
    let newImages = [];

    files.forEach((file) => {
      if (!file) return (err = "File does not exist.");

      if (file.size > 1024 * 1024 * 5) {
        return (err = "The image/video largest is 5mb.");
      }

      return newImages.push(file);
    });

    if (err) dispatch({ type: GLOBALTYPES.ALERT, payload: { error: err } });
    setImages([...images, ...newImages]);
  };

  const postArticle = (e) => {
    e.preventDefault();
    if (e.target !== e.currentTarget) {
      return;
    }

    dispatch(createStory({ content, images, auth, socket }));

    setContent("");
    setImages([]);
    //dispatch({ type: GLOBALTYPES.STATUS, payload: false });
    handleClose();
  };


  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Content>
          <Header>
            <h2>Crear Destacado</h2>
            <CloseIcon
              onClick={handleClose}
              style={{ width: "26px", cursor: "pointer" }}
            />
          </Header>
          <SharedContent>
            <UserInfo>
              {/* props.user.photoURL ? (
                <img src={props.user.photoURL} alt="usr" />
              ) : (
                <img src={userIcon} alt="usr" />
              ) */}
              <span>{/* props.user.displayName */}</span>
            </UserInfo>
            <Editor>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="¿De qué quieres hablar?"
                autoFocus={true}
                style={{
                  filter: theme ? "invert(1)" : "invert(0)",
                  color: theme ? "white" : "#111",
                  background: theme ? "rgba(0,0,0,.03)" : "",
                }}
              />
              <UploadImage>
                <input
                  type="file"
                  accept="image/gif, image/jpeg, image/png"
                  name="image"
                  id="file"
                  style={{ display: "none" }}
                  onChange={handleChange}
                />
                <p>
                  <label htmlFor="file">
                    Seleccionar una imagen para compartir
                  </label>
                </p>
                {images.map((img, index) => (
                  <div key={index} id="file_img">
                    {!img.type.match(/video/i) ? imageShow(URL.createObjectURL(img), theme):null}
                  </div>
                ))}
              </UploadImage>
            </Editor>
          </SharedContent>
          <SharedCreation>
            <PostButton
              disabled={!content ? true : false}
              onClick={(event) => postArticle(event)}
            >
              Publicar
            </PostButton>
          </SharedCreation>
        </Content>
      </Box>
    </Modal>
  );
};

export default ModalForm;
