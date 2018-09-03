import axios from "axios";
import store from "../store";
import { clear } from "../action/loginAction";

const logout = async () => {
  let logOutStatus = false;
  try {
    const res = await axios({
      method: "post",
      url: "https://dashboard.heroku.com/apps/todo-serverside/api/logout",
      headers: {
        refreshToken: localStorage.getItem("refreshToken")
      }
    });
    // checking response status
    if (res.status === 200) {
      logOutStatus = true;
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("accessTOken");
      store.dispatch(clear());
    }
  } catch (err) {
    alert("hey  match");
    console.log(err);
  }
  console.log(logOutStatus);
  return logOutStatus;
};

export default logout;
