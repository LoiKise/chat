import React from 'react'
import EventNoteIcon from "@material-ui/icons/EventNote";

export default function AcountUser() {
    return (
        <div className="User_Infor">
            <div className="container">
                <div className="row">
                    <div className="col-4 detail_infomation bg-white">

                        <div className="title_information">
                            <h1>Thông tin người dùng</h1>
                        </div>
                        <div className="infomation ">
                            <div className="infomation__icon">
                                <img src="../assets/img/icon/user_img.png" alt="" />
                            </div>
                            <div>
                                <div className="informatio__name">
                                    <span>Nguyễn Hoài Nhớ</span>
                                </div>
                                {<EventNoteIcon />}
                                <div className="informatio__phone d-flex">
                                    <p className="pr-2">Số điện thoại:</p>
                                    <span>0903693308</span>
                                </div>
                                <div className="informatio__password d-flex">
                                    <p>Mật khẩu:</p>
                                    <span>**************</span>
                                </div>
                                <p className="pt-1">Đổi mật khẩu</p>
                            </div>
                            <div className="btn_update_user">
                                <button type="submit" className="btn-success text-white">Cập nhật thông tin cá nhân</button>
                            </div>
                        </div>

                    </div>
                    <div className="col-7 detail_history bg-white ">
                        <div className="title_information">
                            <h1>Lịch sử đơn hàng</h1>
                        </div>
                        <div className="d-flex">
                            <div className="icon__history">
                                <img src="./assets/img/icon/box.png" alt="" />
                            </div>
                            <div className="name__history ">
                                <span>Đơn hàng vận chuyển 100 thùng sữa</span>
                                <span>Mã đơn: 156165131</span>
                            </div>
                            <div>
                                <button className="btn btn-success">Xem chi tiết</button>
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="icon__history">
                                <img src="./assets/img/icon/box.png" alt="" />
                            </div>
                            <div className="name__history ">
                                <span>Đơn hàng vận chuyển 100 thùng sữa</span>
                                <span>Mã đơn: 156165131</span>
                            </div>
                            <div>
                                <button className="btn btn-success">Xem chi tiết</button>
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="icon__history">
                                <img src="./assets/img/icon/box.png" alt="" />
                            </div>
                            <div className="name__history ">
                                <span>Đơn hàng vận chuyển 100 thùng sữa</span>
                                <span>Mã đơn: 156165131</span>
                            </div>
                            <div>
                                <button className="btn btn-success">Xem chi tiết</button>
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="icon__history">
                                <img src="./assets/img/icon/box.png" alt="" />
                            </div>
                            <div className="name__history ">
                                <span>Đơn hàng vận chuyển 100 thùng sữa</span>
                                <span>Mã đơn: 156165131</span>
                            </div>
                            <div>
                                <button className="btn btn-success">Xem chi tiết</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
