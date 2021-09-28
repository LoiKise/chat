import React, { useEffect, useState }from 'react'
import EventNoteIcon from "@material-ui/icons/EventNote";
import { useDispatch, useSelector } from "react-redux";
import requestAPI from '../../apis';
import { updateInfo } from "../../features/auth/authSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export default function AcountUser() {

    const profile = useSelector(state => state.auth.profile)
    const password = useSelector(state => state.auth.profile.password)
    const id = useSelector(state => state.auth.profile.id)
    const [update, setUpdate] = useState(false)
    const [changePass, setChangePass] = useState(false)
    const [fullname, setFullname] = useState(profile.fullname)
    const [phone, setPhone] = useState(profile.phone)
    const [orders, setOrders] = useState()
    const [order, setOrder] = useState()
    const [hasOrder, setHasOrder] = useState(false)
    const [newPassword, setNewPassword] = useState()
    const [oldPassword, setOldPassword] = useState()
    const [errors, setErrors] = useState();
    const [openPopup, setOpenPopup] = useState(false)
    console.log(order, openPopup)

    const dispatch = useDispatch()

    const toggleUpdate = () => {
        setUpdate(true)
    }

    const toogleChangePass = () => {
        setChangePass(true)
    }

    const tooglePopup = (id) => {
        setOrder(orders.filter(order => order.id === id))
        setOpenPopup(true)
    }

    const tooglePopupClose = () => {
        setOpenPopup(false)
    }


    //Update profile
    const updateProfile = async (data) => {
        const body = {
            email : null,
            fullname : fullname,
            phone : phone,
            imgUrl : null,
        }

        try {
            const res = await requestAPI(`/user/${id}`, 'PUT', body);
            const resUpdate = await dispatch(updateInfo(body));
            unwrapResult(res);
            setUpdate(false);
            toast.success("CẬP NHẬT THÀNH CÔNG", {
                position: "top-right",
                autoClose: 5000,
            });
            return res
        } catch (error) {
            console.log(error)
        }
    }

    //Lấy danh sách lịch sử đơn hàng
    useEffect(() => {
        getOrderUser(id)
    }, [])

    const getOrderUser = async (id) => {
        const res = await requestAPI(`/order/user/${id}`, 'GET', id);
        setOrders(res.data.listOrder)
        res.data === 'User have no order' ? setHasOrder(false) : setHasOrder(true)
    }

    //Thay đổi mật khẩu
    const changePassword = async (data) => {
        const body = {
            oldPassword : oldPassword,
            newPassword : newPassword,
        }

        try {
            if(newPassword.length < 6 || newPassword.length > 160) {
            setErrors('Mật khẩu có độ dài từ 6 - 160 ký tự')
            } else {
                const res = await requestAPI(`/user/changepassword/${id}`, 'POST', body);
                //const resUpdate = await dispatch(changePass(body));
                //unwrapResult(res);
                setChangePass(false);
                toast.success("THAY ĐỔI MẬT KHẨU THÀNH CÔNG", {
                    position: "top-right",
                    autoClose: 5000,
                });
                return res
            }
        } catch (error) {
            console.log(error)
            toast.error("MẬT KHẨU CŨ KHÔNG ĐÚNG", {
                position: "top-right",
                autoClose: 5000,
            });
        }
    }

    return (
        <div className="personal container py-5">
            <div className="row">
                <div className="col col-md-4 col-12 personal--left text-center">
                    <div className="personal--title">Thông tin người dùng</div>
                    <div className="personal--infor">
                        <img src="../assets/img/icon/user_img.png" alt="" className="avatar mb-3" />
                        {
                            !update && (
                                <p className="infor--name font-weight-bold">{profile.fullname}</p>
                            )
                        }
                        {
                            update && (
                                <div>
                                    <br />
                                    <input name="fullname"  type="text" value={fullname} onChange={e => setFullname(e.target.value)}/> 
                                </div>
                            )
                        }
                        <img src="asset/img/icon/Asset 6.png" alt="" className="edit" />
                        <p className="infor--phone p-2">Số điện thoại : 
                            {
                                !update && (
                                    <span className="font-weight-bold">{profile.phone}</span>
                                )
                            }
                            {
                                update && (
                                    <input name="phone"  type="number" value={phone} onChange={e => setPhone(e.target.value)} readOnly/>
                                )
                            } 
                        </p>
                        {
                            !changePass && (
                                <div>
                                    <p className="infor--password p-2">Mật khẩu: <span className="font-weight-bold">************</span></p>
                                    <a className="infor--changepass" onClick={toogleChangePass}>Đổi mật khẩu</a>
                                </div>
                            )
                        }
                        {
                            changePass && (
                                <div>
                                    <p>Mật khẩu cũ :</p>
                                    <input name="oldPassword"  type="text" value={oldPassword} onChange={e => setOldPassword(e.target.value)}/>
                                    <p>Mật khẩu mới :</p>
                                    <input name="newPassword"  type="text" value={newPassword} onChange={e => setNewPassword(e.target.value)}/>
                                    <p className="error">{errors}</p>
                                    <br />
                                    <a className="infor--changepass" onClick={changePassword}>Xác nhận đổi mật khẩu</a>
                                </div>
                            )
                        }
                        <div className="btn_update_user">
                            {
                                !update && (
                                    <button type="submit" className="btn-success text-white" onClick={toggleUpdate}>Cập nhật thông tin cá nhân</button>
                                )
                            }
                            {
                                update && (
                                    <button type="submit" className="btn-success text-white" onClick={updateProfile}>Xác nhận cập nhật</button>
                                )
                            }
                        </div>
                    </div>
                </div>
                <div className="col col-md-7 col-12 personal--right">
                    <div className="order--title">Lịch sử đơn hàng</div>
                    {
                        !hasOrder && (
                            <h1 style={{textAlign : 'center' }}>Hiện tại bạn không có đơn hàng nào</h1>
                        )
                    }
                    {
                        hasOrder && orders.map((item) => {
                            return (
                                <div className="order--details">
                                    <img src="./assets/img/icon/box.png" alt="" class="order--logo"/>
                                    <div className="order-content">
                                            <p className="font-weight-bold">Mã đơn : {item.id}</p>
                                            <p className="font-weight-bold">Tiêu đề : {item.orderName}</p>
                                    </div>
                                    <button class="order--seen" onClick={(id) => tooglePopup(item.id)}>
                                        XEM CHI TIẾT
                                    </button>
                                    {
                                        openPopup && order.map((item) => {
                                            return (
                                                <div className="popup-box">
                                                    <div className="box">
                                                        <span className="close-icon" onClick={tooglePopupClose}>x</span>
                                                        <div>
                                                            <p className="font-weight-bold">Mã đơn : {item.id}</p>
                                                            <p className="font-weight-bold">Tiêu đề : {item.orderName}</p>
                                                            <p className="font-weight-bold">Loại khách : {item.customerType}</p>
                                                            <p className="font-weight-bold">Số lương : {item.quantity}</p>
                                                            <p className="font-weight-bold">Giá : {item.totalPrice}</p>
                                                            <p className="font-weight-bold">Ghi chú : {item.notes}</p>
                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <p className="font-weight-bold">NGƯỜI GỬI</p>
                                                                    <p className="font-weight-500">{item.customerName}</p>
                                                                    <p className="font-weight-500">{item.customerAddress}</p>
                                                                    <p className="font-weight-500">{item.customerPhone}</p>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <p className="font-weight-bold">NGƯỜI NHẬN</p>
                                                                    <p className="font-weight-500">{item.receiverName}</p>
                                                                    <p className="font-weight-500">{item.receiverAddress}</p>
                                                                    <p className="font-weight-500">{item.receiverPhone}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                    
                                </div>  
                            )
                        })
                    }  
                </div>
            </div>
        </div>
    )
}
