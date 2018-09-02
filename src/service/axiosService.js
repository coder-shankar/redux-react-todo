import axios from "axios";

const setAxiosHeader = (token = null) => {
  if (token) {
    axios.defaults.headers.common.oauth = token;
  } else {
    delete axios.defaults.headers.common.oauth;
  }
};




export default setAxiosHeader;
