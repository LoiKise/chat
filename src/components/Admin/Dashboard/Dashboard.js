import React, { useEffect, useState } from 'react'
import DashboardBody from './DashboardBody'
import DashboardMenu from './DashboardMenu'
import { faFileInvoice, faHome, faInbox, faNewspaper, faShoppingBag, faEnvelope, faUser, faBiking, faTruck } from '@fortawesome/free-solid-svg-icons'
// import socketIOClient from "socket.io-client"
// import Axios from 'axios'
import { withRouter } from 'react-router-dom'
// const ENDPOINT = "http://pe.heromc.net:4000";

function Dashboard(props) {
    const menuItems = [
        {
            id: "1",
            name: "Tổng Quan",
            icon: faHome
        },
        // {
        //     id: "2",
        //     name: "Tin Nhắn",
        //     icon: faInbox
        // },
        {
            id: "2",
            name: "Đơn hàng",
            icon: faFileInvoice
        },
        {
            id: "3",
            name: "Giao Hàng",
            icon: faTruck
        },
        {
            id: "4",
            name: "Tài Xế",
            icon: faBiking
        },
        {
            id: "5",
            name: "Tin Tuyển Dụng",
            icon: faNewspaper
        },
        {
            id: "6",
            name: "Tài Khoản",
            icon: faUser
        },
        {
            id: "7",
            name: "Đặt Hàng",
            icon: faShoppingBag
        },
        {
            id: "8",
            name: "Hỗ trợ",
            icon: faEnvelope
        },

    ]
    const [tabId, setTabId] = useState("1");
    const [openMenu, setOpenMenu] = useState(true);
    const [openMenuMobile, setOpenMenuMobile] = useState(true);
    const [DriverId, setDriverId] = useState("")

    // const socket = socketIOClient(ENDPOINT);

    const [orderNotice, setOrderNotice] = useState(null)
    const [userInfo, setUserInfo] = useState(null)

    useEffect(() => {
        setOrderNotice(null)
        setUserInfo(null)
    }, [])
    // useEffect(() => {
    //     if (localStorage.getItem('token')) {
    //         Axios.get(`http://pe.heromc.net:4000/users/${localStorage.getItem('user-id')}`, {
    //             headers: { "authorization": `Bearer ${localStorage.getItem('token')}` }
    //         })
    //             .then(res => {
    //                 setUserInfo(res.data.user)
    //                 const userInfo = res.data.user;
    //                 if (userInfo.userRole === 'admin') {
    //                     socket.emit('join', {
    //                         sessionId: 'admin',
    //                         isAdmin: true
    //                     })
    //                     socket.on("placeAnOrder-notice", function (data) {
    //                         setOrderNotice(data)
    //                     })
    //                 } else {
    //                     localStorage.setItem("errLogin", "You do not have Administrator access!")
    //                     props.history.push('/admin')
    //                 }
    //             })
    //             .catch(err => {
    //                 console.log(err)
    //             })
    //     } else {
    //         props.history.push('/admin/dashboard')
    //     }
    // }, [socket, props.history])

    const setTabIdOnClick = (id) => {
        setTabId(id);
    }

    const setOpenMenuOnClick = () => {
        if (window.innerWidth <= 1110) {
            setOpenMenu(true);
            if (openMenuMobile) setOpenMenuMobile(false);
            else setOpenMenuMobile(true);
        } else {
            if (openMenu) setOpenMenu(false);
            else setOpenMenu(true);
        }
    }

    const [openCreate, setOpenCreate] = useState(false)

    const setOpenCreateFunc = () => {
        document.body.style.overflow = 'hidden';
        setOpenCreate(true)
    }

    const setCloseCreateFunc = (bool) => {
        document.body.style.overflow = 'unset';
        setOpenCreate(bool)
    }

    const [openEdit, setOpenEdit] = useState(false)

    const setOpenEditFunc = (event) => {
        document.body.style.overflow = 'hidden';
        setOpenEdit(true)
    }

    const setCloseEditFunc = (bool) => {
        document.body.style.overflow = 'unset';
        setOpenEdit(bool)
    }

    return (
        <div className="Dashboard flex">
            <DashboardMenu
                setTabIdOnClick={setTabIdOnClick}
                setOpenMenuOnClick={setOpenMenuOnClick}
                tabId={tabId}
                menuItems={menuItems}
                openMenu={openMenu}
                openMenuMobile={openMenuMobile}
                setCloseCreateFunc={setCloseCreateFunc}
                setCloseEditFunc={setCloseEditFunc}
                userInfo={userInfo}
            />
            <DashboardBody
                tabId={tabId}
                menuItems={menuItems}
                openMenu={openMenu}
                openMenuMobile={openMenuMobile}
                openCreate={openCreate}
                openEdit={openEdit}
                setOpenMenuOnClick={setOpenMenuOnClick}
                setOpenCreateFunc={setOpenCreateFunc}
                setCloseCreateFunc={setCloseCreateFunc}
                setOpenEditFunc={setOpenEditFunc}
                setCloseEditFunc={setCloseEditFunc}
                DriverId={DriverId}
                orderNotice={orderNotice}
            />
        </div>
    )
}
export default withRouter(Dashboard)