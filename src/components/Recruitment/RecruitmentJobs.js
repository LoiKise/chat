import React, { useState } from "react";
import Showmore from "./RecruitmentShowmore";
import Job from "./RecruitmentJob";

export default function Jobs({ jobs, listjob }) {
  const [showMore, setShowMore] = useState(false);
  const [images] = useState([
    { IMGMoney: "/assets/img/imgs/money.png" },
    { IMGDate: "/assets/img/imgs/date.png" },
    { IMGLocation: "/assets/img/icon/location.png" },
    { IMGDegree: "/assets/img/imgs/degree.png" },
  ]);

  return (
    <div className="job-list">
      {jobs.slice(0, 3).map((job) => (
        <Job job={job} images={images} />
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
          <Showmore images={images} listjob={listjob} />
        ))}
    </div>
  );
}
