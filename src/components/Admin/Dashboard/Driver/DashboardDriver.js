import { faBiking } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react'
import DashboardProductTable from './DashboardDriverTable'
import { EditToolbar } from '../Order/DashboardEditToolBar';
import GridCellExpand from '../Order/GridCellExpand';
import moment from 'moment';
export default function DashboardUser(props) {

    const [table, setTable] = useState([])

    useEffect(() => {
        if (window.innerWidth <= 600) {
            setTable([
                {
                    headerName: "Ngày tạo", field: 'createdAt', width: 200,
                    valueFormatter: params => moment(params.row?.createdAt).format("DD-MM-YYYY HH:mm:ss"),
                    renderCell: renderCellExpand
                },
                {
                    headerName: "Ngày cập nhật", field: 'updatedAt', hide: true,
                    valueFormatter: params => moment(params.row?.updatedAt).format("DD-MM-YYYY HH:mm:ss"),
                    renderCell: renderCellExpand, width: 200
                },
                { headerName: "Họ và tên", field: 'name', renderCell: renderCellExpand, width: 200, },
                { headerName: "Số điện thoại", field: 'phone', renderCell: renderCellExpand, width: 200, },
                { headerName: "Tuổi", field: 'age', renderCell: renderCellExpand, width: 200, },
                { headerName: "Chứng minh nhân dân", field: 'idenityCard', renderCell: renderCellExpand, width: 200, },
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
                    headerName: "Ngày tạo", field: 'createdAt', width: 200,
                    valueFormatter: params => moment(params.row?.createdAt).format("DD-MM-YYYY HH:mm:ss"),
                    renderCell: renderCellExpand
                },
                {
                    headerName: "Ngày cập nhật", field: 'updatedAt', hide: true,
                    valueFormatter: params => moment(params.row?.updatedAt).format("DD-MM-YYYY HH:mm:ss"),
                    renderCell: renderCellExpand, width: 200
                },
                { headerName: "Họ và tên", field: 'name', renderCell: renderCellExpand, width: 200, },
                { headerName: "Số điện thoại", field: 'phone', renderCell: renderCellExpand, width: 200, },
                { headerName: "Tuổi", field: 'age', renderCell: renderCellExpand, width: 200, },
                { headerName: "Chứng minh nhân dân", field: 'idenityCard', renderCell: renderCellExpand, width: 200, },
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
                        headerName: "Ngày tạo", field: 'createdAt', width: 200,
                        valueFormatter: params => moment(params.row?.createdAt).format("DD-MM-YYYY HH:mm:ss"),
                        renderCell: renderCellExpand, hide: true
                    },
                    {
                        headerName: "Ngày cập nhật", field: 'updatedAt', hide: true,
                        valueFormatter: params => moment(params.row?.updatedAt).format("DD-MM-YYYY HH:mm:ss"),
                        renderCell: renderCellExpand, width: 200, hide: true
                    },
                    { headerName: "Họ và tên", field: 'name', renderCell: renderCellExpand, width: 200, },
                    { headerName: "Số điện thoại", field: 'phone', renderCell: renderCellExpand, width: 200, },
                    { headerName: "Tuổi", field: 'age', renderCell: renderCellExpand, width: 200, },
                    { headerName: "Chứng minh nhân dân", field: 'idenityCard', renderCell: renderCellExpand, width: 200, },
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
                        headerName: "Ngày tạo", field: 'createdAt', width: 200,
                        valueFormatter: params => moment(params.row?.createdAt).format("DD-MM-YYYY HH:mm:ss"),
                        renderCell: renderCellExpand, hide: true
                    },
                    {
                        headerName: "Ngày cập nhật", field: 'updatedAt', hide: true,
                        valueFormatter: params => moment(params.row?.updatedAt).format("DD-MM-YYYY HH:mm:ss"),
                        renderCell: renderCellExpand, width: 200, hide: true
                    },
                    { headerName: "Họ và tên", field: 'name', renderCell: renderCellExpand, width: 200, },
                    { headerName: "Số điện thoại", field: 'phone', renderCell: renderCellExpand, width: 200, },
                    { headerName: "Tuổi", field: 'age', renderCell: renderCellExpand, width: 200, },
                    { headerName: "Chứng minh nhân dân", field: 'idenityCard', renderCell: renderCellExpand, width: 200, },
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