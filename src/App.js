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

function App() {
  return (
    <div>
      <Router>
        <NavigationHeader />
        <Container>
          <Switch>
            <Route exact path="/" component={HomePage} />
            {/* <Route path="/login" component={LoginPage} /> */}

            <PublicRouter
              component={LoginPage}
              path="/login"
              restricted={true}
              exact
            />

            <PrivateRouter component={DashboardPage} path="/dashboard" exact />

            <Route component={InvalidUrlPage} />
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;
