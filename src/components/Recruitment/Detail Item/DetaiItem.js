import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import RoomIcon from '@material-ui/icons/Room';
import DateRangeIcon from '@material-ui/icons/DateRange';


export default function DetaiItem() {
  return (
    <div className="detail_job">
      <div className="container">
        <div style={{ display: 'block', width: 700, padding: 30 }}>
          <Tabs defaultActiveKey="first">
            <Tab eventKey="first" title="THÔNG TIN">
              <div className="row">
                <div className="col-md-8  col-sm-12 tab-main-content">
                  <h1>CÁC PHÚC LỢI DÀNH CHO BẠN</h1>
                  <div className="benefits">
                    <div className="benefit ">
                      <div className="benefit-name">
                        <MonetizationOnIcon />
                        <span> Lương hấp dẫn + lương tháng 13</span>
                      </div>
                      <div className="benefit-name">
                        <LocalHospitalIcon />
                        <span> Gói bảo hiểm cao cấp</span>
                      </div>
                    </div>
                  </div>
                  <div className="job-description">
                    <h1>MÔ TẢ CÔNG VIỆC</h1>
                    <div className="description">
                      - Analyze current technologies used within the company to define strategies and road-maps for improving cross-country digital architectures.
                      - Identify technical gaps and advise proper solutions following standardized technologies and appropriate technology life-cycles.
                      - Influence business owners and stakeholders on an appropriate design considering technical complexity, risks, resources, scope, and time bound.
                      - Being technical liaison and evangelist to establish business relationships with all stakeholders for conducting product presentations and evaluations.
                      - Observe the application of architectural compliance, company practices, best practices to propose proper actions in the right time to mitigate risk and security issues.
                    </div>
                    <div className="job-requirements">
                      <h1>YÊU CẦU CÔNG VIỆC</h1>
                      <div className="requirements">
                        - At least 5 years’ experience working as software engineer, 3 years working as Solution Architect.
                        - Design one or more systems running on production.
                        - Excellent leadership and communication skills.
                        - Excellent written and oral English.
                        Have working experience in:
                        - Designing and delivering resilient solutions with enterprise integration patterns in business-complex and large-scaled systems for over multiple years.
                        - Experienced in different kinds of large-scaled data stores and messaging systems.
                        - Strong experience in system resilience, analytics, monitoring and notifications.
                        - Familiar with Cloud (AWS or GCP) and infrastructure architecture and know how to build it.
                        - Excellent understanding of application development across multiple geographies.
                      </div>
                    </div>
                    <div className="job-locations">
                      <h1>ĐỊA ĐIỂM CÔNG VIỆC</h1>
                      <div className="location-name">
                        <RoomIcon />
                        <span> Thành phố Hồ Chí Minh, Ho Chi Minh City, Vietnam</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 tab-sidebar">
                  <div className="box-summary">
                    <div className="summary-item d-flex">
                      <div className="icon icon-date-posted">
                        <span><DateRangeIcon /></span>
                      </div>
                      <div className="summary-content d-flex flex-column">
                        <span className="content-label">NGÀY ĐĂNG TUYỂN</span>
                        <span className="content">22/11/2021</span>
                      </div>
                    </div>
                    <div className="summary-item d-flex">
                      <div className="icon icon-date-posted">
                        <span><DateRangeIcon /></span>
                      </div>
                      <div className="summary-content d-flex flex-column">
                        <span className="content-label">CẤP BẬC</span>
                        <span className="content">NHÂN VIÊN</span>
                      </div>
                    </div>
                    <div className="summary-item d-flex">
                      <div className="icon icon-date-posted">
                        <span><DateRangeIcon /></span>
                      </div>
                      <div className="summary-content d-flex flex-column">
                        <span className="content-label">NGÀNH NGHỀ</span>
                        <span className="content">IT_PHẦN MỀM</span>
                      </div>
                    </div>
                    <div className="summary-item d-flex">
                      <div className="icon icon-date-posted">
                        <span><DateRangeIcon /></span>
                      </div>
                      <div className="summary-content d-flex flex-column">
                        <span className="content-label">KĨ NĂNG</span>
                        <span className="content">Software Architecture</span>
                      </div>
                    </div>
                    <div className="summary-item d-flex">
                      <div className="icon icon-date-posted">
                        <span><DateRangeIcon /></span>
                      </div>
                      <div className="summary-content d-flex flex-column">
                        <span className="content-label">NGÔN NGỮ TRÌNH BÀY HỒ SƠ</span>
                        <span className="content">BẤT KỲ</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab eventKey="second" title="CÔNG TY">
              <div className="row">
                <div className="col-8">
                  <h1>CÔNG TY GPT GROUPT NET</h1>
                </div>
                <div className="col-4">
                  <div className="box-summary">
                    <div className="summary-item d-flex">
                      <div className="icon icon-date-posted">
                        <span><DateRangeIcon /></span>
                      </div>
                      <div className="summary-content d-flex flex-column">
                        <span className="content-label">NGÀY ĐĂNG TUYỂN</span>
                        <span className="content">22/11/2021</span>
                      </div>
                    </div>
                    <div className="summary-item d-flex">
                      <div className="icon icon-date-posted">
                        <span><DateRangeIcon /></span>
                      </div>
                      <div className="summary-content d-flex flex-column">
                        <span className="content-label">CẤP BẬC</span>
                        <span className="content">NHÂN VIÊN</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div >
  )
}
