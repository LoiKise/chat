import React from "react";

export default function Contact() {
  return (
    <div>
      <div id="section__contact" className="contact section-area">
        <div className="container">
          <div className="contact__top">
            <div className="row justify-content-md-center">
              <div className="col-md-6">
                <div className="section__top">
                  <span>Liên hệ</span>
                  <h2 className="section__top-header">Liên hệ với chúng tôi</h2>
                  {/* <div class="section__top-note">
          Vận chuyển hàng hóa trong nước và quốc tế
        </div>   */}
                </div>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <div className="row">
              <div className="col-md-4">
                <ul className="content-text__list">
                  <li className="content-text__item">
                    <img
                      src="./assets/img/icon/tomato_circle_phone.png"
                      alt=""
                      className="content-text__icon"
                    />
                    <div className="content-text__text">
                      <h3 className="content-text__text-header">Hot Line</h3>
                      <p>0962165083</p>
                    </div>
                  </li>
                  <li className="content-text__item">
                    <img
                      src="./assets/img/icon/tomato_circle_email.png"
                      alt=""
                      className="content-text__icon"
                    />
                    <div className="content-text__text">
                      <h3 className="content-text__text-header">Mail</h3>
                      <p>tklogistics@gmail.com</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-md-8">
                <div className="row">
                  <div className="col-md-6">
                    <div className="contact-form__userinfor">
                      <input type="text" placeholder="Họ và Tên" />
                      <img
                        src="./assets/img/icon/tomato_user.png"
                        alt=""
                        className="contact-form__icon"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="contact-form__userinfor">
                      <input type="text" placeholder="Email" />
                      <img
                        src="./assets/img/icon/tomato_email.png"
                        alt=""
                        className="contact-form__icon"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="contact-form__userinfor">
                      <input type="text" placeholder="Số điện thoại" />
                      <img
                        src="./assets/img/icon/tomato_phone.png"
                        alt=""
                        className="contact-form__icon"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="contact-form__userinfor">
                      <input type="text" placeholder="Tiêu đề" />
                      <img
                        src="./assets/img/icon/tomato_input.png"
                        alt=""
                        className="contact-form__icon"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="contact-form__userinfor contact-form__userinfor-input">
                      <textarea
                        type="text"
                        placeholder="Nhập tin nhắn"
                        className="contact-form__userinfor__input"
                      />
                      <img
                        src="./assets/img/icon/tomato_input.png"
                        alt=""
                        className="contact-form__icon"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section-area__btn">
              <button>
                Gửi yêu cầu
                <img
                  src="./assets/img/icon/planes.png"
                  alt=""
                  className="section-area__btn-icon"
                />
              </button>
            </div>
          </div>
          <img
            src="./assets/img/imgs/Decoration/square_deco.png"
            alt=""
            className="ordernow-decoration1"
          />
          <img
            src="./assets/img/imgs/Decoration/circle_deco.png"
            alt=""
            className="ordernow-decoration2"
          />
        </div>
      </div>
    </div>
  );
}
