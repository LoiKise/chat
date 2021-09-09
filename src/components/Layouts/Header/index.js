import React from 'react';
import { Link } from 'react-router-dom';


export default function Index() {
    return (
        <div className="wrapper">
            <div className="header">
                <nav className="header__nav">
                    <Link to=''>
                        <img
                            src="./assets/img/icon/dark_logo.png"
                            alt="this is logo"
                            className="header__logo"
                        />
                    </Link>
                    <ul className="header__nav-list">
                        <li className="header__nav-item">
                            <a className="header__nav-link" href="index.html">TRANG CHỦ</a>
                        </li>
                        <li className="header__nav-item">
                            <a className="header__nav-link" href="#">GIỚI THIỆU</a>
                        </li>
                        <li className="header__nav-item">
                            <a className="header__nav-link" href="#">DỊCH VỤ</a>
                        </li>
                        <li className="header__nav-item">
                            <a className="header__nav-link" href="#">TRA CỨU</a>
                        </li>
                        <li className="header__nav-item">
                            <a className="header__nav-link" href="tuyendung.html">TUYỂN DỤNG</a>
                        </li>
                        <li className="header__nav-item">
                            <a className="header__nav-link" href="#">LIÊN HỆ</a>
                        </li>
                    </ul>
                    <div className="header__authenWrapper">
                        <a href="login.html" className="header__authen--login">Đăng nhập</a>
                        <a href="signup.html" className="header__authen--signup">Đăng ký</a>
                    </div>
                </nav>
            </div>
        </div>
    )
}
