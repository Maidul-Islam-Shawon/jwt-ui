import React, { useState, useEffect, useRef } from "react";
import { Form, Button } from "react-bootstrap";
import Axios from "axios";
//import loginFunc from "../Components/Auth";
import { Redirect } from "react-router-dom";

const LoginPage = () => {
  const [state, setState] = useState({
    UserName: "",
    Password: "",
  });
  const [error, setError] = useState("");
  const [validated, setValidated] = useState(false);
  const [isAuthenticated, setAuthenticated] = useState(false);
  //let isAuthenticated = false;
  //const isAuthenticated = useRef(false);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setState({ ...state, [name]: value });
  };

  //console.log(state);

  const handleSubmit = (event) => {
    event.preventDefault();
    validationCheck(event); //checking all fields in the form
    //loginFunc(state, setAuthenticated, setError); //return token and IsAuthenticated or Error

    Axios.post("https://localhost:44331/api/authenticate/login", state).then(
      (result) => {
        localStorage.setItem("token", result.data.token);
        localStorage.setItem("isAuth", true);
        sessionStorage.setItem("token", result.data.token);
        setAuthenticated(true);
        //isAuthenticated = true;
        //isAuthenticated.current = true;
        setError("");
      },
      (err) => {
        setError(err.message);
      }
    );

    // if (
    //   isAuth &&
    //   localStorageToken !== null &&
    //   sessionStorageToken !== null &&
    //   localStorageToken === sessionStorageToken
    // ) {
    //   setAuthenticated(true);
    // }
  };

  //   console.log("error:", error);

  const validationCheck = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      //event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  let localStorageToken = localStorage.getItem("token");
  let sessionStorageToken = sessionStorage.getItem("token");
  let isAuth = localStorage.getItem("isAuth");
  //let checkAuthenticated = isAuthenticated.current;
  //console.log("isauth:", isAuthenticated.current);
  if (
    isAuthenticated &&
    isAuth === "true" &&
    localStorageToken !== null &&
    sessionStorageToken !== null &&
    localStorageToken === sessionStorageToken
  ) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div>
      <h2>Login</h2>
      <hr />
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="User Name"
            required
            name="UserName"
            value={state.UserName}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a User Name.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="Password"
            required
            value={state.Password}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a Password.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <p style={{ fontSize: "14pt", fontWeight: "bold", color: "red" }}>
        {error || ""}
      </p>
    </div>
  );
};

export default LoginPage;
