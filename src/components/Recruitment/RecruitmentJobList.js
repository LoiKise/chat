import React, { useState } from "react";
import JobItem from "./RecruitmentJobItem";
import RecruitmentPagination from "./RecruitmentPagination";

export default function Jobs({ jobs, filters }) {
  const { products, pagination } = jobs;
  const [images] = useState([
    { IMGMoney: "/assets/img/imgs/money.png" },
    { IMGDate: "/assets/img/imgs/date.png" },
    { IMGLocation: "/assets/img/icon/location.png" },
    { IMGDegree: "/assets/img/imgs/degree.png" },
  ]);

  return (
    <div className="job-list">
      {products && (
        <>
          {products.map((product) => (
            <JobItem jobs={product} images={images} key={product._id} />
          ))}
        </>
      )}
      <RecruitmentPagination pagination={pagination} filters={filters} />
    </div>
  );
}
