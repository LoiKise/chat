import React from 'react'

export default function Order(props) {
    return (
        <div class="ordernow section-area">
            <div class="container">
                <div class="ordernow__top">
                    <div class="row justify-content-md-center">
                        <div class="col-md-6">
                            <div class="section__top">
                                <span>Đặt hàng</span>
                                <h2 class="section__top-header">Đặt Hàng Ngay</h2>
                                <div class="section__top-note">
                                    Vận chuyển hàng hóa trong nước và quốc tế
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="ordernow-form">
                    <div class="ordernow-form__userinfor">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="ordernow-form__userinfor-item">
                                    <input type="text" name="" id="" class="ordernow-form__username" placeholder="Họ và Tên" />
                                    <img src="./assets/img/icon/tomato_user.png" class="ordernow-form__icon" alt="" />
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="ordernow-form__userinfor-item">
                                    <input type="text" name="" id="" class="ordernow-form__userphone" placeholder="Số Điện Thoại" />
                                    <img src="./assets/img/icon/tomato_phone.png" class="ordernow-form__icon" alt="" />
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="ordernow-form__userinfor-item">
                                    <input type="text" name="" id="" class="ordernow-form__useremail" placeholder="Email" />
                                    <img src="./assets/img/icon/tomato_email.png" class="ordernow-form__icon" alt="" />

                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="ordernow-form__deliverylocation">
                        <h3 class="ordernow-form__deliverylocation-header">Điểm Giao Hàng</h3>
                        <div class="row">
                            <div class="col-md-3">
                                <div class="ordernow-form__deliverylocation-item">
                                    <input type="text" name="" id="" class="ordernow-form__province" placeholder="Tỉnh / Thành Phố" />
                                    <img src="./assets/img/icon/tomato_down_arrow.png" class="ordernow-form__icon" alt="" />
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="ordernow-form__deliverylocation-item">
                                    <input type="text" name="" id="" class="ordernow-form__province" placeholder="Huyện / Quận" />
                                    <img src="./assets/img/icon/tomato_down_arrow.png" class="ordernow-form__icon" alt="" />
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="ordernow-form__deliverylocation-item">
                                    <input type="text" name="" id="" class="ordernow-form__province" placeholder="Xã / Thị Xã" />
                                    <img src="./assets/img/icon/tomato_down_arrow.png" class="ordernow-form__icon" alt="" />
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="ordernow-form__deliverylocation-item">
                                    <input type="text" name="" id="" class="ordernow-form__province" placeholder="Địa Chỉ" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="ordernow-form__about">
                        <div class="row">
                            <div class="col-md-3">
                                <div class="ordernow-form__about-item">
                                    <input type="text" name="" id="" class="ordernow-form__typepackage" placeholder="Loại Hàng" />
                                    <img src="./assets/img/icon/tomato_down_arrow.png" class="ordernow-form__icon" alt="" />
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="ordernow-form__about-item">
                                    <input type="text" name="" id="" class="ordernow-form__weight" placeholder="Cân Nặng" />

                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="ordernow-form__about-check">
                                    <ul class="form__about-checklist">
                                        <li class="form__about-checkitem">
                                            <input type="checkbox" name="" id="" />
                                            <span>Chuyển phát nhanh</span>
                                        </li>
                                        <li class="form__about-checkitem">
                                            <input type="checkbox" name="" id="" />
                                            <span>Dễ vỡ</span>
                                        </li>
                                        <li class="form__about-checkitem">
                                            <input type="checkbox" name="" id="" />
                                            <span>Hàng đông lạnh</span>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="section-area__btn">
                        <button>Gửi yêu cầu
                            <img src="./assets/img/icon/planes.png" class="section-area__btn-icon" />
                        </button>
                    </div>

                </div>
            </div>

        </div>

    )
}
