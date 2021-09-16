import axios from "axios";
// import requestAPI from ".";

const recuitmentApi = {
  getRecruitments(data) {
    return axios.get("https://api-ecom.duthanhduoc.com/products", data);
  },
};
export default recuitmentApi;
