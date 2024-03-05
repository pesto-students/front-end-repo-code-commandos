import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello Home</div>,
  },
  {
    path: "/login",
    element: <div>Hello Login</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
