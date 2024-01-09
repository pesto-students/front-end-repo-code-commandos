import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import MatchFeed from "./pages/MatchFeed";
import LeftBarMobile from "./components/LeftBarMobile";

import ChatAndRequest from "./pages/ChatAndRequest";
import Chat from "./pages/Chat";
import Register from "./pages/Register";
import AstroMatch from "./pages/AstroMatch";
import ProfileSettings from "./pages/ProfileSettings";
import PrivateRoutes from "./pages/PrivateRoutes";
import ProtectedRoute, { getToken } from "./pages/ProtectedRoute";
import { useCookies } from "react-cookie";

import Home from "./pages/Home";

function App() {
  const isAuthenticated = getToken();

  // const [cookies, removeCookie] = useCookies([]);

  // useEffect(() => {
  //   function setToken() {
  //     console.log(cookies.token);
  //     isAuthenticated = cookies.token;
  //   }
  //   setToken();
  // }, [isAuthenticated]);

  // useEffect(() => {
  //   const verifyCookie = async () => {
  //     if (!cookies.token) {
  //       <Navigate to="/" />
  //     }
  //   };
  //   verifyCookie();
  // });

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/login" element={<Home />} /> */}
        {isAuthenticated ? (
          <>
            {/* <Route path="/" element={<MatchFeed />} /> */}
            <Route exact path="/matchfeed" element={<MatchFeed />} />
            <Route exact path="/chat-request" element={<ChatAndRequest />} />
            <Route exact path="/chat" element={<Chat />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/astromatch" element={<AstroMatch />} />
            <Route exact path="/leftmobile" element={<LeftBarMobile />} />
            <Route
              exact
              path="/profile-settings"
              element={<ProfileSettings />}
            />
          </>
        ) : (
          <Route path="/" element={<Home />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
