import React from "react";
import { useCookies } from "react-cookie";
import Cookies from "universal-cookie";
import Home from "../pages/Home";
import { Route, Navigate } from "react-router-dom";

export const ProtectedLoginRoute = () => {
  const token = localStorage.getItem("token");
  console.log(token);
  if (!token) {
    return <Home />;
  }
  return <Navigate to="/matchfeed" />;
};

const ProtectedRoute = ({ children }) => {
  // const [cookies, removeCookie] = useCookies([]);
  //   const cookies = new Cookies();
  // console.log(cookies.token);
  //   return cookies.get("token");
  // return cookies.token;
  const token = localStorage.getItem("token");
  console.log(token);
  if (!token) {
    return <Navigate to="/login" />;
  }
  return children;
};

// const ProtectedRoute = ({ component: Component, ...rest }) => {
//   const isAuthenticated = !!getToken();

//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         isAuthenticated ? <Component {...props} /> : <Navigate to="/" />
//       }
//     />
//   );
// };

export default ProtectedRoute;
