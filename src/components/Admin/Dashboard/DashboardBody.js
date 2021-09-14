import React, { useEffect, useState } from 'react'
import DashboardHeader from './DashboardHeader'
import DashboardMain from './Main/DashboardMain';
import classNames from 'classnames'
import DashboardInbox from './Inbox/DashboardInbox';
import DashboardDriver from './Driver/DashboardDriver';
import DashboardNews from './News/DashboardNews';
import DashboardDriverEdit from './Driver/DashboardDriverEdit';
import DashboardDriverCreate from './Driver/DashboardDriverCreate';
// import Axios from 'axios';
import DashboardNewsCreate from './News/DashboardNewsCreate';
import DashboardNewsEdit from './News/DashboardNewsEdit';
import DashboardUser from './User/DashboardUser';
import DashboardUserCreate from './User/DashboardUserCreate';
import DashboardUserEdit from './User/DashboardUserEdit';
import DashboardOrder from './Order/DashboardOrder';
import DashboardOrderEdit from './Order/DashboardOrderEdit';
import DashboardOrderCreate from './Order/DashboardOrderCreate';
import DashboardReportCreate from './Report/DashboardReportCreate';
import DashboardReportEdit from './Report/DashboardReportEdit';
import DashboardReport from './Report/DashboardReport';
import DashboardDeliveryCreate from './Delivery/DashboardDeliveryCreate';
import DashboardDeliveryEdit from './Delivery/DashboardDeliveryEdit';
import DashboardDelivery from './Delivery/DashboardDelivery';

export default function DashboardBody(props) {

    const tabId = props.tabId;
    const [toast, setToast] = useState(false)
    const [isChange, setIsChange] = useState(false)
    const [Driver, setDriver] = useState({})
    const [news, setNews] = useState({})
    const [user, setUser] = useState({})
    const [order, setOrder] = useState({})
    const [Report, setReport] = useState({})
    const [email, setEmail] = useState([])

    const setToastFunc = (bool) => {
        setIsChange(true)
        setTimeout(() => {
            setIsChange(false)
        }, 100)
        setToast(true)
        setTimeout(() => {
            setToast(false)
        }, 3000)
    }

    useEffect(() => {
        //     Axios.get(`http://pe.heromc.net:4000/Drivers/${props.DriverId}`)
        //         .then(res => {
        //             setDriver(res.data)
        setDriver({})
        //         }
        //         )
        //     Axios.get(`http://pe.heromc.net:4000/news/${props.DriverId}`)
        //         .then(res => {
        // setNews(res.data)
        setNews({})
        //         }
        //         )
        //     Axios.get(`http://pe.heromc.net:4000/users/list/${props.DriverId}`)
        //         .then(res => {
        //             setUser(res.data)
        setUser({})
        //         }
        //         )
        //     Axios.get(`http://pe.heromc.net:4000/order/${props.DriverId}`)
        //         .then(res => {
        //             setOrder(res.data)
        setOrder({})
        //         }
        //         )
        //     Axios.get(`http://pe.heromc.net:4000/Report/${props.DriverId}`)
        //         .then(res => {
        // setReport(res.data)
        setReport({})
        //         }
        //         )
        //     Axios.get(`http://pe.heromc.net:4000/email/${props.DriverId}`)
        //         .then(res => {
        //             setEmail(res.data)
        setEmail({})
        //         }
        //         )
    }, [props.DriverId, props.openEdit])
    const openMenuMobile = props.openMenuMobile;

    return (
        <div
            className={classNames("DashboardBody px-5 pt-2", {
                DashboardBody_small: !props.openMenu
            })}>
            {
                !openMenuMobile &&
                <div
                    className="DashboardBody-closemenu"
                    onClick={props.setOpenMenuOnClick}
                ></div>
            }
            {(props.openCreate && tabId === "3") &&
                <DashboardOrderCreate
                    setCloseCreateFunc={props.setCloseCreateFunc}
                    setToastFunc={setToastFunc}
                />
            }
            {(props.openEdit && tabId === "3") &&
                <DashboardOrderEdit
                    setCloseEditFunc={props.setCloseEditFunc}
                    setToastFunc={setToastFunc}
                    order={order}
                />
            }

            {(props.openCreate && tabId === "4") &&
                <DashboardDeliveryCreate
                    setCloseCreateFunc={props.setCloseCreateFunc}
                    setToastFunc={setToastFunc}
                />
            }
            {(props.openEdit && tabId === "4") &&
                <DashboardDeliveryEdit
                    setCloseEditFunc={props.setCloseEditFunc}
                    setToastFunc={setToastFunc}
                    email={email}
                />
            }
            {(props.openCreate && tabId === "5") &&
                <DashboardDriverCreate
                    setCloseCreateFunc={props.setCloseCreateFunc}
                    setToastFunc={setToastFunc}
                />
            }
            {(props.openEdit && tabId === "5") &&
                <DashboardDriverEdit
                    setCloseEditFunc={props.setCloseEditFunc}
                    setToastFunc={setToastFunc}
                    Driver={Driver}
                />
            }
            {(props.openCreate && tabId === "6") &&
                <DashboardNewsCreate
                    setCloseCreateFunc={props.setCloseCreateFunc}
                    setToastFunc={setToastFunc}
                />
            }
            {(props.openEdit && tabId === "6") &&
                <DashboardNewsEdit
                    setCloseEditFunc={props.setCloseEditFunc}
                    setToastFunc={setToastFunc}
                    news={news}
                />
            }
            {(props.openCreate && tabId === "7") &&
                <DashboardUserCreate
                    setCloseCreateFunc={props.setCloseCreateFunc}
                    setToastFunc={setToastFunc}
                />
            }
            {(props.openEdit && tabId === "7") &&
                <DashboardUserEdit
                    setCloseEditFunc={props.setCloseEditFunc}
                    setToastFunc={setToastFunc}
                    user={user}
                />
            }

            {(props.openCreate && tabId === "8") &&
                <DashboardReportCreate
                    setCloseCreateFunc={props.setCloseCreateFunc}
                    setToastFunc={setToastFunc}
                />
            }
            {(props.openEdit && tabId === "8") &&
                <DashboardReportEdit
                    setCloseEditFunc={props.setCloseEditFunc}
                    setToastFunc={setToastFunc}
                    Report={Report}
                />
            }

            <DashboardHeader
                itemName={props.menuItems[tabId - 1].name}
                setOpenMenuOnClick={props.setOpenMenuOnClick}
                openMenu={props.openMenu}
                orderNotice={props.orderNotice}
            />
            {
                tabId === "1" && <DashboardMain />
            }
            {
                tabId === "2" && <DashboardInbox />
            }
            {
                tabId === "3" &&
                <DashboardOrder
                    setOpenCreateFunc={props.setOpenCreateFunc}
                    setOpenEditFunc={props.setOpenEditFunc}
                    toast={toast}
                    isChange={isChange}
                />
            }
            {
                tabId === "4" &&
                <DashboardDelivery
                    setOpenCreateFunc={props.setOpenCreateFunc}
                    setOpenEditFunc={props.setOpenEditFunc}
                    toast={toast}
                    isChange={isChange}
                />
            }
            {
                tabId === "5" &&
                <DashboardDriver
                    setOpenCreateFunc={props.setOpenCreateFunc}
                    setOpenEditFunc={props.setOpenEditFunc}
                    toast={toast}
                    isChange={isChange}
                />
            }
            {
                tabId === "6" &&
                <DashboardNews
                    setOpenCreateFunc={props.setOpenCreateFunc}
                    setOpenEditFunc={props.setOpenEditFunc}
                    toast={toast}
                    isChange={isChange}
                />
            }
            {
                tabId === "7" &&
                <DashboardUser
                    setOpenCreateFunc={props.setOpenCreateFunc}
                    setOpenEditFunc={props.setOpenEditFunc}
                    toast={toast}
                    isChange={isChange}
                />
            }
            {
                tabId === "8" &&
                <DashboardReport
                    setOpenCreateFunc={props.setOpenCreateFunc}
                    setOpenEditFunc={props.setOpenEditFunc}
                    toast={toast}
                    isChange={isChange}
                />
            }

        </div>
    )
}