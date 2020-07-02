import React from "react";
import { Route, Redirect } from "react-router-dom";

const PublicRouter = ({ component: Component, restricted, ...rest }) => {
  let localStorageToken = localStorage.getItem("token");
  let sessionStorageToken = sessionStorage.getItem("token");
  let isAuth = localStorage.getItem("isAuth");

  // console.log("isAuth", isAuth);
  // console.log("restricted", restricted);
  // console.log("localStorageToken", localStorageToken);
  // console.log("sessionStorageToken", sessionStorageToken);

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth &&
        localStorageToken !== null &&
        sessionStorageToken !== null &&
        localStorageToken === sessionStorageToken &&
        restricted ? (
          <Redirect to="/dashboard" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRouter;
