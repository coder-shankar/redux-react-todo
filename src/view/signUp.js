import React from "react";

const signUp = () => {
  return (
    <div className="signUp">
      <h2> Sign Up Form</h2>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" />
        <br />
        <label htmlFor="email">Email:</label>
        <input type="text" htmlFor="email" />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" />
      </form>
    </div>
  );
};

export default signUp;
