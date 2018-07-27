import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div>
    <h1>Welcome to the Todo webapp</h1>
    <Link to="/login">Login</Link>
    <hr />
    <Link to="/signup">Sign Up</Link>
  </div>
);

export default Home;
