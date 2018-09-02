import axios from "axios";
import { React } from "react";
import { Redirect } from "react-router-dom";
const signUpService = async (name, email, password) => {
  console.log("hello");
  try {
    const res = await axios({
      method: "post",
      url: "https://todo-serverside.herokuapp.com/api/signup",
      data: {
        email: email,
        password: password,
        name: name
      },
      config: {
        headers: {
          "content-Type": "application/x-www-form-urlencoded"
        }
      }
    });
    console.log(res);
    if (res.status === 200) {
      alert("signup sucesssful");
      return true;
    }
  } catch (err) {
    alert(err);
  }

  return false;
};

export default signUpService;
