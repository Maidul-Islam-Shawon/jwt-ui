import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import NavigationHeader from "./Components/NavigationHeader";
import { Container } from "react-bootstrap";
import LoginPage from "./Pages/LoginPage";
import InvalidUrlPage from "./Pages/InvalidUrlPage";
import DashboardPage from "./Pages/DashboardPage";
import PrivateRouter from "./Routers/PrivateRouter";
import PublicRouter from "./Routers/PublicRouter";
import WeatherPage from "./Pages/WeatherPage";
import AdminNavigation from "./Components/AdminNavigation";
import LogoutPage from "./Pages/LogoutPage";

function App() {
  let navComponent;
  const renderNavigation = () => {
    let localStorageToken = localStorage.getItem("token");
    let sessionStorageToken = sessionStorage.getItem("token");
    let isAuth = localStorage.getItem("isAuth");

    if (
      isAuth === "true" &&
      localStorageToken !== null &&
      sessionStorageToken !== null &&
      localStorageToken === sessionStorageToken
    ) {
      navComponent = <AdminNavigation />;
    } else {
      navComponent = <NavigationHeader />;
    }
  };

  renderNavigation();
  return (
    <div>
      <Router>
        {/* <NavigationHeader /> */}
        {navComponent}
        <Container>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/weather" component={WeatherPage} />
            {/* <Route path="/login" component={LoginPage} /> */}

            <PublicRouter
              component={LoginPage}
              path="/login"
              restricted={true}
              exact
            />

            <Route exact path="/logout" component={LogoutPage} />

            <PrivateRouter component={DashboardPage} path="/dashboard" exact />

            <Route component={InvalidUrlPage} />
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;
