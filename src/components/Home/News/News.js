import React from 'react'
import { Link } from 'react-router-dom'
import NewItem from './NewItem'

export default function News(props) {

    const newItem = [
        {
            img: './assets/img/imgs/Services/Ship.jpg',
            info: ' Từ Ngày 12 Tháng 8 Giảm Giá 20% Tất Cả Các Đơn Hàng Vận ChuyểnTrong Nước',
        },
        {
            img: './assets/img/imgs/Services/containerTruck.jpg',
            info: 'Từ Ngày 12 Tháng 8 Hạn Chế Vận Chuyển Hàng Đông Lạnh',
        },
        {
            img: './assets/img/imgs/Services/plane.jpg',
            info: 'Từ Ngày 12 Tháng 7 Tạm Dừng Hoạt Động Vận Chuyển Hàng Không',
        },
    ]

    return (
        <div className="newandsale section-area">
            <div className="container">
                <div className="newandsale__top">
                    <div className="row justify-content-md-center">
                        <div className="col-md-6">
                            <div className="section__top">
                                <span>Bảng tin</span>
                                <h2 className="section__top-header">Thông báo và khuyến mãi</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="newandsale-list">
                    <div className="row">

                        <NewItem newItem={newItem} />

                    </div>
                </div>
            </div>
        </div>
    )
}
