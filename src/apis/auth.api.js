import axios from "axios";
// import requestAPI from ".";

const authApi = {
  register(data) {
    return axios.post(
      "https://61387eb7163b560017039f1e.mockapi.io/Register",
      data
    );
  },
  // register(data) {
  //   return requestAPI("/Register", "POST", data);
  // },
};
export default authApi;
