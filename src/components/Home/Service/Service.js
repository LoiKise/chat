import React from 'react'
import ServiceItem from './ServiceItem'

export default function Service() {

    const serviceItem = [
        {
            img: './assets/img/imgs/Services/Ship.jpg',
            title: ' Vận Tải',
            title1: 'Đường Biển',
            iconImg: './assets/img/icon/black_right_circle_arrow.png',
        },
        {
            img: './assets/img/imgs/Services/containerTruck.jpg',
            title: '  Vận Tải ',
            title1: 'Đường Bộ',
            iconImg: './assets/img/icon/black_right_circle_arrow.png',
        },
        {
            img: './assets/img/imgs/Services/plane.jpg',
            title: '  Vận Tải ',
            title1: 'Đường Hàng Không',
            iconImg: './assets/img/icon/black_right_circle_arrow.png',
        },
    ]

    return (
        <div class="ourservices section-area">
            <div class="container">
                <div class="ourservices__top">
                    <div class="row justify-content-md-center">
                        <div class="col-md-6">
                            <div class="section__top">
                                <span>Dịch vụ</span>
                                <h2 class="section__top-header">Dịch Vụ Của Chúng Tôi</h2>
                                <div class="section__top-note">
                                    Vận chuyển hàng hóa trong nước và quốc tế
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="ourservices-list">
                    <div class="row">
                        <ServiceItem serviceItem={serviceItem} />
                    </div>
                </div>
            </div>
        </div>
    )
}
