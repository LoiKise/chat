import React from "react";
import { Link } from "react-router-dom";

export default function Showmore({ listjob, images }) {
  return (
    <div className="job-item" key={listjob.id}>
      <h2 className="job-item-title">{listjob.jobtitle}</h2>
      <div className="job-item-list">
        <div className="job-item-list-item">
          <img src={images[0].IMGMoney} alt="" />
          <span>
            Mức lương : {listjob.moneyfirst} - {listjob.moneyend}
          </span>
        </div>
        <div className="job-item-list-item">
          <img src={images[1].IMGDate} alt="" />
          <span>
            Ngày đăng :{new Date(listjob.datefirst).toLocaleDateString()}
          </span>
        </div>
        <div className="job-item-list-item">
          <img src={images[2].IMGLocation} alt="" />
          <span>Địa điểm : {listjob.location}</span>
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
            Hạn cuối nộp hồ sơ :{new Date(listjob.dateend).toLocaleDateString()}
          </span>
        </div>
      </div>
    </div>
  );
}
