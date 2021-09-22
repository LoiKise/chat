import React from "react";
import { Link } from "react-router-dom";

export default function RecruitmentJob({ jobs, images }) {
  return (
    <div className="job-item">
      <h2 className="job-item-title">{jobs.name}</h2>
      <div className="job-item-list">
        <div className="job-item-list-item">
          <img src={images[0].IMGMoney} alt="" />
          <span>
            Mức lương : {jobs.price} - {jobs.price_before_discount}
          </span>
        </div>
        <div className="job-item-list-item">
          <img src={images[1].IMGDate} alt="" />
          <span>
            Ngày đăng : {new Date(jobs.createdAt).toLocaleDateString()}
          </span>
        </div>
        <div className="job-item-list-item">
          <img src={images[2].IMGLocation} alt="" />
          <span>Địa điểm : TPHCM</span>
        </div>
        <Link to="/DetailJob" className="job-item-btn">
          Xem chi tiết
        </Link>
        <div className="job-item-list-item">
          <img src={images[3].IMGDegree} alt="" />
          <span>Bằng Cấp : cao đẳng ( tối thiểu )</span>
        </div>
        <div className="job-item-list-item">
          <img src={images[1].IMGDate} alt="" />
          <span>
            Hạn cuối nộp hồ sơ :{new Date(jobs.updatedAt).toLocaleDateString()}
          </span>
        </div>
      </div>
    </div>
  );
}
