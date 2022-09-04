import React, { useState } from "react";
import {
  ContainerSearch,
  IconContainer,
  Logo,
  SearchIcon,
  SearchInput,
  SearchWrapper,
} from "../Navbar/styles";
import logo from "../../assets/wefinderlogo.svg";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import SendIcon from "@mui/icons-material/Send";
import AddIcon from "@mui/icons-material/Add";
import PersonIcon from "@mui/icons-material/Person";
import { Popover, Typography } from "@mui/material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

export default function LoginNavbar() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <ContainerSearch>
      <div style={{ width: "200px", paddingLeft: "20px", cursor: "pointer" }}>
        <Logo src={logo} />
      </div>
      <SearchWrapper>
        <SearchInput placeholder="Buscar en wefinder" />
        <SearchIcon />
      </SearchWrapper>
      <IconContainer>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <HomeIcon />
          <span>Inicio</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <PeopleIcon />
          <span>Mi nodo</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <CalendarMonthIcon />
          <span>Noticias</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <ChatBubbleIcon />
          <span>Foro</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <SendIcon />
          <span>Mensajes</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <AddIcon />
          <span>Publicación</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
          onClick={handleClick}
        >
          <PersonIcon />
          <span>Mi muro</span>
        </div>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <Typography
            sx={{ p: 2 }}
            display={"flex"}
            style={{ color: "black", cursor: "pointer" }}
          >
            Mi perfil
          </Typography>
          <Typography
            sx={{ p: 2 }}
            display={"flex"}
            style={{ color: "black", cursor: "pointer" }}
          >
            Cerrar sesión <ExitToAppIcon />{" "}
          </Typography>
        </Popover>
      </IconContainer>
    </ContainerSearch>
  );
}
