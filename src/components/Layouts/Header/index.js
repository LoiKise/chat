import React from "react";
import { Link } from "react-router-dom";
import HeaderNavItem from "./HeaderNavItem";

export default function Index() {

  const headerItem =
    [
      {
        name: "TRANG CHỦ"
      },
      {
        name: "GIỚI THIỆU",
      },
      {
        name: "DỊCH VỤ"
      },
      {
        name: "TRA CỨU"
      },
      {
        name: "TUYỂN DỤNG"
      },
      {
        name: "LIÊN HỆ"
      },
    ]

  return (
    <div className="header">
      <nav className="header__nav">
        <Link to="/">
          <img
            src="./assets/img/icon/dark_logo.png"
            alt="this is logo"
            className="header__logo"
          />
        </Link>
        <ul className="header__nav-list">
          <HeaderNavItem headerItem={headerItem} />
        </ul>
        <div className="header__authenWrapper">
          <Link to="/" className="header__authen--login">
            Đăng nhập
          </Link>
          <Link to="/" className="header__authen--signup">
            Đăng ký
          </Link>
        </div>
      </nav>
    </div >

  );
}
