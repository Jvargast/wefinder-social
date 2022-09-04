import "./App.css";
import React, { useEffect } from "react";
import GlobalStyles from "./styles/GlobalStyles";
import { Routes, Route, Navigate } from "react-router-dom";
import Feed from "./Pages/Feed";
import Navbar from "./components/Navbar";
import Homepage from "./Pages/Homepage";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./theme";
import LoginPage from "./Pages/Login";
import Chat from "./Pages/Chat";
import { useSelector, useDispatch } from "react-redux";
import LoginNavbar from "./components/LoginNavbar";
import StatusModal from './components/StatusModal'
import Peer from 'peerjs'
import PageRender from "./customRouter/PageRender";
import PrivateRouter from "./customRouter/PrivateRouter";
import Alert from "./components/Alert/Alert";
import { refreshToken } from "./redux/actions/authAction";
import { getAllPosts, getPosts } from "./redux/actions/postAction";
import { getSuggestions } from "./redux/actions/suggestionsAction";
import { getNotifies } from "./redux/actions/notifyAction";
import SocketClient from './SocketClient'
import { GLOBALTYPES } from "./redux/actions/globalTypes";
import io from "socket.io-client";
import CallModal from "./components/message/CallModal";
import { getStories } from "./redux/actions/storyAction";
import Bars from "./components/Navbar/Bars";
function App() {
  const { auth , status, modal, call  } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshToken());

    const socket = io();
    dispatch({ type: GLOBALTYPES.SOCKET, payload: socket });
    return () => socket.close();
  }, [dispatch]);

  useEffect(() => {
    if (auth.token) {
      dispatch(getPosts(auth.token));
      //Get stories
      dispatch(getSuggestions(auth.token));
      dispatch(getNotifies(auth.token));
    }
  }, [dispatch, auth.token]);
  useEffect(()=> {
    dispatch(getStories());
  },[dispatch])

  useEffect(() => {
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
    } else if (Notification.permission === "granted") {
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(function (permission) {
        if (permission === "granted") {
        }
      });
    }
  }, []);

  useEffect(() => {
    const newPeer = new Peer(undefined, {
      path: '/', secure: true
    })
    
    dispatch({ type: GLOBALTYPES.PEER, payload: newPeer })
  },[dispatch])

  useEffect(()=> {
    dispatch(getAllPosts());
  },[dispatch])

  
  return (
    <>
      
      <Alert />
      <GlobalStyles />
      {auth.token && <Navbar />}
      {auth.token && <Bars />}
      <input type="checkbox" id="theme" />
      <div className={`App ${(status || modal) && 'mode'}`}>
        <div className="main">
        {status && <StatusModal />}
      {!auth.token && <LoginNavbar />}
      
      {auth.token && <SocketClient />}
      {call && <CallModal />}
      <Routes>
        {/* {auth.token && <Header />}
          {status && <StatusModal />}
          {auth.token && <SocketClient />}
          {call && <CallModal />} */}

        {/*  <PrivateRouter path="/:page" element={<PageRender/>} />
          <PrivateRouter path="/:page/:id" element={<PageRender/>} />  */}
        {/* <Route exact path="/register" component={Register} /> */}

        {/* <PrivateRouter exact path="/:page" component={PageRender} />
          <PrivateRouter exact path="/:page/:id" component={PageRender} /> */}

        {/* <Route
          path="/"
          element={false ? <Navigate to="feed" /> : <Navigate to="login" />}
        /> */}
        
          <Route path="/" element={auth.token ? <Feed /> : <LoginPage />} />
          <Route path="/register" element={<Homepage />} />
          <Route exact path="/:page" element={<PrivateRouter />}>
            <Route exact path="/:page" element={<PageRender />} />
          </Route>
          <Route exact path=":page" element={<PrivateRouter />}>
            <Route exact path=":id" element={<PageRender />} />
          </Route>
          <Route
            path="/chat"
            element={
              true ? (
                <ChakraProvider theme={theme}>
                  <ColorModeScript
                    initialColorMode={theme.config.initialColorMode}
                  />
                  <Chat />
                </ChakraProvider>
              ) : (
                <Navigate to="../login" />
              )
            }
          />
      </Routes>
      </div>
      </div>
    </>
  );
}

export default App;
