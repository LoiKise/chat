import requestAPI from "./index";

const recuitmentApi = {
  getRecruitments(params) {
    return requestAPI(`/search/job?${params}`, "GET");
  },
};
export default recuitmentApi;
