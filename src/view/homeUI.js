import React from "react";
import { Link } from "react-router-dom";
import setAxiosHeader from "../service/axiosService";
import { Redirect } from "react-router-dom";

const Home = props => {
  if (localStorage.accessToken) {
    props.setLoginSuccess();
    setAxiosHeader(localStorage.accessToken);
  }

  return !props.isLogin ? (
    <div>
      <h1>Welcome to the Todo webapp</h1>
      <Link to="/login">Login</Link>
      <hr />
      <Link to="/signup">Sign Up</Link>
    </div>
  ) : (
    <Redirect to="/todo" />
  );
};

export default Home;
