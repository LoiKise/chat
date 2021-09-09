import React from 'react'

export default function index() {
   
    return (
       <>
             <div className="header__navbar" id="header__navbar">
                {/* <img className="header__navbar--logo" src="./img/logo/Asset 10.png" alt="logo"> */}
                <img src={NAVLOGO} alt="icon__google" />
                <ul className="header__navbar--list">
                    <li className="header__navbar--item">
                        <a href="" className="header__navbar--li">TRANG CHỦ</a>
                    </li>
                    <li className="header__navbar--item">
                        <a href="" className="header__navbar--li">GIỚI THIỆU</a>
                    </li><li className="header__navbar--item">
                        <a href="" className="header__navbar--li">DỊCH VỤ</a>
                    </li><li className="header__navbar--item">
                        <a href="" className="header__navbar--li">TIN TỨC & THÔNG BÁO</a>
                    </li><li className="header__navbar--item">
                        <a href="" className="header__navbar--li">TUYỂN DỤNG</a>
                    </li><li className="header__navbar--item">
                        <a href="" className="header__navbar--li">LIÊN HỆ</a>
                    </li>
                </ul>
                <div className="header__user">
                    {/* <img src="./img/icon/userava.png" alt="" className="header__user--avatar"> */}
                    <a href="" className="header__user--name">TK Logistics</a>
                    
                    {/* <a href="" ><img className="header__user--function" src="./img/icon/userfunc.png" alt=""></a> */}
                </div>
            </div>
            <div className="clearfix"></div>
            <div className="header__text">
                <h3 className="header__text--primary">thương hiệu</h3>
                <h3 className="header__text--primary text--orangered">logistics</h3>
                <h3 className="header__text--primary">hàng đầu việt nam</h3>
                {/* <img className="header__text--icon" src="./img/icon/Asset 14.png" alt="icon"> */}
            </div>
            <div className="header__button">
                <a href="#" className="button button--oranged button--animated">tra cứu </a>
                <a href="#" className="button button--transparent button--animated"><span className="underline">dịch vụ </span></a>
            </div>
       </>
    )
}
