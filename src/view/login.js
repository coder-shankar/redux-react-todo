import { connect } from "react-redux";
import LoginUI from "./loginUI";
import { withRouter } from "react-router";
import { setLoginInfo, setLoginSuccess } from "../action/loginAction";
const mapStateToProps = state => {
  return {
    isLogin: state.user.isLogin
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
