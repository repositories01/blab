import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Landing from "../pages/Landing";
import Route from "./routes"; 

import TeacherList from "../pages/TeacherList";
import TeacherForm from "../pages/TeacherForm";
import Login from "../pages/Login/index";
import Signup from "../pages/Signup/index";
import Profile from '../pages/Profile'


const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Landing} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Signup} />
    <Route path="/study" component={TeacherList} isPrivate={false} />
    <Route path="/give-classes" component={TeacherForm} isPrivate />
    <Route path="/profile" component={Profile} isPrivate />
  </Switch>
);

export default Routes;
