import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HeaderNavItem from "./HeaderNavItem";
import classname from 'classname'
import { Nav, Navbar } from 'react-bootstrap'

export default function Index({ isHome }) {

  const headerItem =
    [
      {
        name: "TRANG CHỦ",
        link: "/"
      },
      {
        name: "GIỚI THIỆU",
        link: "/"
      },
      {
        name: "DỊCH VỤ",
        link: '/Service'
      },
      {
        name: "TRA CỨU",
        link: "/"
      },
      {
        name: "TUYỂN DỤNG",
        link: "/recruitment"
      },
      {
        name: "LIÊN HỆ",
        link: 'Contact'
      },
    ]
  //event change color navbar
  const [colorChange, setColorchange] = useState(false);
  useEffect(() => {
    const changeNavbarColor = () => {
      if (window.scrollY >= 80) {
        setColorchange(true);
      }
      else {
        setColorchange(false);
      }
    };
    window.addEventListener('scroll', changeNavbarColor);
  }, [])


  return (
    <div className={classname("header", { "header--home": isHome === true })}>

      <Navbar expand="lg" className={colorChange ? 'colorChange' : 'header__nav'} >
        <Navbar.Brand >
          <Link to="/">
            <img
              src="./assets/img/icon/dark_logo.png"
              alt="this is logo"
              className="header__logo"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <ul className="header__nav-list">
              <HeaderNavItem headerItem={headerItem} />
              <div className="header__authenWrapper">
                <Link to="/login" className="header__authen--login">
                  Đăng nhập
                </Link>
                <Link to="/register" className="header__authen--signup">
                  Đăng ký
                </Link>
              </div>
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div >

  );
}
