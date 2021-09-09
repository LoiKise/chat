import axios from "axios";

const authApi = {
  register(data) {
    return axios.post(
      "https://61387eb7163b560017039f1e.mockapi.io/Register",
      data
    );
  },
};
export default authApi;
