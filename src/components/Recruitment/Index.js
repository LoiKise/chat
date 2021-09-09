import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Index() {
  const IMGMoney = "/assets/img/imgs/money.png";
  const IMGDate = "/assets/img/imgs/date.png";
  const IMGLocation = "/assets/img/icon/location.png";
  const IMGDegree = "/assets/img/imgs/degree.png";

  const [jobs, setJob] = useState([]);
  const [listjob, setlistJob] = useState([]);
  const [showMore, setShowMore] = useState(false);
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
      <div className="recruitment mt-3">
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
          <div className="job-list">
            {jobs.slice(0, 3).map((job) => (
              <div className="job-item" key={job.id}>
                <h2 className="job-item-title">{job.jobtitle}</h2>
                <div className="job-item-list">
                  <div className="job-item-list-item">
                    <img src={IMGMoney} alt="" />
                    <span>
                      Mức lương : {job.moneyfirst} - {job.moneyend}
                    </span>
                  </div>
                  <div className="job-item-list-item">
                    <img src={IMGDate} alt="" />
                    <span>
                      Ngày đăng : {new Date(job.datefirst).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="job-item-list-item">
                    <img src={IMGLocation} alt="" />
                    <span>Địa điểm : {job.location}</span>
                  </div>
                  <Link to="" className="job-item-btn">
                    Xem chi tiết
                  </Link>
                  <div className="job-item-list-item">
                    <img src={IMGDegree} alt="" />
                    <span>Bằng Cấp : cao đẳng ( tối thiểu )</span>
                  </div>
                  <div className="job-item-list-item">
                    <img src={IMGDate} alt="" />
                    <span>
                      Hạn cuối nộp hồ sơ :{" "}
                      {new Date(job.dateend).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
            ))}
            {!showMore && (
              <button
                onClick={() => setShowMore(!showMore)}
                className="job-list__showmore"
              >
                See More {listjob.length} job now.
              </button>
            )}
            {showMore &&
              listjob.map((listjob) => (
                <div className="job-item" key={listjob.id}>
                  <h2 className="job-item-title">{listjob.jobtitle}</h2>
                  <div className="job-item-list">
                    <div className="job-item-list-item">
                      <img src={IMGMoney} alt="" />
                      <span>
                        Mức lương : {listjob.moneyfirst} - {listjob.moneyend}
                      </span>
                    </div>
                    <div className="job-item-list-item">
                      <img src={IMGDate} alt="" />
                      <span>
                        Ngày đăng :
                        {new Date(listjob.datefirst).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="job-item-list-item">
                      <img src={IMGLocation} alt="" />
                      <span>Địa điểm : {listjob.location}</span>
                    </div>
                    <Link to="" className="job-item-btn">
                      Xem chi tiết
                    </Link>
                    <div className="job-item-list-item">
                      <img src={IMGDegree} alt="" />
                      <span>Bằng Cấp : cao đẳng ( tối thiểu )</span>
                    </div>
                    <div className="job-item-list-item">
                      <img src={IMGDate} alt="" />
                      <span>
                        Hạn cuối nộp hồ sơ :
                        {new Date(listjob.dateend).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
