import React from 'react'
import ButtonCustom from '../../../utils/Buttons/ButtonCustom'
import CategoryTitle from '../Category/CategoryTitle/CategoryTitle'

export default function Order() {
    const IconService = "./assets/img/icon/planes.png"
    
    return (
        <div className="ordernow section-area">
            <div className="container">
                <div className="ordernow__top">
                    <div className="row justify-content-md-center">
                        <div className="col-md-6">
                            <CategoryTitle title='Đặt hàng' content='Đặt hàng ngay' />
                        </div>
                    </div>
                </div>
                <div className="ordernow-form">
                    <div className="ordernow-form__userinfor">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="ordernow-form__userinfor-item">
                                    <input type="text" name="" id="" className="ordernow-form__username" placeholder="Họ và Tên" />
                                    <img src="./assets/img/icon/tomato_user.png" className="ordernow-form__icon" alt="" />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="ordernow-form__userinfor-item">
                                    <input type="text" name="" id="" className="ordernow-form__userphone" placeholder="Số Điện Thoại" />
                                    <img src="./assets/img/icon/tomato_phone.png" className="ordernow-form__icon" alt="" />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="ordernow-form__userinfor-item">
                                    <input type="text" name="" id="" className="ordernow-form__useremail" placeholder="Email" />
                                    <img src="./assets/img/icon/tomato_email.png" className="ordernow-form__icon" alt="" />

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="ordernow-form__deliverylocation">
                        <h3 className="ordernow-form__deliverylocation-header">Điểm Giao Hàng</h3>
                        <div className="row">
                            <div className="col-md-3">
                                <div className="ordernow-form__deliverylocation-item">
                                    <input type="text" name="" id="" className="ordernow-form__province" placeholder="Tỉnh / Thành Phố" />
                                    <img src="./assets/img/icon/tomato_down_arrow.png" className="ordernow-form__icon" alt="" />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="ordernow-form__deliverylocation-item">
                                    <input type="text" name="" id="" className="ordernow-form__province" placeholder="Huyện / Quận" />
                                    <img src="./assets/img/icon/tomato_down_arrow.png" className="ordernow-form__icon" alt="" />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="ordernow-form__deliverylocation-item">
                                    <input type="text" name="" id="" className="ordernow-form__province" placeholder="Xã / Thị Xã" />
                                    <img src="./assets/img/icon/tomato_down_arrow.png" className="ordernow-form__icon" alt="" />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="ordernow-form__deliverylocation-item">
                                    <input type="text" name="" id="" className="ordernow-form__province" placeholder="Địa Chỉ" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ordernow-form__about">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="ordernow-form__about-item">
                                    <input type="text" name="" id="" className="ordernow-form__typepackage" placeholder="Loại Hàng" />
                                    <img src="./assets/img/icon/tomato_down_arrow.png" className="ordernow-form__icon" alt="" />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="ordernow-form__about-item">
                                    <input type="text" name="" id="" className="ordernow-form__weight" placeholder="Cân Nặng" />

                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="ordernow-form__about-check">
                                    <ul className="form__about-checklist">
                                        <li className="form__about-checkitem">
                                            <input type="checkbox" name="" id="" />
                                            <span>Chuyển phát nhanh</span>
                                        </li>
                                        <li className="form__about-checkitem">
                                            <input type="checkbox" name="" id="" />
                                            <span>Dễ vỡ</span>
                                        </li>
                                        <li className="form__about-checkitem">
                                            <input type="checkbox" name="" id="" />
                                            <span>Hàng đông lạnh</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='section-area__btn'>
                        <ButtonCustom name="Gửi Yêu Cầu" linkIcon={IconService} />
                    </div>

                </div>
            </div>

        </div>

    )
}
