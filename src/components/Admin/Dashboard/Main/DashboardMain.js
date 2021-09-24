import React, { useEffect, useState } from 'react'
import { faFileInvoice, faMoneyBillWave, faTshirt, faUser, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import DashboardTotalCount from './DashboardTotalCount'
import DashboardTopFive from './DashboardTopFive'
import DashboardChart from './DashboardChart'
import DashboardChartPie from './DashboardChartPie'
import requestAPI from '../../../../apis';

export default function DashboardMain() {

    const [products, setProducts] = useState([]);
    const [order, setOrder] = useState([]);
    const [email, setEmail] = useState([]);
    const [countOrder, setCountOrder] = useState(0);
    const [countRequest, setCountRequest] = useState(0);
    const [countUser, setCountUser] = useState(0);

    const [totalIncome, setTotalIncome] = useState(0);
    const [topCustomer, setTopCusomer] = useState([]);
    const [countOrderStorage, setCountOrderStorage] = useState([]);
    const [countOrderShipped, setCountOrderShipped] = useState([]);
    const [topOrderSales, setTopOrderSales] = useState([]);

    useEffect(() => {
        requestAPI('/orders', 'GET').then(res => {
            if (res) {
                setCountOrder(res.data?.total)
                let total = 0;
                for (const item of res.data?.data) {
                    total += item.totalPrice
                }
                setTotalIncome(total)
            }
        })
        requestAPI('/request', 'GET').then(res => {
            setCountRequest(res.data?.total)
        })
        requestAPI('/users', 'GET').then(res => {
            setCountUser(res.data?.total)
        })
        requestAPI('/survey/status/1', 'GET').then(res => {
            console.log({ TOPSTORAGE: res.data });
        })
        requestAPI('/survey/status/3', 'GET').then(res => {
            console.log({ TOPSHIPPED: res.data });
        })
        requestAPI('/survey/totalprice', 'GET').then(res => {
            // console.log({ TOTALSALE: res.data });
            setTopOrderSales(res.data)
        })
        requestAPI('/survey/phone', 'GET').then(res => {
            // console.log({ TOPCUSTOMER: res.data });
            setTopCusomer(res.data)
        })
    }, [])

    const totalCount = [
        {
            id: 1,
            title: "Đơn Hàng",
            count: countOrder,
            percent: 30,
            isDecrease: false,
            color: "darkpurple",
            icon: faFileInvoice
        },
        {
            id: 2,
            title: "Lưu Kho",
            count: countOrderStorage,
            percent: 10,
            isDecrease: true,
            color: "darkred",
            icon: faShoppingBag
        },
        {
            id: 3,
            title: "Tổng Doanh Thu",
            count: `${totalIncome?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}đ`,
            percent: 20,
            isDecrease: false,
            color: "darkblue",
            icon: faMoneyBillWave
        },
        {
            id: 4,
            title: "Đã giao",
            count: countOrderShipped,
            percent: 19,
            isDecrease: true,
            color: "lightblue",
            icon: faUser
        },
    ]

    return (
        <div className="dashboard-main">
            <div className="row flex">
                {totalCount.map((item, index) => {
                    return (
                        <DashboardTotalCount
                            key={index}
                            item={item}
                        />
                    )
                })}
            </div>

            <div className="row flex">
                <DashboardTopFive
                    icon={faUser}
                    title="TOP khách hàng"
                    color="lightblue"
                    data={topCustomer}
                    table={[
                        {
                            title: 'Số điện thoại'
                        },
                        {
                            title: 'Tổng đơn hàng'
                        },
                    ]}
                />
                <DashboardTopFive
                    icon={faTshirt}
                    title="TOP 5 đơn hàng lớn"
                    color="pink"
                    data={topOrderSales}
                    table={[
                        {
                            title: 'Tên Đơn'
                        },
                        {
                            title: 'Tổng'
                        },
                    ]}
                />
            </div>
            <div className="row flex">
                <DashboardChartPie
                    email={email}
                    color="pink"
                />
                <DashboardChart
                    products={products}
                    order={order}
                    color="lightblue"
                />
            </div>
            {/* <div className="row flex">
                <DashboardChartLine
                    icon={faTasks}
                    order={order}
                    color="pink"
                />
            </div> */}
        </div>
    )
}