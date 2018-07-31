import axios from "axios";
import setAxiosHeader from "../service/axiosService";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8848/api/todos"
});

export const refreshTokenHandler = () => {
  try {
    instance.interceptors.response.use(
      response => {
        return response;
      },
      async error => {
        const originalRequest = error.config;
        console.log(error.response);
        if (error.response.status === 401) {
          let res = await axios({
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
          return axios(originalRequest);
        }
      }
    );
  } catch (err) {
    console.log(err);
  }
};

export const getDataFromApi = (query = "") => {
  let res = "";
  try {
    res = instance({
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
