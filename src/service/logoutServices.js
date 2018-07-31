import axios from "axios";

const logout = async () => {
  let logOutStatus = false;
  try {
    const res = await axios({
      method: "post",
      url: "http://127.0.0.1:8848/api/logout",
      headers: {
        refreshToken: localStorage.getItem("refreshToken")
      }
    });
    // checking response status
    if (res.status === 200) {
      logOutStatus = true;
      console.log(res, "sfsdflsdfj");
    }
  } catch (err) {
    alert("hey  match");
    console.log(err);
  }
  console.log(logOutStatus);
  return logOutStatus;
};

export default logout;
