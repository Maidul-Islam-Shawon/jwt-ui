import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRouter = ({ component: Component, ...rest }) => {
  let localStorageToken = localStorage.getItem("token");
  let sessionStorageToken = sessionStorage.getItem("token");
  let isAuth = localStorage.getItem("isAuth");

  //console.log("localStorageToken", localStorageToken);

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth === "true" &&
        localStorageToken !== null &&
        sessionStorageToken !== null &&
        localStorageToken === sessionStorageToken ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRouter;
