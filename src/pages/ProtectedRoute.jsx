import React from "react";
import { useCookies } from "react-cookie";
import Cookies from "universal-cookie";
import { Route, Navigate } from "react-router-dom";

export const GetToken = ({children}) => {
  // const [cookies, removeCookie] = useCookies([]);
//   const cookies = new Cookies();
  // console.log(cookies.token);
//   return cookies.get("token");
  // return cookies.token;
  if(!localStorage.getItem("token")){
    return <Navigate to="/" />
  }
  return children;
};

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = !!getToken();

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Navigate to="/" />
      }
    />
  );
};

export default ProtectedRoute;
