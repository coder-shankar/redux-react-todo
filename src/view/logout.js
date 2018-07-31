import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { setLoginError } from "../action/loginAction";
import logoutServices from "../service/logoutServices";

const mapStateToProps = state => {
  return {
    isLogin: state.login.user.isLogin
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setLoginError: () => dispatch(setLoginError())
  };
};

const logout = ({ setLoginError = f => f }) => {
  //calll logout api

  logoutServices();

  delete localStorage.removeItem("accessToken");
  delete localStorage.removeItem("refreshToken");

  setLoginError();
  return <Redirect to="/" />;
};

const EnhancedLogout = connect(
  mapStateToProps,
  mapDispatchToProps
)(logout);

export default EnhancedLogout;
