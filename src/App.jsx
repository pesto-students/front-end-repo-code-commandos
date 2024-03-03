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
import ProtectedRoute,{ProtectedLoginRoute} from "./pages/ProtectedRoute";
import { useCookies } from "react-cookie";

import Home from "./pages/Home";

function App() {
  // const [isAuthenticated, setIsAuthenticated] = useState(null);

  // useEffect(() => {
  //   setIsAuthenticated(getToken());
  // }, []);

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
        <Redirect from="*" to="/login" />
        <Route exact path="/login" element={<ProtectedLoginRoute/>} />
        {/* <Route path="/" element={<MatchFeed />} /> */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <MatchFeed />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/matchfeed"
          element={
            <ProtectedRoute>
              <MatchFeed />
            </ProtectedRoute>
          }
        />
        <Route path="/chat-request" element={<ProtectedRoute><ChatAndRequest /></ProtectedRoute>} />
        <Route path="/chat" element={<ProtectedRoute><Chat /></ProtectedRoute>} />
        <Route path="/register" element={<ProtectedRoute><Register /></ProtectedRoute>} />
        <Route path="/astromatch" element={<ProtectedRoute><AstroMatch /></ProtectedRoute>} />
        <Route path="/leftmobile" element={<ProtectedRoute><LeftBarMobile /></ProtectedRoute>} />
        <Route path="/profile-settings" element={<ProtectedRoute><ProfileSettings /></ProtectedRoute>} />
        {/* {isAuthenticated ? (
          <>
          </>
        ) : (
          <Route path="/" element={<Home />} />
        )} */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
