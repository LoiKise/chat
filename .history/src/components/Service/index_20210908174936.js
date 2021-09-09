import React from 'react'

export default function index() {
    const USERAVA = "./img/icon/userava.png";
    return (
        <div>
            <section class="header">
            <div class="header__navbar" id="header__navbar">
                <img class="header__navbar--logo" src="./img/logo/Asset 10.png" alt="logo">
                <ul class="header__navbar--list">
                    <li class="header__navbar--item">
                        <a href="" class="header__navbar--li">TRANG CHỦ</a>
                    </li>
                    <li class="header__navbar--item">
                        <a href="" class="header__navbar--li">GIỚI THIỆU</a>
                    </li><li class="header__navbar--item">
                        <a href="" class="header__navbar--li">DỊCH VỤ</a>
                    </li><li class="header__navbar--item">
                        <a href="" class="header__navbar--li">TIN TỨC & THÔNG BÁO</a>
                    </li><li class="header__navbar--item">
                        <a href="" class="header__navbar--li">TUYỂN DỤNG</a>
                    </li><li class="header__navbar--item">
                        <a href="" class="header__navbar--li">LIÊN HỆ</a>
                    </li>
                </ul>
                <div class="header__user">
                    <img src={USERAVA} alt="" class="header__user--avatar">
                    <a href="" class="header__user--name">TK Logistics</a>
                    
                    <a href="" ><img class="header__user--function" src="./img/icon/userfunc.png" alt=""></a>
                </div>
            </div>
            <div class="clearfix"></div>
            <div class="header__text">
                <h3 class="header__text--primary">thương hiệu</h3>
                <h3 class="header__text--primary text--orangered">logistics</h3>
                <h3 class="header__text--primary">hàng đầu việt nam</h3>
                <img class="header__text--icon" src="./img/icon/Asset 14.png" alt="icon">
            </div>
            <div class="header__button">
                <a href="#" class="button button--oranged button--animated">tra cứu <img class="button--img" src="./img/icon/Asset 15.png" alt=""></a>
                <a href="#" class="button button--transparent button--animated"><span class="underline">dịch vụ <img class="button--img" src="./img/icon/Asset 15.png" alt=""></span></a>
            </div>
        </section>
        </div>
    )
}
