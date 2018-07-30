import React from "react";
import validate from "../utils/validateSignupForm";
import signup from "../service/signupService";

const signUp = () => {
  let name = "";
  let password = "";
  let email = "";

  return (
    <div className="signUp">
      <h2> Sign Up Form</h2>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (validate(name, email, password)) {
            console.log("validation sucessful");
            signup(name, email, password);
          }
        }}
      >
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          onChange={e => {
            name = e.target.value;
          }}
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          htmlFor="email"
          onChange={e => {
            email = e.target.value;
          }}
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          onChange={e => {
            password = e.target.value;
          }}
        />
        <hr />
        <input type="submit" />
      </form>
    </div>
  );
};

export default signUp;
