import React from 'react';




export default function index() {
    return (
        <div class="wrapper">
            <div class="header">
                <nav class="header__nav">
                    <a href="#">
                        <img
                            src="./asset/img/logo/dark_logo.png"
                            alt="this is logo"
                            class="header__logo"
                        />
                    </a>
                    <ul class="header__nav-list">
                        <li class="header__nav-item">
                            <a class="header__nav-link" href="index.html">TRANG CHỦ</a>
                        </li>
                        <li class="header__nav-item">
                            <a class="header__nav-link" href="#">GIỚI THIỆU</a>
                        </li>
                        <li class="header__nav-item">
                            <a class="header__nav-link" href="#">DỊCH VỤ</a>
                        </li>
                        <li class="header__nav-item">
                            <a class="header__nav-link" href="#">TRA CỨU</a>
                        </li>
                        <li class="header__nav-item">
                            <a class="header__nav-link" href="tuyendung.html">TUYỂN DỤNG</a>
                        </li>
                        <li class="header__nav-item">
                            <a class="header__nav-link" href="#">LIÊN HỆ</a>
                        </li>
                    </ul>

                    <div class="header__authenWrapper">
                        <a href="login.html" class="header__authen--login">Đăng nhập</a>
                        <a href="signup.html" class="header__authen--signup">Đăng ký</a>
                    </div>
                </nav>

                <div class="header__slogan">
                    <p class="header__slogan-text">
                        THƯƠNG HIỆU<br />
                        <span>LOGISTICS</span> <br />HÀNG ĐẦU VIỆT NAM
                    </p>
                    <img
                        src="./asset/img/icon/package.png"
                        alt=""
                        class="header__slogan-icon"
                    />
                </div>
                <div class="header__button">
                    <a href="#" class="header__button-search--link">
                        <button class="header__button-search">
                            Tra cứu <img src="./asset/img/icon/planes.png" alt="" />
                        </button>
                    </a>
                    <button class="header__button-service">
                        Dịch vụ<img src="./asset/img/icon/planes.png" alt="" />
                    </button>
                </div>
            </div>
        </div>
    )
}
