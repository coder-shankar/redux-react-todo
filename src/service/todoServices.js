import axios from "axios";
import jwt_decode from "jwt-decode";
import moment from "moment";
import setAxiosHeader from "./axiosService";

const fetchData = async (query = "") => {
  let res = "";

  const token = localStorage.getItem("accessToken");
  const decoded = jwt_decode(token);
  const time =
    new Date(Date.now()).getMinutes() - new Date(decoded.exp).getMinutes();
  console.log(time, "remaning teim");

  if (localStorage.getItem("refreshToken") && time > 50) {
    res = await axios({
      method: "post",
      url: "http://127.0.0.1:8848/api/refresh",
      headers: {
        "Content-Type": "application/json",
        refreshToken: localStorage.getItem("refreshToken")
      }
    });
    const accessToken = res.data.newAccessToken;
    const refreshToken = res.data.newRefreshToken;
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
  }

  setAxiosHeader(localStorage.accessToken);
  try {
    res = await axios({
      method: "get",
      url: "http://127.0.0.1:8848/api/todos" + query,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (err) {
    alert(err);
    console.log(err);
  }
  return res;
};

export default fetchData;
