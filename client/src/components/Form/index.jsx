/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import StickyBox from "react-sticky-box";
import spinner from "../../assets/spinner.svg";
import {
  Body,
  Container,
  Formulario,
  Banner,
  Avatar,
  Title,
  Input,
  Button,
  Pass,
} from "./styles";
import { Link, useNavigate } from "react-router-dom";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/actions/authAction";
import logoW from '../../assets/logoW.svg'
export default function Form() {
  const navigate = useNavigate();
  const { auth, alert } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if (auth.token) navigate("/");
  }, [auth.token, navigate]);

  const initialState = {
    username: "",
    email: "",
    password: "",
    startupName: "",
    agree: false,
  };

  const [form, setForm] = useState(initialState);
  const { startupName, username, email, password } = form

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("inicio")
      dispatch(register(form));
      console.log("no pasa")
    } catch (error) {
      console.log(error.message);
    }
  };
  const [typePass, setTypePass] = useState(false);
  const handleChange = (e) => {
    const { value, name, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  return (
    <Container>
      <StickyBox>
        <Body>
          <Formulario style={{ height: "900px !important" }}>
            <Banner>
              <Avatar>
                <img src={logoW} alt="logoW" style={{objectFit:"contain"}}/>
              </Avatar>
            </Banner>
            {false ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "20px",
                }}
              >
                <img src={spinner} alt="loading" />
                <span style={{ color: "midnightblue" }}>
                  CREANDO USUARIO...
                </span>
              </div>
            ) : (
              <>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: "20px",
                  }}
                >
                  <Title>¡Bienvenido!</Title>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: "20px",
                  }}
                >
                  <span style={{ color: "black", marginRight: "5px" }}>
                    Registrate Aquí
                  </span>
                  <PersonAddIcon />
                </div>
                <div
                  style={{
                    width: "auto",
                    borderTop: "2px solid gray",
                    margin: "0 50px",
                    marginBottom: "20px",
                  }}
                ></div>
                <form
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  {/* !!error.name && (
                    <span style={{ color: "red", fontSize: "12px", display:"flex", justifyContent:"center", alignItems:"center", marginLeft:"5px" }}>
                      {error.name}
                    </span>
                  ) */}
                  <Input
                    placeholder="Nombre startup"
                    name="startupName"
                    id="startupName"
                    onChange={handleChange}
                    value={startupName}
                    autoComplete="off"
                    style={{
                      background: `${alert.startupName ? "#fd2d6a14" : ""}`,
                    }}
                  />
                  <small className="form-text text-danger">
                    {alert.startupName ? alert.startupName : ""}
                  </small>

                  <Input
                    placeholder="E-mail"
                    onChange={handleChange}
                    name="email"
                    style={{ background: `${alert.email ? "#fd2d6a14" : ""}` }}
                    value={email}
                  />
                  <small className="form-text text-danger">
                    {alert.email ? alert.email : ""}
                  </small>
                  <Input
                    placeholder="Usuario"
                    onChange={handleChange}
                    name="username"
                    value={username}
                    style={{
                      background: `${alert.username ? "#fd2d6a14" : ""}`,
                    }}
                  />
                  <small className="form-text text-danger">
                    {alert.username ? alert.username : ""}
                  </small>
                  <Pass>
                    <input
                      placeholder="Contraseña"
                      onChange={handleChange}
                      name="password"
                      type={typePass ? "text" : "password"}
                      value={password}
                      style={{
                        background: `${alert.password ? "#fd2d6a14" : ""}`,
                      }}
                    />

                    <small onClick={() => setTypePass(!typePass)}>
                      {typePass ? "Hide" : "Show"}
                    </small>
                  </Pass>
                  <small className="form-text text-danger">
                    {alert.password ? alert.password : ""}
                  </small>

                  <div style={{ marginBottom: "5px" }}>
                    <input
                      type="checkbox"
                      id="scales"
                      name="agree"
                      onChange={handleChange}
                    />
                    <label
                      style={{
                        fontSize: "11px",
                        marginLeft: "2px",
                        color: "black",
                      }}
                      htmlFor="scales"
                    >
                      He leído y acepto las{" "}
                      <span style={{ color: "#1D71B8" }}>políticas</span> de la
                      red wefinder
                    </label>
                  </div>
                  <small className="form-text text-danger">
                        {alert.agree ? alert.agree : ''}
                  </small>
                  {/* validForm && form.email !== "" ? (
                    ""
                  ) : (
                    <p color="red">Por favor acepta las políticas</p>
                  ) */}
                  <Button
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Registrar
                  </Button>
                </form>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <span>¿Ya tienes cuenta?</span>
                  <Link
                    to="/"
                    style={{
                      color: "black",
                      fontSize: "12px",
                      marginLeft: "3px",
                      cursor: "pointer",
                    }}
                  >
                    Iniciar sesión
                  </Link>
                </div>
              </>
            )}
          </Formulario>
          {/* false ? null : (
            <Formulario>completa perfil si hay registro</Formulario>
          ) */}
        </Body>
      </StickyBox>
    </Container>
  );
}
