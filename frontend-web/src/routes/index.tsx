import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Landing from "../pages/Landing";
import Route from "./routes"; 

import TeacherList from "../pages/TeacherList";
import TeacherForm from "../pages/TeacherForm";
import Login from "../pages/Login/index";
import Signup from "../pages/Signup/index";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Landing} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Signup} />
    <Route path="/study" component={TeacherList} />
    <Route path="/give-classes" component={TeacherForm}  />
  </Switch>
);

export default Routes;
