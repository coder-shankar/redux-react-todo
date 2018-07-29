import React from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import login from "../service/loginService";

let username = "";
let password = "";

const loginUI = ({
  setLoginInfo = f => f,
  setLoginSucess = f => f,
  isLogin = false
}) => {
  return isLogin ? (
    <div>
      <Redirect to="/todo" />
    </div>
  ) : (
    <div className="login-wrapper">
      <div className="row">
        <label htmlFor="username">UserName: </label>
        <input
          type="text"
          name="username"
          onChange={e => {
            username = e.target.value;
          }}
        />
      </div>
      <div className="row">
        <label htmlFor="password">Password </label>
        <input
          type="password"
          name="password"
          onChange={e => {
            password = e.target.value;
          }}
        />
      </div>
      <div className="row">
        <button
          onClick={async () => {
            setLoginInfo(username, password);
            const loginstatus = await login(username, password);
            if (loginstatus) {
              setLoginSucess();
            }
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};

loginUI.propTypes = {
  setLoginInfo: PropTypes.func.isRequired,
  setLoginSucess: PropTypes.func.isRequired,
  isLogin: PropTypes.bool.isRequired
};

export default loginUI;
