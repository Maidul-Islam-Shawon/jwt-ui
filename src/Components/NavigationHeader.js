import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavigationHeader = () => {
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
