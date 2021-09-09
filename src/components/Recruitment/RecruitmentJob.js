import React from "react";
import { Link } from "react-router-dom";

export default function RecruitmentJob({ job, images }) {
  return (
    <div className="job-item" key={job.id}>
      <h2 className="job-item-title">{job.jobtitle}</h2>
      <div className="job-item-list">
        <div className="job-item-list-item">
          <img src={images[0].IMGMoney} alt="" />
          <span>
            Mức lương : {job.moneyfirst} - {job.moneyend}
          </span>
        </div>
        <div className="job-item-list-item">
          <img src={images[1].IMGDate} alt="" />
          <span>
            Ngày đăng : {new Date(job.datefirst).toLocaleDateString()}
          </span>
        </div>
        <div className="job-item-list-item">
          <img src={images[2].IMGLocation} alt="" />
          <span>Địa điểm : {job.location}</span>
        </div>
        <Link to="" className="job-item-btn">
          Xem chi tiết
        </Link>
        <div className="job-item-list-item">
          <img src={images[3].IMGDegree} alt="" />
          <span>Bằng Cấp : cao đẳng ( tối thiểu )</span>
        </div>
        <div className="job-item-list-item">
          <img src={images[1].IMGDate} alt="" />
          <span>
            Hạn cuối nộp hồ sơ :{new Date(job.dateend).toLocaleDateString()}
          </span>
        </div>
      </div>
    </div>
  );
}
