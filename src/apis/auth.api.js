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
  login(data) {
    return axios.post(
      "https://606730cf98f405001728e82c.mockapi.io/login",
      data
    );
  },
  logout() {
    return axios.post("https://61387eb7163b560017039f1e.mockapi.io/logout");
  },
};
export default authApi;
