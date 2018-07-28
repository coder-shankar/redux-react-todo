import React, { Component } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import "./App.css";
import Home from "./view/home";
import Login from "./view/login";
import Todo from "./view/todo";
import SignUp from "./view/signUp";
import { SET_LOGIN_SUCCESS } from "./action/loginAction";
import setAxiosHeader from "./service/axiosService";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/todo" component={Todo} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </Router>
    );
  }
}

export default App;
