import React from "react";
import PropTypes from "prop-types";
import login from "../service/loginService";

const loginUI = ({
  setLoginInfo = f => f,
  setLoginSucess = f => f,
  isLogin = false
}) => {
  let username = "";
  let password = "";

  return (
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
