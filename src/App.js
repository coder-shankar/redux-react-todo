import React, { Component } from "react";
import "./App.css";
import Home from "./view/Home";
import Login from "./view/login";

import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
