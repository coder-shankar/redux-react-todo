const validateForm = (name, email, passwod) => {
  if (name === "") {
    alert("name field must be field");
    return false;
  }
  if (passwod.length < 4) {
    alert("password must be atleast lenght of 4");
    return false;
  }

  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(String(email).toLowerCase())) {
    alert("not valid email");
    return false;
  }
  return true;
};

export default validateForm;
