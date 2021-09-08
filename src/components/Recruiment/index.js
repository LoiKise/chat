import React from "react";

export default function index() {
  const IMGMoney = "/assets/img/imgs/money.png";
  const IMGDate = "/assets/img/imgs/date.png";
  const IMGLocation = "/assets/img/icon/location.png";
  const IMGDegree = "/assets/img/imgs/degree.png";
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
          <h2 className="job-title">3 công việc đang được tuyển</h2>
          <div className="job-list">
            <div className="job-item">
              <h2 className="job-item-title">Trưởng phòng nhân sự</h2>
              <div className="job-item-list">
                <div className="job-item-list-item">
                  <img src={IMGMoney} alt="" />
                  <span>Mức lương : 15.000.000 - 20.000.000</span>
                </div>
                <div className="job-item-list-item">
                  <img src={IMGDate} alt="" />
                  <span>Ngày đăng : 14 / 8 / 2021</span>
                </div>
                <div className="job-item-list-item">
                  <img src={IMGLocation} alt="" />
                  <span>Địa điểm : TP.HCM</span>
                </div>
                <a href className="job-item-btn">
                  Xem chi tiết
                </a>
                <div className="job-item-list-item">
                  <img src={IMGDegree} alt="" />
                  <span>Bằng Cấp : cao đẳng ( tối thiểu )</span>
                </div>
                <div className="job-item-list-item">
                  <img src={IMGDate} alt="" />
                  <span>Hạn cuối nộp hồ sơ : 14 / 9 / 2021</span>
                </div>
              </div>
            </div>
            <div className="job-item">
              <h2 className="job-item-title">Trưởng phòng kế toán</h2>
              <div className="job-item-list">
                <div className="job-item-list-item">
                  <img src={IMGMoney} alt="" />
                  <span>Mức lương : 15.000.000 - 20.000.000</span>
                </div>
                <div className="job-item-list-item">
                  <img src={IMGDate} alt="" />
                  <span>Ngày đăng : 14 / 8 / 2021</span>
                </div>
                <div className="job-item-list-item">
                  <img src={IMGLocation} alt="" />
                  <span>Địa điểm : TP.HCM</span>
                </div>
                <a href className="job-item-btn">
                  Xem chi tiết
                </a>
                <div className="job-item-list-item">
                  <img src={IMGDegree} alt="" />
                  <span>Bằng Cấp : cao đẳng ( tối thiểu )</span>
                </div>
                <div className="job-item-list-item">
                  <img src={IMGDate} alt="" />
                  <span>Hạn cuối nộp hồ sơ : 14 / 9 / 2021</span>
                </div>
              </div>
            </div>
            <div className="job-item">
              <h2 className="job-item-title">Lái xe</h2>
              <div className="job-item-list">
                <div className="job-item-list-item">
                  <img src={IMGMoney} alt="" />
                  <span>Mức lương : 10.000.000 - 13.000.000</span>
                </div>
                <div className="job-item-list-item">
                  <img src={IMGDate} alt="" />
                  <span>Ngày đăng : 14 / 8 / 2021</span>
                </div>
                <div className="job-item-list-item">
                  <img src={IMGLocation} alt="" />
                  <span>Địa điểm : TP.HCM</span>
                </div>
                <a href className="job-item-btn">
                  Xem chi tiết
                </a>
                <div className="job-item-list-item">
                  <img src={IMGDegree} alt="" />
                  <span>Bằng Cấp : cao đẳng ( tối thiểu )</span>
                </div>
                <div className="job-item-list-item">
                  <img src={IMGDate} alt="" />
                  <span>Hạn cuối nộp hồ sơ : 14 / 9 / 2021</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
