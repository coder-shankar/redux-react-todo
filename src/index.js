import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter } from "react-router-dom";
import store from "./store";

ReactDOM.render(
  <BrowserRouter>
    <Route component={App} />
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
