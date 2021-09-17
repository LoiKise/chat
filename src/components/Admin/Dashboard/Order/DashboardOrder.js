import { faCheckCircle, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import DashboardProductTable from './DashboardOrderTable'
import { EditToolbar } from './DashboardEditToolBar';

export default function DashboardOrder(props) {

    const [table, setTable] = useState([])

    useEffect(() => {
        if (window.innerWidth <= 600) {
            setTable([
                { headerName: "Mã Đơn", field: 'id', editable: false, disableClickEventBubbling: true },
                { headerName: "Ngày tạo", field: 'createdAt', editable: false, disableClickEventBubbling: true },
                { headerName: "Khách hàng gửi", field: 'customerName', disableClickEventBubbling: true },
                {
                    headerName: "Phân loại", field: 'customerType', hide: true,
                    // valueFormatter: params => params.row?.customerType?.name,
                    disableClickEventBubbling: true
                },
                { headerName: "Số điện thoại gửi hàng", field: 'customerPhone', disableClickEventBubbling: true },
                { headerName: "Địa chỉ gửi hàng", field: 'customerAddress', disableClickEventBubbling: true, hide: true },
                { headerName: "Khách hàng nhận", field: 'receiverName', disableClickEventBubbling: true },
                { headerName: "Số điện thoại nhận hàng", field: 'receiverPhone', disableClickEventBubbling: true },
                { headerName: "Địa chỉ nhận hàng", field: 'receiverAddress', disableClickEventBubbling: true, hide: true },
                {
                    headerName: "Tài Xế", field: 'driver', hide: true,
                    valueFormatter: params => params.row?.driver?.name,
                    disableClickEventBubbling: true
                },
                {
                    headerName: "Loại Hàng", field: 'orderType', hide: true,
                    valueFormatter: params => params.row?.categories?.name,
                    disableClickEventBubbling: true
                },
                { headerName: "Số lượng", field: 'quantity', disableClickEventBubbling: true },
                {
                    headerName: "Đơn vị", field: 'unit',
                    valueFormatter: params => params.row?.unit?.name,
                    disableClickEventBubbling: true
                },
                { headerName: "Tổng tiền", field: 'totalPrice', disableClickEventBubbling: true },
                {
                    headerName: "Trạng thái", field: 'status',
                    // valueFormatter: params => params.row?.status?.name,
                    disableClickEventBubbling: true
                },
                {
                    headerName: "Trạng thái", field: 'status',
                    // valueFormatter: params => params.row?.status?.name,
                    disableClickEventBubbling: true
                },
                { headerName: "Ghi chú", field: 'notes', disableClickEventBubbling: true },
                {
                    headerName: "Công cụ", field: 'control',
                    disableClickEventBubbling: true,
                    renderCell: (params) => {
                        return (
                            <div className="d-flex justify-content-between align-items-center" style={{ cursor: "pointer" }}>
                                <EditToolbar order={params} setOpenEditFunc={props.setOpenEditFunc} />
                            </div>
                        );
                    }
                }
            ])
        } else {
            setTable([
                { headerName: "Mã Đơn", field: 'id', editable: false, disableClickEventBubbling: true },
                { headerName: "Ngày tạo", field: 'createdAt', editable: false, disableClickEventBubbling: true },
                { headerName: "Khách hàng gửi", field: 'customerName', disableClickEventBubbling: true },
                {
                    headerName: "Phân loại", field: 'customerType', hide: true,
                    // valueFormatter: params => params.row?.customerType?.name,
                    disableClickEventBubbling: true
                },
                { headerName: "Số điện thoại gửi hàng", field: 'customerPhone', disableClickEventBubbling: true },
                { headerName: "Địa chỉ gửi hàng", field: 'customerAddress', disableClickEventBubbling: true, hide: true },
                { headerName: "Khách hàng nhận", field: 'receiverName', disableClickEventBubbling: true },
                { headerName: "Số điện thoại nhận hàng", field: 'receiverPhone', disableClickEventBubbling: true },
                { headerName: "Địa chỉ nhận hàng", field: 'receiverAddress', disableClickEventBubbling: true, hide: true },
                {
                    headerName: "Tài Xế", field: 'driver', hide: true,
                    valueFormatter: params => params.row?.driver?.name,
                    disableClickEventBubbling: true
                },
                {
                    headerName: "Loại Hàng", field: 'orderType', hide: true,
                    valueFormatter: params => params.row?.categories?.name,
                    disableClickEventBubbling: true
                },
                { headerName: "Số lượng", field: 'quantity', disableClickEventBubbling: true },
                {
                    headerName: "Đơn vị", field: 'unit',
                    valueFormatter: params => params.row?.unit?.name,
                    disableClickEventBubbling: true
                },
                { headerName: "Tổng tiền", field: 'totalPrice', disableClickEventBubbling: true },
                {
                    headerName: "Trạng thái", field: 'status',
                    // valueFormatter: params => params.row?.status?.name,
                    disableClickEventBubbling: true
                },
                {
                    headerName: "Trạng thái", field: 'status',
                    // valueFormatter: params => params.row?.status?.name,
                    disableClickEventBubbling: true
                },
                { headerName: "Ghi chú", field: 'notes', disableClickEventBubbling: true },
                {
                    headerName: "Công cụ", field: 'control',
                    disableClickEventBubbling: true,
                    renderCell: (params) => {
                        return (
                            <div className="d-flex justify-content-between align-items-center" style={{ cursor: "pointer" }}>
                                <EditToolbar order={params} setOpenEditFunc={props.setOpenEditFunc} />
                            </div>
                        );
                    }
                }
            ])
        }
        function handleResize() {
            if (window.innerWidth <= 600) {
                setTable([
                    { headerName: "Mã Đơn", field: 'id', editable: false, disableClickEventBubbling: true },
                    { headerName: "Ngày tạo", field: 'createdAt', editable: false, disableClickEventBubbling: true },
                    { headerName: "Khách hàng gửi", field: 'customerName', disableClickEventBubbling: true },
                    {
                        headerName: "Phân loại", field: 'customerType', hide: true,
                        // valueFormatter: params => params.row?.customerType?.name,
                        disableClickEventBubbling: true
                    },
                    { headerName: "Số điện thoại gửi hàng", field: 'customerPhone', disableClickEventBubbling: true },
                    { headerName: "Địa chỉ gửi hàng", field: 'customerAddress', disableClickEventBubbling: true, hide: true },
                    { headerName: "Khách hàng nhận", field: 'receiverName', disableClickEventBubbling: true },
                    { headerName: "Số điện thoại nhận hàng", field: 'receiverPhone', disableClickEventBubbling: true },
                    { headerName: "Địa chỉ nhận hàng", field: 'receiverAddress', disableClickEventBubbling: true, hide: true },
                    {
                        headerName: "Tài Xế", field: 'driver', hide: true,
                        valueFormatter: params => params.row?.driver?.name,
                        disableClickEventBubbling: true
                    },
                    {
                        headerName: "Loại Hàng", field: 'orderType', hide: true,
                        valueFormatter: params => params.row?.categories?.name,
                        disableClickEventBubbling: true
                    },
                    { headerName: "Số lượng", field: 'quantity', disableClickEventBubbling: true },
                    {
                        headerName: "Đơn vị", field: 'unit',
                        valueFormatter: params => params.row?.unit?.name,
                        disableClickEventBubbling: true
                    },
                    { headerName: "Tổng tiền", field: 'totalPrice', disableClickEventBubbling: true },
                    {
                        headerName: "Trạng thái", field: 'status',
                        // valueFormatter: params => params.row?.status?.name,
                        disableClickEventBubbling: true
                    },
                    {
                        headerName: "Trạng thái", field: 'status',
                        // valueFormatter: params => params.row?.status?.name,
                        disableClickEventBubbling: true
                    },
                    { headerName: "Ghi chú", field: 'notes', disableClickEventBubbling: true },
                    {
                        headerName: "Công cụ", field: 'control',
                        disableClickEventBubbling: true,
                        renderCell: (params) => {
                            return (
                                <div className="d-flex justify-content-between align-items-center" style={{ cursor: "pointer" }}>
                                    <EditToolbar order={params} setOpenEditFunc={props.setOpenEditFunc} />
                                </div>
                            );
                        }
                    }
                ])
            } else {
                setTable([
                    { headerName: "Mã Đơn", field: 'id', editable: false, disableClickEventBubbling: true },
                    { headerName: "Ngày tạo", field: 'createdAt', editable: false, disableClickEventBubbling: true },
                    { headerName: "Khách hàng gửi", field: 'customerName', disableClickEventBubbling: true },
                    {
                        headerName: "Phân loại", field: 'customerType', hide: true,
                        // valueFormatter: params => params.row?.customerType?.name,
                        disableClickEventBubbling: true
                    },
                    { headerName: "Số điện thoại gửi hàng", field: 'customerPhone', disableClickEventBubbling: true },
                    { headerName: "Địa chỉ gửi hàng", field: 'customerAddress', disableClickEventBubbling: true, hide: true },
                    { headerName: "Khách hàng nhận", field: 'receiverName', disableClickEventBubbling: true },
                    { headerName: "Số điện thoại nhận hàng", field: 'receiverPhone', disableClickEventBubbling: true },
                    { headerName: "Địa chỉ nhận hàng", field: 'receiverAddress', disableClickEventBubbling: true, hide: true },
                    {
                        headerName: "Tài Xế", field: 'driver', hide: true,
                        valueFormatter: params => params.row?.driver?.name,
                        disableClickEventBubbling: true
                    },
                    {
                        headerName: "Loại Hàng", field: 'orderType', hide: true,
                        valueFormatter: params => params.row?.categories?.name,
                        disableClickEventBubbling: true
                    },
                    { headerName: "Số lượng", field: 'quantity', disableClickEventBubbling: true },
                    {
                        headerName: "Đơn vị", field: 'unit',
                        valueFormatter: params => params.row?.unit?.name,
                        disableClickEventBubbling: true
                    },
                    { headerName: "Tổng tiền", field: 'totalPrice', disableClickEventBubbling: true },
                    {
                        headerName: "Trạng thái", field: 'status',
                        // valueFormatter: params => params.row?.status?.name,
                        disableClickEventBubbling: true
                    },
                    {
                        headerName: "Trạng thái", field: 'status',
                        // valueFormatter: params => params.row?.status?.name,
                        disableClickEventBubbling: true
                    },
                    { headerName: "Ghi chú", field: 'notes', disableClickEventBubbling: true },
                    {
                        headerName: "Công cụ", field: 'control',
                        disableClickEventBubbling: true,
                        renderCell: (params) => {
                            return (
                                <div className="d-flex justify-content-between align-items-center" style={{ cursor: "pointer" }}>
                                    <EditToolbar order={params} setOpenEditFunc={props.setOpenEditFunc} />
                                </div>
                            );
                        }
                    }
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