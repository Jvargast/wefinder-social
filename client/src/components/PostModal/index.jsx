import React, { /* useRef, useState */ } from 'react'
import { Container, /* PostButton, PreviewImage, */ SharedBox } from './styles';
import userIcon from "../../assets/user.svg";
/* import closeIcon from "../../assets/close-icon.svg"; */
import spinner from "../../assets/spinner.svg";
import pIcon from "../../assets/photo-icon.svg";
import eIcon from "../../assets/event-icon.svg";
import vIcon from "../../assets/video-icon.svg";
import aIcon from "../../assets/article-icon.svg";
import ModalForm from '../Modal';


export default function PostModal() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <Container>
        <SharedBox>
            <div>
              <img src={/* user.profilePicture ? "http://localhost:4200/images/" + user.profilePicture :  */userIcon} alt="main-user" />
              <button onClick={handleOpen}>
                Crear publicación
              </button>
            </div>
            <div>
              <button /* onClick={()=> imageRef.current.click()} */>
                <img src={pIcon} alt="p-icon" />
                <span>Foto</span>
              </button>

              <button>
                <img src={vIcon} alt="v-icon" />
                <span>Video</span>
              </button>
              <button>
                <img src={eIcon} alt="e-icon" />
                <span>Evento</span>
              </button>
              <button>
                <img src={aIcon} alt="a-icon" />
                <span>Artículo</span>
              </button>
            </div>
          </SharedBox>
          <ModalForm open={open} handleClose={handleClose}/>
          {false ? <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  background: "white"
                }}
              >
                <img src={spinner} alt="loading" style={{width:"40px"}}/>
              </div>:null}

    </Container>
  )
}
