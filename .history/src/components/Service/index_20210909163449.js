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
            <section className="aboutus">
        <div className="row">
          <div className="col container">
            <img className="aboutus__img" src="./img/imgs/chemist-1636371_1920.jpg" alt="" />
            <div className="row aboutus__box">
              <div className="col">
                <p className="aboutus__box--number">10<sup>+</sup></p>
              </div>
              <div className="col">
                <p className="aboutus__box--text">Năm <br /> Kinh Nghiệm</p>
              </div>
            </div>
          </div>
          <div className="col aboutus__info">
            <p className="text--small">
              Chúng tôi là ai?
            </p>
            <h4 className="heading--secondary">
              Vài Điều Về <br /> Chúng Tôi
            </h4>
            <div className="aboutus__details">
              <img src="./img/icon/Asset 16.png" alt="" className="aboutus__details--icon icon--large" />
              <div className="aboutus__details--text">
                <h4>Đơn Vị Vận Chuyển Uy Tín</h4>
                <p>Với trên 10 năm kinh nghiệm, chúng tôi tự tin sẽ mang đến cho khách hàng dịch vụ nhanh nhất, rẻ nhất, an toàn nhất</p>
              </div>
            </div>
            <div className="clearfix" />
            <div className="aboutus__details">
              <img src="./img/icon/Asset 17.png" alt="" className="aboutus__details--icon" />
              <div className="aboutus__details--text">
                <h4>Phạm Vi Bao Phủ Toàn Quốc</h4>
                <p>Chúng tôi đã có mặt trên 63 tỉnh thành cả nước, với hơn 3000 bưu cục và hàng trăm kho bãi</p>
              </div>
            </div>
            <div className="clearfix" />
            <div className="aboutus__details">
              <img src="./img/icon/Asset 14.png" alt="" className="aboutus__details--icon icon--small" />
              <div className="aboutus__details--text">
                <h4>Sứ Mệnh</h4>
                <p>Chất đầy niềm tin yêu của khách hàng trên mỗi chuyến xe, chúng tôi có sứ mệnh mang đến mọi điều tốt đẹp nhất cho khách hàng với tốc độ nhanh nhất, an toàn tuyệt đối</p>
              </div>
            </div>
          </div>
        </div>
      </section>
       </>
    )
}
