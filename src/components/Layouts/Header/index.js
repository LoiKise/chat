import React from "react";
import { Link } from "react-router-dom";
import HeaderNavItem from "./HeaderNavItem";
import { Nav, Navbar, NavbarBrand } from 'react-bootstrap'
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";

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
      <Navbar className="header__nav" sticky="top" expand='lg'>
        <NavbarBrand>
          <Link to="/">
            <img
              src="./assets/img/icon/dark_logo.png"
              alt="this is logo"
              className="header__logo"
            />
          </Link>
        </NavbarBrand>
        <Navbar.Toggle />
        <NavbarCollapse>
          <Nav>
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
          </Nav>

        </NavbarCollapse>


      </Navbar>
    </div >

  );
}

