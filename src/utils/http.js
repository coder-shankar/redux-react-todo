import axios from "axios";
import setAxiosHeader from "../service/axiosService";
import store from "../store";
import { setToken } from "../action/loginAction";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8848/api"
});

export const getDataFromApi = (query = "") => {
  try {
    instance.interceptors.response.use(
      response => response,
      async error => {
        const originalRequest = error.config;
        console.log(error.response);
        if (error.response.status === 401) {
          const res = await axios({
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
          setAxiosHeader(accessToken);
          store.dispatch(setToken(accessToken, refreshToken));

          return axios(originalRequest);
        }
      }
    );
  } catch (err) {
    console.log(err);
  }

  let res = "";

  try {
    res = instance({
      method: "get",
      url: `/todos${  query}`,
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
