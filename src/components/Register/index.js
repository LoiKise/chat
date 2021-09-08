import React from "react";
import { Link } from "react-router-dom";

export default function index() {
  const IMGGG = "/assets/img/icon/Asset 18.png";
  const IMGFB = "/assets/img/icon/Asset 19.png";
  return (
    <div className="signup container">
      <div className="row">
        <div className="col col-12 signup__form">
          <h3 className="text-center p-1">ĐĂNG KÝ</h3>
          <div className="signup__social">
            <button className="signup__google d-flex justify-content-center align-items-center">
              <img src={IMGGG} alt="icon__google" />
              <p className="signup__google--title font-weight-bold">
                Đăng nhập với Google
              </p>
            </button>
            <button className="signup__face d-flex justify-content-center align-items-center">
              <img src={IMGFB} alt="icon__face" />
              <p className="signup__face--title font-weight-bold">
                Đăng nhập với Facebook
              </p>
            </button>
            <p className="title__social">
              Đăng ký nhanh với Google hoặc Facebook
            </p>
          </div>
          <div className="signup__input">
            <form action="#">
              <div className="form-group">
                <label htmlFor="form-group-name" className="font-weight-bold">
                  Họ và tên
                </label>
                <input
                  type="text"
                  className="form-control rounded-0"
                  id="form-group-name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="form-group-phone" className="font-weight-bold">
                  Số điện thoại
                </label>
                <input
                  type="number"
                  className="form-control rounded-0"
                  id="form-group-phone"
                />
              </div>
              <div className="form-group">
                <label
                  htmlFor="form-group-password"
                  className="font-weight-bold"
                >
                  Mật khẩu
                </label>
                <input
                  type="password"
                  className="form-control rounded-0"
                  id="form-group-password"
                />
              </div>
              <div className="button__submit">
                <button type="submit" className="submit-form">
                  Đăng Ký
                </button>
              </div>
            </form>
          </div>
          <p className="accept--rules">
            Bạn đăng ký đồng nghĩa với bạn đồng ý các{" "}
            <Link to="">điều khoản sử dụng </Link>
            của chúng tôi
          </p>
          <div className="yes--account">
            <span>Bạn đã có tải khoản ? </span>
            <Link to="/login" className="login__link">
              Đăng nhập
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
