import React, { useState } from "react";
import StickyBox from "react-sticky-box";
import {
  Body,
  Container,
  Formulario,
  Banner,
  Avatar,
  Title,
  Input,
  Button,
} from "./styles";
import logoW from '../../assets/logoW.svg'
import spinner from "../../assets/spinner.svg";
import { FormErrorMessage } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Text } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/authAction";

export default function LoginComponent() {
  
  const dispatch = useDispatch();


  const initialState = {
    email: "",
    password: "",
  };

  const [form, setForm] = useState(initialState);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(login(form));
    } catch (error) {
      console.log(error.message);
      setError(error);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <Container>
      <StickyBox>
        <Body>
          <Formulario>
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
                <span style={{ color: "midnightblue" }}>Iniciando Sesión!</span>
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
                    color:"black"
                  }}
                >
                  Iniciar Sesión
                </div>
                <div
                  style={{
                    width: "auto",
                    borderTop: "2px solid gray",
                    margin: "0 50px",
                    marginBottom: "20px",
                  }}
                ></div>
                <Text as="p" color="red.500">
                  {error}
                </Text>
                <form
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    flexDirection: "column",
                    marginTop:"50px"
                  }}
                  onSubmit={handleSubmit}
                >
                  <Input
                    placeholder="E-mail"
                    onChange={handleChange}
                    name="email"
                  />
                  <FormErrorMessage>Nombre inválido</FormErrorMessage>
                  <Input
                    placeholder="Contraseña"
                    onChange={handleChange}
                    name="password"
                    type="password"
                  />

                  <Button type="submit" disabled={form.email && form.password ? false : true}>Iniciar sesión</Button>
                </form>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <span>¿No tienes cuenta?</span>
                  <Link
                  to="/register"
                    style={{
                      color: "black",
                      fontSize: "12px",
                      cursor: "pointer",
                      marginLeft: "3px",
                    }}
                    
                  >
                    Regístrate
                  </Link>
                </div>
              </>
            )}
          </Formulario>
        </Body>
      </StickyBox>
    </Container>
  );
}
