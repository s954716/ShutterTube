import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";
import MainHomePage from "./pages/HomePage/MainHomePage";
import Account from "./pages/Account";
import Dashboard from "./pages/MemberDashboard/Dashboard";
import Preview from "./pages/Preview";
import Qrcode from "./pages/Qrcode";
import Project from "./pages/ProjectCard/Project";
import "bootstrap/dist/css/bootstrap.min.css";
import TabList from "./pages/LoginAndSignup/TabList";
import { useState } from "react";
import AuthContext from "./components/AuthContext";
import { useEffect } from "react";


const App = () => {
  const [userData, setUserData] = useState({
    userName: "",
    id: "",
    hasLogin: false
  });

  useEffect(() => {
    if(localStorage.getItem("userName") && localStorage.getItem("id")) {
      setUserData({
        userName: localStorage.getItem("userName"),
        id:  localStorage.getItem("id"),
        hasLogin: true
      })
    }
  },[])

  return (
    <AuthContext.Provider value={{ userData, setUserData }}>
      <BrowserRouter>
        <Switch>
          <Route path="/shuttertube" exact>
            <MainHomePage></MainHomePage>
          </Route>
          <Route path="/shuttertube/login">
            <TabList></TabList>
          </Route>
          <Route path="/shuttertube/signup">
            <TabList></TabList>
          </Route>
          <Route path="/shuttertube/account">
            <Account></Account>
          </Route>
          <Route path="/shuttertube/dashboard/:userId">
            <Dashboard></Dashboard>
          </Route>
          <Route path="/shuttertube/project/:projectId" exact>
            <Project></Project>
          </Route>
          <Route path="/shuttertube/project/preview" exact>
            <Preview></Preview>
          </Route>
          <Route path="/shuttertube/project/qr" exact>
            <Qrcode></Qrcode>
          </Route>
          <Route path="*">
            <MainHomePage></MainHomePage>
          </Route>
        </Switch>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;
