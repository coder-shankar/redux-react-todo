import { connect } from "react-redux";
import { setLoginSuccess } from "../action/loginAction";
import HomeUI from "./homeUI";

const mapStateToProps = state => {
  return {
    isLogin: state.login.user.isLogin
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setLoginSuccess: () => dispatch(setLoginSuccess())
  };
};

const EnhancedHome = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeUI);

export default EnhancedHome;
