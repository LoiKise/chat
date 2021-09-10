import React from 'react'
import AboutListItem from './AboutListItem'

export default function AboutUs(props) {

    const aboutListItem = [
        {
            img: './assets/img/icon/truck.png',
            title: 'Đơn Vị Vận Chuyển Uy Tín',
            content: '  Với trên 10 năm kinh nghiệm , chúng tôi tự tin sẽ mang đến cho khách hàng dịch vụ nhanh nhất , rẽ nhất, an toàn nhất'
        },
        {
            img: './assets/img/icon/warehouse.png',
            title: 'Phạm Vi Bao Phủ Toàn Quốc',
            content: 'Chúng tôi đã có mặt trên 63 tinh thành cả nước, với hơn 3000 bưu cục và hàng trăm kho bãi'
        },
        {
            img: './assets/img/icon/package.png',
            title: 'Sứ Mệnh',
            content: ' Chất đầy niêm tin yêu của khách hàng trên mỗi chuyến xe, chúng tôi có sứ mệnh mang đến mọi điều tốt đẹpnhất cho khách hàng với tốc độ nhanh nhất , an toàn tuyệt đối'
        },
    ]


    return (
        <div className="container">
            <div className="whoweare section-area">
                <div className="whoweare__content">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="whoweare__content-img">
                                <img src="./assets/img/imgs/whoweare.jpg" alt="" />
                                <div className="whoweare__content-experience">
                                    <span>10</span>
                                    <p>
                                        Năm <br />
                                        Kinh Nghiệm
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="whoweare__content-text">
                                <span>Chúng tôi là ai</span>
                                <h2 className="content-text__header">
                                    Vài điều về <br />
                                    chúng tôi
                                </h2>
                                <ul className="content-text__list">
                                    <AboutListItem aboutListItem={aboutListItem}/>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
