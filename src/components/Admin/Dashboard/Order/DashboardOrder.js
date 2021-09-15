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
                { headerName: "Mã Đơn", field: 'id', editable: false },
                { headerName: "Ngày tạo", field: 'createdDate', editable: false },
                { headerName: "Khách Hàng", field: 'customerName' },
                {
                    headerName: "Phân loại", field: 'customerType',
                    valueFormatter: params => params.row?.customerType?.name
                },
                { headerName: "Số điện thoại", field: 'phone' },
                {
                    headerName: "Tài Xế", field: 'driver',
                    valueFormatter: params => params.row?.driver?.name
                },
                { headerName: "Sản Phẩm", field: 'productName' },
                {
                    headerName: "Loại Hàng", field: 'type',
                    valueFormatter: params => params.row?.type?.name
                },
                { headerName: "Số lượng", field: 'quantity' },
                {
                    headerName: "Đơn vị", field: 'unit',
                    valueFormatter: params => params.row?.unit?.name
                },
                { headerName: "Tổng tiền", field: 'totalPrice' },
                {
                    headerName: "Trạng thái", field: 'status',
                    valueFormatter: params => params.row?.status?.name
                },
                { headerName: "Ghi chú", field: 'note' },
                {
                    headerName: "Công cụ", field: 'control',
                    disableClickEventBubbling: true,
                    renderCell: (params) => {
                        return (
                            <div className="d-flex justify-content-between align-items-center" style={{ cursor: "pointer" }}>
                                <EditToolbar index={params.row} />
                            </div>
                        );
                    }
                }
            ])
        } else {
            setTable([
                { headerName: "Mã Đơn", field: 'id', editable: false },
                { headerName: "Ngày tạo", field: 'createdDate', editable: false },
                { headerName: "Khách Hàng", field: 'customerName' },
                {
                    headerName: "Phân loại", field: 'customerType',
                    valueFormatter: params => params.row?.customerType?.name
                },
                { headerName: "Số điện thoại", field: 'phone' },
                {
                    headerName: "Tài Xế", field: 'driver',
                    valueFormatter: params => params.row?.driver?.name
                },
                { headerName: "Sản Phẩm", field: 'productName' },
                {
                    headerName: "Loại Hàng", field: 'type',
                    valueFormatter: params => params.row?.type?.name
                },
                { headerName: "Số lượng", field: 'quantity' },
                {
                    headerName: "Đơn vị", field: 'unit',
                    valueFormatter: params => params.row?.unit?.name
                },
                { headerName: "Tổng tiền", field: 'totalPrice' },
                {
                    headerName: "Trạng thái", field: 'status',
                    valueFormatter: params => params.row?.status?.name
                },
                { headerName: "Ghi chú", field: 'note' },
                {
                    headerName: "Công cụ", field: 'control',
                    disableClickEventBubbling: true,
                    renderCell: (params) => {
                        return (
                            <div className="d-flex justify-content-between align-items-center" style={{ cursor: "pointer" }}>
                                <EditToolbar index={params.row} />
                            </div>
                        );
                    }
                }
            ])
        }
        function handleResize() {
            if (window.innerWidth <= 600) {
                setTable([
                    { headerName: "Mã Đơn", field: 'id', editable: false },
                    { headerName: "Ngày tạo", field: 'createdDate', editable: false },
                    { headerName: "Khách Hàng", field: 'customerName' },
                    {
                        headerName: "Phân loại", field: 'customerType',
                        valueFormatter: params => params.row?.customerType?.name
                    },
                    { headerName: "Số điện thoại", field: 'phone' },
                    {
                        headerName: "Tài Xế", field: 'driver',
                        valueFormatter: params => params.row?.driver?.name
                    },
                    { headerName: "Sản Phẩm", field: 'productName' },
                    {
                        headerName: "Loại Hàng", field: 'type',
                        valueFormatter: params => params.row?.type?.name
                    },
                    { headerName: "Số lượng", field: 'quantity' },
                    {
                        headerName: "Đơn vị", field: 'unit',
                        valueFormatter: params => params.row?.unit?.name
                    },
                    { headerName: "Tổng tiền", field: 'totalPrice' },
                    {
                        headerName: "Trạng thái", field: 'status',
                        valueFormatter: params => params.row?.status?.name
                    },
                    { headerName: "Ghi chú", field: 'note' },
                    {
                        headerName: "Công cụ", field: 'control',
                        disableClickEventBubbling: true,
                        renderCell: (params) => {
                            return (
                                <div className="d-flex justify-content-between align-items-center" style={{ cursor: "pointer" }}>
                                    <EditToolbar index={params.row} />
                                </div>
                            );
                        }
                    }
                ])
            } else {
                setTable([
                    { headerName: "Mã Đơn", field: 'id', editable: false },
                    { headerName: "Ngày tạo", field: 'createdDate', editable: false },
                    { headerName: "Khách Hàng", field: 'customerName' },
                    {
                        headerName: "Phân loại", field: 'customerType',
                        valueFormatter: params => params.row?.customerType?.name
                    },
                    { headerName: "Số điện thoại", field: 'phone' },
                    {
                        headerName: "Tài Xế", field: 'driver',
                        valueFormatter: params => params.row?.driver?.name
                    },
                    { headerName: "Sản Phẩm", field: 'productName' },
                    {
                        headerName: "Loại Hàng", field: 'type',
                        valueFormatter: params => params.row?.type?.name
                    },
                    { headerName: "Số lượng", field: 'quantity' },
                    {
                        headerName: "Đơn vị", field: 'unit',
                        valueFormatter: params => params.row?.unit?.name
                    },
                    { headerName: "Tổng tiền", field: 'totalPrice' },
                    {
                        headerName: "Trạng thái", field: 'status',
                        valueFormatter: params => params.row?.status?.name
                    },
                    { headerName: "Ghi chú", field: 'note' },
                    {
                        headerName: "Công cụ", field: 'control',
                        disableClickEventBubbling: true,
                        renderCell: (params) => {
                            return (
                                <div className="d-flex justify-content-between align-items-center" style={{ cursor: "pointer" }}>
                                    <EditToolbar index={params.row} />
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