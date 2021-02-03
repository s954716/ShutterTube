import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Account from "./pages/Account";
import Dashboard from "./pages/Dashboard";
import Preview from "./pages/Preview";
import Qrcode from "./pages/Qrcode";
import Project from "./pages/Project";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/shuttertube/" exact>
          <HomePage></HomePage>
        </Route>
        <Route path="/shuttertube/login">
          <Login></Login>
        </Route>
        <Route path="/shuttertube/account">
          <Account></Account>
        </Route>
        <Route path="/shuttertube/dashboard">
          <Dashboard></Dashboard>
        </Route>
        <Route path="/shuttertube/project/" exact>
          <Project></Project>
        </Route>
        <Route path="/shuttertube/project/preview" exact>
          <Preview></Preview>
        </Route>
        <Route path="/shuttertube/project/qr" exact>
          <Qrcode></Qrcode>
        </Route>
        <Route path="*"></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
