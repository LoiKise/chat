import { faUser } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react'
import DashboardProductTable from './DashboardOrderTable'
import { EditToolbar } from './DashboardEditToolBar';
import GridCellExpand from './GridCellExpand';
import moment from 'moment';
export default function DashboardOrder(props) {

    const [table, setTable] = useState([])

    useEffect(() => {
        if (window.innerWidth <= 600) {
            setTable([
                { headerName: "Mã Đơn", field: 'id', renderCell: renderCellExpand },
                {
                    headerName: "Ngày tạo", field: 'createdAt',
                    valueFormatter: params => {
                        console.log({ params: moment(params.row?.createdAt).format("YYYY-MM-DD HH:mm:ss") });
                        moment(params.row?.createdAt).format("YYYY-MM-DD HH:mm:ss")
                    },
                    renderCell: renderCellExpand
                },
                { headerName: "Khách hàng gửi", field: 'customerName', renderCell: renderCellExpand },
                { headerName: "Phân loại", field: 'customerType', hide: true, renderCell: renderCellExpand },
                { headerName: "Số điện thoại gửi hàng", field: 'customerPhone', renderCell: renderCellExpand },
                { headerName: "Địa chỉ gửi hàng", field: 'customerAddress', hide: true, renderCell: renderCellExpand },
                { headerName: "Khách hàng nhận", field: 'receiverName', renderCell: renderCellExpand },
                { headerName: "Số điện thoại nhận hàng", field: 'receiverPhone', renderCell: renderCellExpand },
                { headerName: "Địa chỉ nhận hàng", field: 'receiverAddress', renderCell: renderCellExpand, hide: true },
                {
                    headerName: "Tài Xế", field: 'driver', hide: true,
                    valueFormatter: params => params.row?.driver?.name,
                    renderCell: renderCellExpand, hide: true
                },
                {
                    headerName: "Loại Hàng", field: 'orderType', hide: true, valueFormatter: params => params.row?.categories?.name,
                    renderCell: renderCellExpand
                },
                { headerName: "Số lượng", field: 'quantity', disableClickEventBubbling: true },
                {
                    headerName: "Đơn vị", field: 'unit', valueFormatter: params => params.row?.unit?.name,
                },
                {
                    headerName: "Tổng tiền", field: 'totalPrice',
                    valueFormatter: params => `${params.row?.totalPrice?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}đ`,
                    disableClickEventBubbling: true
                },
                {
                    headerName: "Trạng thái", field: 'status',

                    renderCell: renderCellExpand
                },
                { headerName: "Ghi chú", field: 'notes', renderCell: renderCellExpand },
                {
                    headerName: "Công cụ", field: 'control',

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
                { headerName: "Mã Đơn", field: 'id', renderCell: renderCellExpand },
                {
                    headerName: "Ngày tạo", field: 'createdAt',
                    valueFormatter: params => moment(params.row?.createdAt).format("DD-MM-YYYY HH:mm:ss"),
                    renderCell: renderCellExpand
                },
                { headerName: "Khách hàng gửi", field: 'customerName', renderCell: renderCellExpand },
                { headerName: "Phân loại", field: 'customerType', hide: true, renderCell: renderCellExpand },
                { headerName: "Số điện thoại gửi hàng", field: 'customerPhone', renderCell: renderCellExpand },
                { headerName: "Địa chỉ gửi hàng", field: 'customerAddress', hide: true, renderCell: renderCellExpand },
                { headerName: "Khách hàng nhận", field: 'receiverName', renderCell: renderCellExpand },
                { headerName: "Số điện thoại nhận hàng", field: 'receiverPhone', renderCell: renderCellExpand },
                { headerName: "Địa chỉ nhận hàng", field: 'receiverAddress', renderCell: renderCellExpand, hide: true },
                {
                    headerName: "Tài Xế", field: 'driver', hide: true,
                    valueFormatter: params => params.row?.driver?.name,
                    renderCell: renderCellExpand, hide: true
                },
                {
                    headerName: "Loại Hàng", field: 'orderType', hide: true, valueFormatter: params => params.row?.categories?.name,
                    renderCell: renderCellExpand
                },
                { headerName: "Số lượng", field: 'quantity', disableClickEventBubbling: true },
                {
                    headerName: "Đơn vị", field: 'unit', valueFormatter: params => params.row?.unit?.name,
                },
                {
                    headerName: "Tổng tiền", field: 'totalPrice',
                    valueFormatter: params => `${params.row?.totalPrice?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}đ`,
                    disableClickEventBubbling: true
                },
                {
                    headerName: "Trạng thái", field: 'status',

                    renderCell: renderCellExpand
                },
                { headerName: "Ghi chú", field: 'notes', renderCell: renderCellExpand },
                {
                    headerName: "Công cụ", field: 'control',

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
                    { headerName: "Mã Đơn", field: 'id', renderCell: renderCellExpand },
                    {
                        headerName: "Ngày tạo", field: 'createdAt',
                        valueFormatter: params => moment(params.row?.createdAt).format('L'),
                        renderCell: renderCellExpand
                    },
                    { headerName: "Khách hàng gửi", field: 'customerName', renderCell: renderCellExpand },
                    { headerName: "Phân loại", field: 'customerType', hide: true, renderCell: renderCellExpand },
                    { headerName: "Số điện thoại gửi hàng", field: 'customerPhone', renderCell: renderCellExpand },
                    { headerName: "Địa chỉ gửi hàng", field: 'customerAddress', hide: true, renderCell: renderCellExpand },
                    { headerName: "Khách hàng nhận", field: 'receiverName', renderCell: renderCellExpand },
                    { headerName: "Số điện thoại nhận hàng", field: 'receiverPhone', renderCell: renderCellExpand },
                    { headerName: "Địa chỉ nhận hàng", field: 'receiverAddress', renderCell: renderCellExpand, hide: true },
                    {
                        headerName: "Tài Xế", field: 'driver', hide: true,
                        valueFormatter: params => params.row?.driver?.name,
                        renderCell: renderCellExpand, hide: true
                    },
                    {
                        headerName: "Loại Hàng", field: 'orderType', hide: true, valueFormatter: params => params.row?.categories?.name,
                        renderCell: renderCellExpand
                    },
                    { headerName: "Số lượng", field: 'quantity', disableClickEventBubbling: true },
                    {
                        headerName: "Đơn vị", field: 'unit', valueFormatter: params => params.row?.unit?.name,
                    },
                    {
                        headerName: "Tổng tiền", field: 'totalPrice',
                        valueFormatter: params => `${params.row?.totalPrice?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}đ`,
                        disableClickEventBubbling: true
                    },
                    {
                        headerName: "Trạng thái", field: 'status',

                        renderCell: renderCellExpand
                    },
                    { headerName: "Ghi chú", field: 'notes', renderCell: renderCellExpand },
                    {
                        headerName: "Công cụ", field: 'control',

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
                    { headerName: "Mã Đơn", field: 'id', editable: true, disableClickEventBubbling: true },
                    { headerName: "Ngày tạo", field: 'createdAt', editable: true, disableClickEventBubbling: true },
                    { headerName: "Khách hàng gửi", field: 'customerName', disableClickEventBubbling: true, editable: true, },
                    {
                        headerName: "Phân loại", field: 'customerType', hide: true,
                        // valueFormatter: params => params.row?.customerType?.name,
                        disableClickEventBubbling: true
                    },
                    { headerName: "Số điện thoại gửi hàng", field: 'customerPhone', disableClickEventBubbling: true },
                    {
                        headerName: "Địa chỉ gửi hàng", field: 'customerAddress',
                        disableClickEventBubbling: true,
                        hide: true,
                    },
                    { headerName: "Khách hàng nhận", field: 'receiverName', disableClickEventBubbling: true, editable: true, },
                    { headerName: "Số điện thoại nhận hàng", field: 'receiverPhone', disableClickEventBubbling: true },
                    { headerName: "Địa chỉ nhận hàng", field: 'receiverAddress', disableClickEventBubbling: true, hide: true, editable: true, },
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
    function renderCellExpand(params) {
        return (
            <GridCellExpand
                value={params.formattedValue ? params.formattedValue.toString() : ''}
                width={params.colDef.computedWidth}
            />
        );
    }

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