import { faCheckCircle, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import DashboardProductTable from './DashboardOrderTable'

export default function DashboardOrder(props) {

    const [table, setTable] = useState([])

    useEffect(() => {
        if (window.innerWidth <= 600) {
            setTable([
                "Thông tin đơn hàng",
                "Ngày tạo",
                "Loại Hàng",
                "Khách Hàng",
                "Phân loại",
                "Số điện thoại",
                "Tài Xế",
                "Sản Phẩm",
                "Số lượng",
                "Đơn vị",
                "Tổng tiền",
                "Trạng thái",
                "Ghi chú",
                "Công cụ"
            ])
        } else {
            setTable([
                "Thông tin đơn hàng",
                "Ngày tạo",
                "Loại Hàng",
                "Khách Hàng",
                "Phân loại",
                "Số điện thoại",
                "Tài Xế",
                "Sản Phẩm",
                "Số lượng",
                "Đơn vị",
                "Tổng tiền",
                "Trạng thái",
                "Ghi chú",
                "Công cụ"
            ])
        }
        function handleResize() {
            if (window.innerWidth <= 600) {
                setTable([
                    "Thông tin đơn hàng",
                    "Ngày tạo",
                    "Loại Hàng",
                    "Khách Hàng",
                    "Phân loại",
                    "Số điện thoại",
                    "Tài Xế",
                    "Sản Phẩm",
                    "Số lượng",
                    "Đơn vị",
                    "Tổng tiền",
                    "Trạng thái",
                    "Ghi chú",
                    "Công cụ"
                ])
            } else {
                setTable([
                    "Thông tin đơn hàng",
                    "Ngày tạo",
                    "Loại Hàng",
                    "Khách Hàng",
                    "Phân loại",
                    "Số điện thoại",
                    "Tài Xế",
                    "Sản Phẩm",
                    "Số lượng",
                    "Đơn vị",
                    "Tổng tiền",
                    "Trạng thái",
                    "Ghi chú",
                    "Công cụ"
                ])
            }
        }
        window.addEventListener("resize", handleResize);
        return (() => {
            window.removeEventListener("resize", handleResize);
        })
    }, [])


    return (
        <div className="dashboard-product">
            <div className={props.toast ? "toast toast-show" : "toast"} style={{ top: '20px' }}>
                <FontAwesomeIcon icon={faCheckCircle} className="icon" />
                Cập nhật đơn hàng thành công
            </div>
            <DashboardProductTable
                icon={faUser}
                title="Orders"
                color="orange"
                table={table}
                setOpenCreateFunc={props.setOpenCreateFunc}
                setCloseCreateFunc={props.setCloseCreateFunc}
                setOpenEditFunc={props.setOpenEditFunc}
                setCloseEditFunc={props.setCloseEditFunc}
                isChange={props.isChange}
            />
        </div>
    )
}