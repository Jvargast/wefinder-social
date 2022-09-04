import React, { /* useRef, useState */ } from 'react'
import { Container, /* PostButton, PreviewImage, */ SharedBox } from '../PostModal/styles';
import userIcon from "../../assets/user.svg";
import pIcon from "../../assets/photo-icon.svg";
import eIcon from "../../assets/event-icon.svg";
import vIcon from "../../assets/video-icon.svg";
import aIcon from "../../assets/article-icon.svg";

export default function PostModalLogin() {

  return (
    <Container>
        <SharedBox>
            <div>
              <img src={userIcon} alt="main-user" />
              <button>
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
    </Container>
  )
}
