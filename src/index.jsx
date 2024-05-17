import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { ProtectedLoginRoute } from "./pages/ProtectedRoute";
import Home from "./pages/Home";

// import App from "./App.jsx";
import "./index.css";
import MatchFeed from "./pages/MatchFeed";
import Register from "./pages/Register";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h3>404 Page Not Found.</h3>,
  },
  {
    path: "/login",
    element: <Home />,
    errorElement: <h3>404 Page Not Found.</h3>,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <h3>404 Page Not Found.</h3>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
