import axios from "axios";

const signUpService = async (name, email, password) => {
  console.log("hello");
  try {
    const res = await axios({
      method: "post",
      url: "http://127.0.0.1:8848/api/signup",
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
    console.log(res.data);
    alert(res.data.sucess);
  } catch (err) {
    alert(err);
  }
};

export default signUpService;
