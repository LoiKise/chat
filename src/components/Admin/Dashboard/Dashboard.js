import React, { useEffect, useState } from 'react'
import DashboardBody from './DashboardBody'
import DashboardMenu from './DashboardMenu'
import { faFileInvoice, faHome, faNewspaper, faShoppingBag, faEnvelope, faUser, faBiking, faTruck } from '@fortawesome/free-solid-svg-icons'
import { withRouter } from 'react-router-dom'
import requestAPI from '../../../apis';
import { useHistory } from 'react-router';
import { ACCESS_TOKEN } from './../../../utils/constant';
import { useSnackbar } from 'notistack';
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
            name: "Yêu Cầu Giao Hàng",
            icon: faShoppingBag
        },
        {
            id: "8",
            name: "Hộp Thư",
            icon: faEnvelope
        },

    ]
    const { enqueueSnackbar } = useSnackbar();
    const [tabId, setTabId] = useState("1");
    const [openMenu, setOpenMenu] = useState(true);
    const [openMenuMobile, setOpenMenuMobile] = useState(true);
    const [DriverId,] = useState("")
    const history = useHistory();
    const [orderNotice] = useState(null)
    const [userInfo, setUserInfo] = useState(null)
    useEffect(() => {
        verifyToken()
    }, [ACCESS_TOKEN])
    //call api get info user 
    const setTabIdOnClick = (id) => {
        setTabId(id);
    }
    const verifyToken = async () => {
        if (ACCESS_TOKEN()) {
            await requestAPI('/admin', 'POST', { token: ACCESS_TOKEN() })
                .then(res => {
                    if (res) {
                        if (res.data?.user) {
                            setUserInfo(res.data?.user)
                        } else {
                            history.push('/dashboard')
                            enqueueSnackbar('Đã phát hiện lỗi truy cập, vui lòng đăng nhập lại', {
                                persist: false,
                                variant: 'error',
                                preventDuplicate: true,
                                autoHideDuration: 3000,
                            })
                        }
                    }
                }).catch(() => history.push('/dashboard'))
        } else {
            history.push('/dashboard')
        }


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