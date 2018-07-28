import axios from "axios";
import setAxiosHeader from "./axiosService";

const fetchData = async (query = "") => {
  let res = "";
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
