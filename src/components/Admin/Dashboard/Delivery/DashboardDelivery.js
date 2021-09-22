import { faBiking } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react'
import DashboardProductTable from './DashboardDeliveryTable'
import { EditToolbar } from '../Order/DashboardEditToolBar';
import GridCellExpand from '../Order/GridCellExpand';
import moment from 'moment';
export default function DashboardDelivery(props) {

    const [table, setTable] = useState([])

    useEffect(() => {
        if (window.innerWidth <= 600) {
            setTable([
                {
                    headerName: "Ngày tạo", field: 'createdAt',
                    valueFormatter: params => moment(params.row?.createdAt).format("DD-MM-YYYY HH:mm:ss"),
                    renderCell: renderCellExpand, width: 150,
                },
                {
                    headerName: "Ngày cập nhật", field: 'updatedAt', hide: true,
                    valueFormatter: params => moment(params.row?.updatedAt).format("DD-MM-YYYY HH:mm:ss"),
                    renderCell: renderCellExpand, width: 150,
                },
                {
                    headerName: "Tài xế", field: 'driver', valueFormatter: params => params.row?.driver === null ? 'Chưa có' : !params.row?.driver?.name, width: 150,
                    renderCell: renderCellExpand,
                },
                { headerName: "Phương thức giao hàng", field: 'typeShip', renderCell: renderCellExpand, width: 150, },
                {
                    headerName: "Phụ thu", field: 'totalPrice', renderCell: renderCellExpand, width: 150,
                    valueFormatter: params => `${params.row?.saleOrder?.totalPrice && params.row?.saleOrder?.totalPrice?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}đ`
                },
                {
                    headerName: "Thời gian nhận hàng", field: 'plannedTime', renderCell: renderCellExpand, width: 150,
                    valueFormatter: params => params?.row?.plannedTime ?
                        moment(params.row?.plannedTime).format("DD-MM-YYYY HH:mm:ss") : 'Chưa bắt đầu giao',
                },
                {
                    headerName: "Tình trạng", field: 'status', width: 150,
                    valueFormatter: params => params?.row?.status?.name,
                    renderCell: renderCellExpand,
                },
                {
                    headerName: "Công cụ", field: 'control',
                    renderCell: (params) => {
                        return (
                            <div className="d-flex justify-content-between align-items-center" style={{ cursor: "pointer" }}>
                                <EditToolbar
                                    params={params.row}
                                    setOpenEditFunc={props.setOpenEditFunc}
                                />
                            </div>
                        );
                    }
                }
            ])
        } else {
            setTable([
                {
                    headerName: "Ngày tạo", field: 'createdAt',
                    valueFormatter: params => moment(params.row?.createdAt).format("DD-MM-YYYY HH:mm:ss"),
                    renderCell: renderCellExpand, width: 150,
                },
                {
                    headerName: "Ngày cập nhật", field: 'updatedAt', hide: true,
                    valueFormatter: params => moment(params.row?.updatedAt).format("DD-MM-YYYY HH:mm:ss"),
                    renderCell: renderCellExpand, width: 150,
                },
                {
                    headerName: "Tài xế", field: 'driver', valueFormatter: params => params.row?.driver === null ? 'Chưa có' : !params.row?.driver?.name, width: 150,
                    renderCell: renderCellExpand,
                },
                { headerName: "Phương thức giao hàng", field: 'typeShip', renderCell: renderCellExpand, width: 150, },
                {
                    headerName: "Phụ thu", field: 'totalPrice', renderCell: renderCellExpand, width: 150,
                    valueFormatter: params => `${params.row?.saleOrder?.totalPrice && params.row?.saleOrder?.totalPrice?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}đ`
                },
                {
                    headerName: "Thời gian nhận hàng", field: 'plannedTime', renderCell: renderCellExpand, width: 150,
                    valueFormatter: params => params?.row?.plannedTime ?
                        moment(params.row?.plannedTime).format("DD-MM-YYYY HH:mm:ss") : 'Chưa bắt đầu giao',
                },
                {
                    headerName: "Tình trạng", field: 'status', width: 150,
                    valueFormatter: params => params?.row?.status?.name,
                    renderCell: renderCellExpand,
                },
                {
                    headerName: "Công cụ", field: 'control',
                    renderCell: (params) => {
                        return (
                            <div className="d-flex justify-content-between align-items-center" style={{ cursor: "pointer" }}>
                                <EditToolbar
                                    params={params.row}
                                    setOpenEditFunc={props.setOpenEditFunc}
                                />
                            </div>
                        );
                    }
                }
            ])
        }
        function handleResize() {
            if (window.innerWidth <= 600) {
                setTable([
                    {
                        headerName: "Ngày tạo", field: 'createdAt',
                        valueFormatter: params => moment(params.row?.createdAt).format("DD-MM-YYYY HH:mm:ss"),
                        renderCell: renderCellExpand, width: 150,
                    },
                    {
                        headerName: "Ngày cập nhật", field: 'updatedAt', hide: true,
                        valueFormatter: params => moment(params.row?.updatedAt).format("DD-MM-YYYY HH:mm:ss"),
                        renderCell: renderCellExpand, width: 150,
                    },
                    {
                        headerName: "Tài xế", field: 'driver', valueFormatter: params => params.row?.driver === null ? 'Chưa có' : !params.row?.driver?.name, width: 150,
                        renderCell: renderCellExpand,
                    },
                    { headerName: "Phương thức giao hàng", field: 'typeShip', renderCell: renderCellExpand, width: 150, },
                    {
                        headerName: "Phụ thu", field: 'totalPrice', renderCell: renderCellExpand, width: 150,
                        valueFormatter: params => `${params.row?.saleOrder?.totalPrice && params.row?.saleOrder?.totalPrice?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}đ`
                    },
                    {
                        headerName: "Thời gian nhận hàng", field: 'plannedTime', renderCell: renderCellExpand, width: 150,
                        valueFormatter: params => params?.row?.plannedTime ?
                            moment(params.row?.plannedTime).format("DD-MM-YYYY HH:mm:ss") : 'Chưa bắt đầu giao',
                    },
                    {
                        headerName: "Tình trạng", field: 'status', width: 150,
                        valueFormatter: params => params?.row?.status?.name,
                        renderCell: renderCellExpand,
                    },
                    {
                        headerName: "Công cụ", field: 'control',
                        renderCell: (params) => {
                            return (
                                <div className="d-flex justify-content-between align-items-center" style={{ cursor: "pointer" }}>
                                    <EditToolbar
                                        params={params.row}
                                        setOpenEditFunc={props.setOpenEditFunc}
                                    />
                                </div>
                            );
                        }
                    }
                ])
            } else {
                setTable([
                    {
                        headerName: "Ngày tạo", field: 'createdAt',
                        valueFormatter: params => moment(params.row?.createdAt).format("DD-MM-YYYY HH:mm:ss"),
                        renderCell: renderCellExpand, width: 150,
                    },
                    {
                        headerName: "Ngày cập nhật", field: 'updatedAt', hide: true,
                        valueFormatter: params => moment(params.row?.updatedAt).format("DD-MM-YYYY HH:mm:ss"),
                        renderCell: renderCellExpand, width: 150,
                    },
                    {
                        headerName: "Tài xế", field: 'driver', valueFormatter: params => params.row?.driver === null ? 'Chưa có' : !params.row?.driver?.name, width: 150,
                        renderCell: renderCellExpand,
                    },
                    { headerName: "Phương thức giao hàng", field: 'typeShip', renderCell: renderCellExpand, width: 150, },
                    {
                        headerName: "Phụ thu", field: 'totalPrice', renderCell: renderCellExpand, width: 150,
                        valueFormatter: params => `${params.row?.saleOrder?.totalPrice && params.row?.saleOrder?.totalPrice?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}đ`
                    },
                    {
                        headerName: "Thời gian nhận hàng", field: 'plannedTime', renderCell: renderCellExpand, width: 150,
                        valueFormatter: params => params?.row?.plannedTime ?
                            moment(params.row?.plannedTime).format("DD-MM-YYYY HH:mm:ss") : 'Chưa bắt đầu giao',
                    },
                    {
                        headerName: "Tình trạng", field: 'status', width: 150,
                        valueFormatter: params => params?.row?.status?.name,
                        renderCell: renderCellExpand,
                    },
                    {
                        headerName: "Công cụ", field: 'control',
                        renderCell: (params) => {
                            return (
                                <div className="d-flex justify-content-between align-items-center" style={{ cursor: "pointer" }}>
                                    <EditToolbar
                                        params={params.row}
                                        setOpenEditFunc={props.setOpenEditFunc}
                                    />
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
                icon={faBiking}
                title="Tài Xế"
                color="pink"
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