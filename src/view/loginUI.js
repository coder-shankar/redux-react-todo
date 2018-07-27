import React from "react";
import login from "../service/loginService";
const loginUI = ({
  setLoginInfo = f => f,
  setLoginSucess = f => f,
  isLogin = ""
}) => {
  let username = "";
  let password = "";

  return (
    <div className="login-wrapper">
      <div className="row">
        <label>UserName: </label>
        <input
          type="text"
          name="username"
          onChange={e => {
            username = e.target.value;
          }}
        />
      </div>
      <div className="row">
        <label>Password </label>
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
          onClick={async e => {
            setLoginInfo(username, password);
            let loginstatus = await login(username, password);
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

export default loginUI;
