import React, {useEffect} from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import MatchFeed from "./MatchFeed";

const PrivateRoutes = () => {

  const [cookies, removeCookie] = useCookies([]);
  let auth = { token: false };

  useEffect(() => {
    const verifyCookie = () => {
      if (!cookies.token) {

        console.log(cookies.token);
        <Navigate to="/home"/>
        // console.log(auth.token);
        // auth.token = true;
        // console.log(auth.token);
      }
    };
    verifyCookie();
  }, []);

  return <Outlet/>;
};

export default PrivateRoutes;
