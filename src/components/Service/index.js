import React from 'react'
import Tabs from 'react-bootstrap/Tabs';

export default function index() {
    const Tab = () => <span>Tab</span>;

    const Hello = () => <span>Hello</span>;
    const Sonnet =() => <span>Sonnet</span>;
    
    
    return (
       <>
       <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
  <Tab eventKey="home" title="Vận Đơn">
    <Sonnet />
  </Tab>
  <Tab eventKey="profile" title="Profile">
    <Hello />
  </Tab>
  <Tab eventKey="contact" title="Contact" disabled>
    <Sonnet />
  </Tab>
</Tabs>
<div className="content-detail-pro">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item">
            <a className="nav-link active" id="van-don" data-toggle="tab" href="#vandon" role="tab" aria-controls="home" aria-selected="true">Vận Đơn</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="cuoc-van-chuyen" data-toggle="tab" href="#cuocvanchuyen" role="tab" aria-controls="profile" aria-selected="false">
              Cước vận chuyển</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="buu-cuc" data-toggle="tab" href="#buucuc" role="tab" aria-controls="profile" aria-selected="false">
              Bưu cục</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="hang-cam" data-toggle="tab" href="#hangcam" role="tab" aria-controls="profile" aria-selected="false">
              Hàng cấm gửi</a>
          </li>
        </ul>
        <div className="tab-content tab-content-vandon" id="myTabContent">
          <div className="tab-pane fade show active content-vandon " id="vandon" role="tabpanel" aria-labelledby="van-don">
            <div className="fullwidth-section pro-text">
              <div className="input-group mb-3">
                <input type="text" className="form-control-s" placeholder="Nhập mã vận đơn vào để tra cứu" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <div className="input-group-append">
                  <button className="btn btn-outline-secondary fa fa-search" type="button" id="button-addon2">TRA CỨU VẬN ĐƠN</button>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade cuocvanchuyen" id="cuocvanchuyen" role="tabpanel" aria-labelledby="cuoc-van-chuyen">
            <div className="fullwidth-section pro-text">
              <section className="order">
                <div className="order__form">
                  <div className="row ">
                    <h4 className="heading--secondary text--white">Đặt Hàng Ngay</h4>
                    <div className="row-form">
                      <div className="col span-1-of-4 row--first">
                        <div className="order__form--textbox row--second">
                          <img src="./asset/img/icon/Asset 25.png" alt="" className="order__form--icon" />
                          <input type="text" placeholder="Huyện/Quận" />
                        </div>
                      </div>
                      <div className="col span-1-of-4 row--first">
                        <div className="order__form--textbox row--second">
                          <img src="./asset/img/icon/Asset 25.png" alt="" className="order__form--icon" />
                          <input type="email" placeholder="Xã/Thị Xã" />
                        </div>
                      </div>
                      <div className="col span-1-of-4 row--first">
                        <div className="order__form--textbox row--second">
                          <img src="./asset/img/icon/Asset 25.png" alt="" className="order__form--icon" />
                          <input type="text" placeholder="Huyện/Quận" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row ">
                    <h4 className="heading--secondary text--white">Đặt Hàng Ngay</h4>
                    <div className="row-form">
                      <div className="col span-1-of-4 row--first">
                        <div className="order__form--textbox row--second">
                          <img src="./asset/img/icon/Asset 25.png" alt="" className="order__form--icon" />
                          <input type="text" placeholder="Huyện/Quận" />
                        </div>
                      </div>
                      <div className="col span-1-of-4 row--first">
                        <div className="order__form--textbox row--second">
                          <img src="./asset/img/icon/Asset 25.png" alt="" className="order__form--icon" />
                          <input type="email" placeholder="Xã/Thị Xã" />
                        </div>
                      </div>
                      <div className="col span-1-of-4 row--first">
                        <div className="order__form--textbox row--second">
                          <img src="./asset/img/icon/Asset 25.png" alt="" className="order__form--icon" />
                          <input type="text" placeholder="Huyện/Quận" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row ">
                    <h4 className="heading--secondary text--white">Đặt Hàng Ngay</h4>
                    <div className="row-form">
                      <div className="col span-1-of-4 row--first">
                        <div className="order__form--textbox row--second">
                          <input type="text" placeholder="Địa chỉ" />
                        </div>
                      </div>
                      <div className="col span-1-of-4 row--first">
                        <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck3" />
                        <label className="form-check-label" htmlFor="defaultCheck3">
                          Chuyển phát nhanh         </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="input-group-append">
                  <button className="btn btn-outline-secondary fa fa-search" type="button" id="button-addon2">TRA CỨU VẬN CHUYỂN</button>
                </div>
              </section>
            </div>
          </div>
          <div className="tab-pane fade" id="buucuc" role="tabpanel" aria-labelledby="buu-cuc">
            <div className="fullwidth-section pro-text">
              <p>Please be patient with us and we guarantee you will love your metal print.
              </p>
              <p>***Wood Back Mount Included</p>
            </div>
          </div>
          <div className="tab-pane fade" id="hangcam" role="tabpanel" aria-labelledby="hang-cam">
            <div className="content-detail">
              <table className="table table-drip table-hover">
                <tbody>
                  <tr>
                    <th scope="row">MATERIAL</th>
                    <td>Aluminum</td>
                  </tr>
                  <tr>
                    <th scope="row">PRINT SIDES</th>
                    <td>1</td>
                  </tr>
                  <tr>
                    <th scope="row">SIZE</th>
                    <td colSpan={2}> 8x10",10x10", 12x18",16x20",16x24",20x30"24x36"
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">THICKNESS</th>
                    <td colSpan={2}>.045"</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                            
                            
                            </div> */}
        </div>
      </div>
       </>
    )
}
