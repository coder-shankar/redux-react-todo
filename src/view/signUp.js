import React from "react";
import { Redirect } from "react-router-dom";
import validate from "../utils/validateSignupForm";
import signup from "../service/signupService";

class signUp extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      password: "",
      email: "",
      isSignUp: false
    };
  }

  render() {
    return this.state.isSignUp ? (
      <Redirect to="/login" />
    ) : (
      <div className="signUp">
        <h2> Sign Up Form</h2>
        <form
          onSubmit={e => {
            e.preventDefault();
            if (
              validate(this.state.name, this.state.email, this.state.password)
            ) {
              let isSignUp = signup(
                this.state.name,
                this.state.email,
                this.state.password
              );
              this.setState({ isSignUp: isSignUp });
            }
          }}
        >
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            onChange={e => {
              this.setState({ name: e.target.value });
            }}
          />
          <br />
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            htmlFor="email"
            onChange={e => {
              this.setState({ email: e.target.value });
            }}
          />
          <br />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            onChange={e => {
              this.setState({ password: e.target.value });
            }}
          />
          <hr />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default signUp;
