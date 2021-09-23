import { faUser } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react'
import DashboardProductTable from './DashboardUserTable'
import { EditToolbar } from '../Order/DashboardEditToolBar';
import GridCellExpand from '../Order/GridCellExpand';
import moment from 'moment';
import { getUserUpdate } from '../../../../features/dashboard/user/userSlice';
export default function DashboardUser(props) {

    const [table, setTable] = useState([])

    useEffect(() => {
        if (window.innerWidth <= 600) {
            setTable([
                {
                    headerName: "Ngày tạo", field: 'createdAt',
                    valueFormatter: params => moment(params.row?.createdAt).format("DD-MM-YYYY HH:mm:ss"),
                    renderCell: renderCellExpand
                },
                { headerName: "Số điện thoại", field: 'phone', renderCell: renderCellExpand },
                { headerName: "Mật khẩu", field: 'password', renderCell: renderCellExpand },
                { headerName: "Họ và tên", field: 'fullname', hide: true, renderCell: renderCellExpand },
                { headerName: "Email", field: 'email', renderCell: renderCellExpand },
                { headerName: "Quyền", field: 'role', renderCell: renderCellExpand },
                {
                    headerName: "Công cụ", field: 'control',
                    renderCell: (params) => {
                        return (
                            <div className="d-flex justify-content-between align-items-center" style={{ cursor: "pointer" }}>
                                <EditToolbar
                                    getItem={getUserUpdate}
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
                { headerName: "Họ và tên", field: 'fullname', renderCell: renderCellExpand, width: 200, },
                { headerName: "Số điện thoại", field: 'phone', renderCell: renderCellExpand, width: 200, },
                { headerName: "Mật khẩu", field: 'password', renderCell: renderCellExpand, width: 200, },
                { headerName: "Email", field: 'email', renderCell: renderCellExpand, width: 200, },
                { headerName: "Quyền", field: 'role', renderCell: renderCellExpand, width: 200, },
                {
                    headerName: "Công cụ", field: 'control',
                    renderCell: (params) => {
                        return (
                            <div className="d-flex justify-content-between align-items-center" style={{ cursor: "pointer" }}>
                                <EditToolbar
                                    getItem={getUserUpdate}
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
                        renderCell: renderCellExpand
                    },
                    { headerName: "Số điện thoại", field: 'phone', renderCell: renderCellExpand },
                    { headerName: "Mật khẩu", field: 'password', renderCell: renderCellExpand },
                    { headerName: "Họ và tên", field: 'fullname', hide: true, renderCell: renderCellExpand },
                    { headerName: "Email", field: 'email', renderCell: renderCellExpand },
                    { headerName: "Quyền", field: 'role', renderCell: renderCellExpand },
                    {
                        headerName: "Công cụ", field: 'control',
                        renderCell: (params) => {
                            return (
                                <div className="d-flex justify-content-between align-items-center" style={{ cursor: "pointer" }}>
                                    <EditToolbar
                                        getItem={getUserUpdate}
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
                        renderCell: renderCellExpand
                    },
                    { headerName: "Số điện thoại", field: 'phone', renderCell: renderCellExpand },
                    { headerName: "Mật khẩu", field: 'password', renderCell: renderCellExpand },
                    { headerName: "Họ và tên", field: 'fullname', hide: true, renderCell: renderCellExpand },
                    { headerName: "Email", field: 'email', renderCell: renderCellExpand },
                    { headerName: "Quyền", field: 'role', renderCell: renderCellExpand },
                    {
                        headerName: "Công cụ", field: 'control',
                        renderCell: (params) => {
                            return (
                                <div className="d-flex justify-content-between align-items-center" style={{ cursor: "pointer" }}>
                                    <EditToolbar
                                        getItem={getUserUpdate}
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
                icon={faUser}
                title="Tài khoản"
                color="lightgreen"
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