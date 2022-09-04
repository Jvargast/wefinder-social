import React, { useState } from "react";
import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SendIcon from "@mui/icons-material/Send";
import AddIcon from "@mui/icons-material/Add";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Popover } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/authAction";
import { GLOBALTYPES } from "../../redux/actions/globalTypes";
import NotifyModal from "../NotifyModal";

const Nav = styled.nav`
  z-index: 100;
  position: fixed;
  bottom: 10%;
  width: 456px;
  margin-left: -228px;
  background: white;
  left: 50%;
  padding: 0 2em;
  border-radius: 20px;
  box-shadow: rgb(50 50 93 / 25%) 0 50px 100px -20px,
    rgb(0 0 0 /30%) 0 30px 60px -30px;
  @media (min-width: 1000px) {
    display: none;
  }
`;

const UnorderedLists = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
`;

const LinkStyled = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1em;
  line-height: 1.4;
  width: 80px;
  transition: all 0.3s ease-out;
  span {
    color: black;
    font-size: 10px;
  }
  /* font-size: 1.8em; */
`;

const Bars = () => {
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const { auth, notify } = useSelector((state) => state);
  return (
    <Nav>
      <div className="nav__menu" id="nav-menu">
        <UnorderedLists className="nav__list">
          <li className="nav__item">
            <LinkStyled to="/" className="nav__link active-link">
              <HomeIcon></HomeIcon>
              <span className="nav__name">Inicio</span>
            </LinkStyled>
          </li>
          <li className="nav__item">
            <LinkStyled to="/message" className="nav__link">
              <SendIcon></SendIcon>
              <span className="nav__name">Mensajes</span>
            </LinkStyled>
          </li>

          <li className="nav__item">
            <LinkStyled
              to="#"
              className="nav__link"
              onClick={() =>
                dispatch({ type: GLOBALTYPES.STATUS, payload: true })
              }
            >
              <AddIcon></AddIcon>
              <span className="nav__name">Publicar</span>
            </LinkStyled>
          </li>

          <li className="nav__item">
          <span
            className="nav-link position-relative"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            style={{display:"flex", flexDirection:"column", alignItems:"center"}}
          >
            <div
              style={{
                width: "50px",
                height: "50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <NotificationsNoneIcon
                style={{ color: notify.data.length > 0 ? "crimson" : "#007bff",position:"relative", left:"5px" }}
              />
              <span className="notify_length" style={{position:"relative", top:"13px"}}>{notify.data.length}</span>
            </div>
            <span style={{fontSize:"10px"}}>Notificaciones</span>
          </span>

          <div
            className="dropdown-menu"
            aria-labelledby="navbarDropdown"
            style={{ transform: "translateX(75px)" }}
          >
            <NotifyModal />
          </div>
          </li>

          <li className="nav__item">
            <LinkStyled
              /* style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }} */
              onClick={handleClick}
              to="#"
            >
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "9999px",
                  background: "#3f3f40",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={auth.user.avatar}
                  alt="avatar"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "9999px",
                  }}
                />
              </div>
              {/* <PersonIcon/> */}
              <span>Mi muro</span>
            </LinkStyled>
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
              <div style={{ display: "flex", flexDirection: "column" }}>
                <LinkStyled
                  sx={{ p: 2 }}
                  display={"flex"}
                  className="dropdown-item"
                  style={{
                    color: "black",
                    cursor: "pointer",
                    textDecoration: "none",
                    width: "auto",
                  }}
                  to={`/profile/${auth.user._id}`}
                >
                  Mi perfil
                </LinkStyled>
                <LinkStyled
                  sx={{ p: 2 }}
                  display={"flex"}
                  className="dropdown-item"
                  style={{
                    color: "black",
                    cursor: "pointer",
                    textDecoration: "none",
                    width: "auto",
                    display: "flex",
                    flexDirection: "row",
                  }}
                  onClick={() => dispatch(logout())}
                  to="/"
                >
                  Cerrar sesión <ExitToAppIcon />{" "}
                </LinkStyled>
              </div>
            </Popover>
          </li>
        </UnorderedLists>
      </div>
    </Nav>
  );
};

export default Bars;
