import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { setLoginError } from "../action/loginAction";

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
  localStorage.removeItem("accessToken");
  setLoginError();
  return <Redirect to="/" />;
};

const EnhancedLogout = connect(
  mapStateToProps,
  mapDispatchToProps
)(logout);

export default EnhancedLogout;
