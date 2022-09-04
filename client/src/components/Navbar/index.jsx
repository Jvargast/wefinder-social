import React, { useState } from "react";
import {
  ContainerSearch,
  IconContainer,
  Logo,
  SearchIcon,
  SearchInput,
  SearchWrapper,
} from "./styles";
import logo from "../../assets/wefinderlogo.svg";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import SendIcon from "@mui/icons-material/Send";
import { Link, useLocation } from "react-router-dom";
import { Popover } from "@mui/material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/authAction";
import { GLOBALTYPES } from "../../redux/actions/globalTypes";
import { getDataAPI } from "../../utils/fetchData";
import UserCard from "../UserCard";
import Load from "../../assets/spinner.svg";
import NotifyModal from "../NotifyModal";
import ModalForm from "../Modal";
import add from '../../assets/add.svg'
import noticias from '../../assets/noticias.svg'


export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const { auth, theme, notify } = useSelector((state) => state);
  const { pathname } = useLocation();
  const isActive = (pn) => {
    if (pn === pathname) return "active";
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);
  const [load, setLoad] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!search) return;

    try {
      setLoad(true);
      const res = await getDataAPI(`search?username=${search}`, auth.token);
      setUsers(res.data.users);
      setLoad(false);
    } catch (err) {
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: { error: err.response.data.msg },
      });
    }
  };

  const handleCloseSearch = () => {
    setSearch("");
    setUsers([]);
  };


  //Only admin
  const [openModal, setOpenModal] = useState(false);
  const handleOpen = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <ContainerSearch>
      <Link
        style={{ width: "200px", paddingLeft: "20px", cursor: "pointer" }}
        to="/"
        className={`nav-item px-2 ${isActive("/")}`}
      >
        <Logo src={logo} />
      </Link>
      <SearchWrapper onSubmit={handleSearch}>
        <SearchInput
          placeholder="Buscar en wefinder"
          onChange={(e) =>
            setSearch(e.target.value.toLowerCase().replace(/ /g, ""))
          }
          value={search}
          id="search"
        />
        <button type="submit" style={{ display: "none" }}>
          Search
        </button>
          <div style={{width:"30px",display:"flex", justifyContent:"center", height:"30px", background:"#343434", borderRadius:"9999px", position:"relative", left:"5px", top:"-34px",zIndex:"1"}}>
          <SearchIcon/>
          </div> 
        
        <div
          className="close_search"
          onClick={handleCloseSearch}
          style={{ opacity: users.length === 0 ? 0 : 1 }}
        >
          &times;
        </div>
        <div className="users">
          {search &&
            users.map((user) => (
              <UserCard
                key={user._id}
                user={user}
                border="border"
                handleClose={handleClose}
              />
            ))}
        </div>
        {load && <img className="loading" src={Load} alt="loading" />}
      </SearchWrapper>
      <IconContainer>
        <Link
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            textDecoration: "none",
          }}
          to="/"
          className={`nav-item px-2 text-white ${isActive("/")}`}
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
            <HomeIcon style={{ color: "white" }} />
          </div>
          <span>Inicio</span>
        </Link>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
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
            <PeopleIcon />
          </div>
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
            <img src={noticias} alt="note" style={{width:"30px", height:"30px"}}/>
          </div>
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
            <ChatBubbleIcon style={{ color: "white" }} />
          </div>
          <span>Foro</span>
        </div>
        <Link
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            textDecoration: "none",
            color: "white",
          }}
          to="/message"
          className={`nav-item px-2 text-white ${isActive("/chat")}`}
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
            <SendIcon style={{ color: "white" }} />
          </div>
          <span>Mensajes</span>
        </Link>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
          onClick={() => dispatch({ type: GLOBALTYPES.STATUS, payload: true })}
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
            <img src={add} alt="add" style={{background:"white"}} />
          </div>
          <span>Publicación</span>
        </div>
        <li
          className="nav-item dropdown"
          style={{ opacity: 1, listStyle: "none" }}
        >
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
                borderRadius: "9999px",
                background: "#3f3f40",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <NotificationsNoneIcon
                style={{ color: notify.data.length > 0 ? "crimson" : "white",position:"relative", left:"5px" }}
              />
              <span className="notify_length" style={{position:"relative", top:"13px"}}>{notify.data.length}</span>
            </div>
            <span>Notificaciones</span>
          </span>

          <div
            className="dropdown-menu"
            aria-labelledby="navbarDropdown"
            style={{ transform: "translateX(75px)" }}
          >
            <NotifyModal />
          </div>
        </li>
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
              style={{ width: "40px", height: "40px", borderRadius: "9999px" }}
            />
          </div>
          {/* <PersonIcon/> */}
          <span>Mi muro</span>
        </div>
        {true ? (
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
              <Link
                sx={{ p: 2 }}
                display={"flex"}
                className="dropdown-item"
                style={{
                  color: "black",
                  cursor: "pointer",
                  textDecoration: "none",
                }}
                to={`/profile/${auth.user._id}`}
              >
                Mi perfil
              </Link>
              <label
                htmlFor="theme"
                className="dropdown-item"
                onClick={() =>
                  dispatch({
                    type: GLOBALTYPES.THEME,
                    payload: !theme,
                  })
                }
              >
                {theme ? "Light mode" : "Dark mode"}
              </label>
              {auth.user.role === 'ADMIN' ? <label
              className="dropdown-item"
              onClick={handleOpen}>
                Crear Destacado
              </label> : null}
              <Link
                sx={{ p: 2 }}
                display={"flex"}
                className="dropdown-item"
                style={{
                  color: "black",
                  cursor: "pointer",
                  textDecoration: "none",
                }}
                onClick={() => dispatch(logout())}
                to="/"
              >
                Cerrar sesión <ExitToAppIcon />{" "}
              </Link>
            </div>
          </Popover>
        ) : null}
      </IconContainer>
      <ModalForm open={openModal} handleClose={handleCloseModal}/>
    </ContainerSearch>
  );
}
