import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { ProtectedLoginRoute } from "./pages/ProtectedRoute";

// import App from "./App.jsx";
import "./index.css";

import Home from './pages/Home';
import MatchFeed from "./pages/MatchFeed";
import Register from "./pages/Register";
import ChatAndRequest from "./pages/ChatAndRequest";
import Chat from "./pages/Chat";
import AstroMatch from "./pages/AstroMatch";
import LeftBarMobile from "./components/LeftBarMobile";
import ProfileSettings from "./pages/ProfileSettings";
import Error404 from "./pages/Error404";

const router = createHashRouter([
  {
    path: "/login",
    element: <Home />,
    errorElement: <Error404 />,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <Error404 />,
  },
  {
    path: "/match-feed",
    element: <MatchFeed />,
    errorElement: <Error404 />,
  },
  {
    path: "/chat-request",
    element: <ChatAndRequest />,
    errorElement: <Error404 />,
  },
  {
    path: "/chat",
    element: <Chat />,
    errorElement: <Error404 />,
  },
  {
    path: "/astromatch",
    element: <AstroMatch />,
    errorElement: <Error404 />,
  },
  {
    path: "/profile-settings",
    element: <ProfileSettings />,
    errorElement: <Error404 />,
  },
  {
    path: "/error404",
    element: <Error404 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
