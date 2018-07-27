import { connect } from "react-redux";
import { setLoginInfo, setLoginSuccess } from "../action/loginAction";
import LoginUI from "./loginUI";

const mapStateToProps = state => {
  return {
    isLogin: state.login.user.isLogin
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setLoginInfo: (username, password) =>
      dispatch(setLoginInfo(username, password)),
    setLoginSucess: () => dispatch(setLoginSuccess())
  };
};

const EnhancedLogin = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginUI);

export default EnhancedLogin;
