import React, { Component } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import "./App.css";
import Home from "./view/Home";
import Login from "./view/login";
import Todo from "./view/todo";
import SignUp from "./view/signUp";
import store from "./store";

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/todo" component={Todo} />
            <Route path="/signup" component={SignUp} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
