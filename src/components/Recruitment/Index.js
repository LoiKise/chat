import axios from "axios";
import React, { useEffect, useState } from "react";
import Job from "./RecruitmentJobs";

export default function Index() {
  const [jobs, setJob] = useState([]);
  const [listjob, setlistJob] = useState([]);

  useEffect(() => {
    axios
      .get("https://61387eb7163b560017039f1e.mockapi.io/recruitment")
      .then((res) => {
        setJob(res.data);
        setlistJob(res.data.slice(3, res.data.length));
      });
  }, []);
  return (
    <>
      <div className="recruitment">
        <div className="container">
          <div className="recruitment-content">
            <h1 className="recruitment-title">Tuyển dụng</h1>
            <p className="recruitment-span">
              Công ty chúng tôi khao khát có được nguồn nhân nhân lực chất lượng
              cao , nên luôn có chính sách ưu đãi tốt cho những người tài giỏi.
              Nếu bạn cảm thấy mình phù hợp xin hãy ứng tuyển ngay , chúng tôi
              sẽ có đãi ngộ tốt nhất giành cho bạn
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="job">
          <h2 className="job-title">{jobs.length} công việc đang được tuyển</h2>
          <Job jobs={jobs} listjob={listjob} />
        </div>
      </div>
    </>
  );
}
