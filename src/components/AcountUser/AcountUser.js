import React, { useEffect, useState }from 'react'
import EventNoteIcon from "@material-ui/icons/EventNote";
import { useDispatch, useSelector } from "react-redux";
import requestAPI from '../../apis';
import { updateInfo } from "../../features/auth/authSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { useHistory } from 'react-router';
import { ACCESS_TOKEN } from '../../utils/constant'
import Loading from './Loading';

export default function AcountUser() {

    const statusSocial = useSelector(state => state.auth.statusSocial)
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
    const [loading, setLoading] = useState(false)
    console.log(loading)

    const dispatch = useDispatch()
    const history = useHistory()

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
        setLoading(true)
    }, [])

    const getOrderUser = async (id) => {
        if(!ACCESS_TOKEN()){
            history.push('/login')
        } else {
            const res = await requestAPI(`/order/user/${id}`, 'GET', id);
            setOrders(res.data.listOrder)
            setLoading(false)
            res.data === 'User have no order' ? setHasOrder(false) : setHasOrder(true)
        }
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
                setNewPassword('');
                setOldPassword('');
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
                                        <input className="form-control" name="fullname"  type="text" value={fullname} onChange={e => setFullname(e.target.value)}/> 
                                    </div>
                                )
                            }
                        <img src="asset/img/icon/Asset 6.png" alt="" className="edit" />
                            {
                                !update && !statusSocial &&(
                                    <div>
                                        <p className="infor--phone p-2">Số điện thoại :</p>
                                        <span className="font-weight-bold">{profile.phone}</span>
                                    </div>

                                )
                            }
                            {
                                update && (
                                    <div>
                                        <p className="infor--phone p-2">Số điện thoại :</p>
                                        <br />
                                        <input className="form-control" name="phone" type="number" value={phone} onChange={e => setPhone(e.target.value)} readOnly/>
                                    </div>
                                    
                                )
                            } 
                            {
                                !changePass && !statusSocial &&(
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
                                        <input className="form-control" name="oldPassword"  type="text" value={oldPassword} onChange={e => setOldPassword(e.target.value)}/>
                                        <p>Mật khẩu mới :</p>
                                        <input className="form-control" name="newPassword"  type="text" value={newPassword} onChange={e => setNewPassword(e.target.value)}/>
                                        <p className="error">{errors}</p>
                                        <br />
                                        <a className="infor--changepass" onClick={changePassword}>Xác nhận đổi mật khẩu</a>
                                    </div>
                                )
                            }
                        <div className="btn_update_user">
                            {
                                !update && !statusSocial && (
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
                        loading && !statusSocial && (
                            <Loading />
                        )
                    }
                    {
                        statusSocial && (
                            <h1 style={{textAlign : 'center' }}>Bạn cần đăng kí bằng tài khoản số điện thoại để sử dụng dịch vụ này</h1>
                        )
                    }
                    {
                        !hasOrder && !statusSocial && !loading && (
                            <h1 style={{textAlign : 'center' }}>Hiện tại bạn không có đơn hàng nào</h1>
                        )
                    }
                    {
                        hasOrder && !statusSocial && !loading &&  orders.map((item) => {
                            return (
                                <div className="order--details">
                                    <img src="./assets/img/icon/box.png" alt="" class="order--logo"/>
                                    <div className="order-content">
                                            <p className="font-weight-bold">Mã đơn : {item.id}</p>
                                            <p className="font-weight-bold">Tiêu đề : {item.orderName}</p>
                                    </div>
                                    <button className="order--seen" onClick={(id) => tooglePopup(item.id)}>
                                        XEM CHI TIẾT
                                    </button>
                                    {
                                        openPopup && order.map((item) => {
                                            return (
                                                <div className="popup-box">
                                                    <div className="box">
                                                        <span className="close-icon" onClick={tooglePopupClose}>x</span>
                                                        <div>
                                                            <table className="table">
                                                                <thead className="thead-light">
                                                                    <tr>
                                                                    <th scope="col" className="font-weight-bold">Mã đơn</th>
                                                                    <th scope="col" className="font-weight-bold">Tiêu đề</th>
                                                                    <th scope="col" className="font-weight-bold">Loại khách</th>
                                                                    <th scope="col" className="font-weight-bold">Số lượng</th>
                                                                    <th scope="col" className="font-weight-bold">Giá</th>
                                                                    <th scope="col" className="font-weight-bold">Ghi chú</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                    <td>{item.id}</td>
                                                                    <td>{item.orderName}</td>
                                                                    <td>{item.customerType}</td>
                                                                    <td>{item.quantity}</td>
                                                                    <td>{item.totalPrice}</td>
                                                                    <td>{item.notes}</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <table className="table">
                                                                        <thead className="thead-light">
                                                                            <tr>
                                                                                <th scope="col" className="font-weight-bold">NGƯỜI GỬI</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>
                                                                                    {item.customerName}
                                                                                    <br />
                                                                                    {item.customerAddress}
                                                                                    <br />
                                                                                    {item.customerPhone}
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <table className="table">
                                                                        <thead className="thead-light">
                                                                            <tr>
                                                                                <th scope="col" className="font-weight-bold">NGƯỜI NHẬN</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>
                                                                                    {item.receiverName}
                                                                                    <br />
                                                                                    {item.receiverAddress}
                                                                                    <br />
                                                                                    {item.receiverPhone}
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
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
