import React, { useEffect, useState } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavigationHeader = () => {
  const [localStorageToken, setLocalStorageToken] = useState("");
  const [sessionStorageToken, setSessionStorageToken] = useState("");
  const [isAuth, setAuth] = useState("");

  // let localStorageToken;
  //let sessionStorageToken;
  //let isAuth;

  useEffect(() => {
    setLocalStorageToken(localStorage.getItem("token"));
    //localStorageToken = localStorage.getItem("token");
    setSessionStorageToken(sessionStorage.getItem("token"));
    setAuth(localStorage.getItem("isAuth"));
  }, []);

  let url_To;
  let url_Name;
  const LoginOrLogout = () => {
    if (
      isAuth &&
      localStorageToken !== null &&
      sessionStorageToken !== null &&
      localStorageToken === sessionStorageToken
    ) {
      return (url_Name = "Logout");
    }
    return (url_Name = "Login");
  };

  LoginOrLogout();
  console.log("token", localStorageToken);
  console.log("url_Name", url_Name);

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <NavLink to="/">
        <Navbar.Brand>JWT UI</Navbar.Brand>
      </NavLink>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <NavItem>
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
          </NavItem>
        </Nav>

        <Nav>
          <NavItem>
            <Nav.Link as={NavLink} to="/login">
              Login
            </Nav.Link>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationHeader;
