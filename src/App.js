import React, { Component } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Home from "./view/home";
import Login from "./view/login";
import Todo from "./view/todo";
import SignUp from "./view/signUp";
import Logout from "./view/logout";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/todo" component={Todo} />
        <Route path="/signup" component={SignUp} />
        <Route path="/logout" component={Logout} />
      </Switch>
    </Router>
  );
};

export default App;
