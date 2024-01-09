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
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    setIsAuthenticated(getToken());
  }, []);

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
            <Route exact path="/" element={<MatchFeed />} />
            <Route path="/matchfeed" element={<MatchFeed />} />
            <Route path="/chat-request" element={<ChatAndRequest />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/register" element={<Register />} />
            <Route path="/astromatch" element={<AstroMatch />} />
            <Route path="/leftmobile" element={<LeftBarMobile />} />
            <Route path="/profile-settings" element={<ProfileSettings />} />
          </>
        ) : (
          <Route path="/" element={<Home />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
