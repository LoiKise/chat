import React from "react";
import { Link } from "react-router-dom";

export default function index() {
  const ICONGG = "/assets/img/icon/Asset 18.png";
  const ICONFB = "/assets/img/icon/Asset 19.png";
  const ICONLOGO = "/assets/img/icon/Asset 16.png";
  return (
    <div className="login container py-5">
      <div className="row">
        <div className="col col-md-6 col-12 login__form">
          <h3 className="text-center p-3">ĐĂNG NHẬP</h3>
          <div className="login__social">
            <button
              className="
          login__google
          d-flex
          justify-content-center
          align-items-center
        "
            >
              <img src={ICONGG} alt="icon__google" />
              <p className="login__google--title font-weight-bold">
                Đăng nhập với Google
              </p>
            </button>
            <button
              className="
          login__face
          d-flex
          justify-content-center
          align-items-center
        "
            >
              <img src={ICONFB} alt="icon__face" />
              <p className="login__face--title font-weight-bold">
                Đăng nhập với Facebook
              </p>
            </button>
          </div>
          <div className="login__input">
            <form action="#">
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
              <div
                className="
            login__input--submit
            d-flex
            justify-content-between
            align-items-center
          "
              >
                <Link className="forgot-password" to="">
                  Quên mật khẩu
                </Link>
                <button type="submit" className="submit-form">
                  Đăng nhập
                </button>
              </div>
            </form>
          </div>
          <p className="not--account">Bạn chưa có tài khoản ?</p>
          <Link to="" className="signup__link">
            Đăng kí miễn phí ngay
          </Link>
        </div>
        <div className="col col-md-6 col-12 login__introduce">
          <div className="logo__introduce">
            <img src={ICONLOGO} alt="logo--intro" />
          </div>
          <div className="title__introdce">
            <h3 className="text-center">CHÀO MỪNG</h3>
            <p className="text-justify">
              Chào mừng bạn đến với công
              <span className="font-weight-bold">TK logistic</span> chúng tối.
              Chúng tôi chuyên vận chuyển hàng hóa trong nước và quốc tế bằng cả
              đường biển và đường bộ. Mong rằng quý khách sẽ nhận được trải
              nghiệm tốt nhất khi đến với chúng tôi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
