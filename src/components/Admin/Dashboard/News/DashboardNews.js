import { faNewspaper } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react'
import DashboardProductTable from './DashboardNewsTable'
import { EditToolbar } from '../Order/DashboardEditToolBar';
import GridCellExpand from '../Order/GridCellExpand';
import moment from 'moment';
import { getNewsUpdate } from '../../../../features/dashboard/news/newsSlice.js';
export default function DashboardNews(props) {

    const [table, setTable] = useState([])

    useEffect(() => {
        if (window.innerWidth <= 600) {
            setTable([
                {
                    headerName: "Ngày tạo", field: 'createdAt',
                    valueFormatter: params => moment(params.row?.createdAt).format("DD-MM-YYYY HH:mm:ss"),
                    renderCell: renderCellExpand, width: 200
                },
                {
                    headerName: "Ngày Cập nhật", field: 'updatedAt', hide: true,
                    valueFormatter: params => params?.row?.updatedAt ? moment(params.row?.updatedAt).format("DD-MM-YYYY HH:mm:ss") : 'Chưa cập nhật',
                    renderCell: renderCellExpand, width: 200
                },
                { headerName: "Tên Công Việc", field: 'nameJob', renderCell: renderCellExpand, width: 200 },
                {
                    headerName: "Mức Lương", field: 'salary',
                    valueFormatter: params =>
                        `
                    ${params?.row?.salaryBefore?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}đ - 
                    ${params?.row?.salaryAfter?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}đ
                    `,
                    renderCell: renderCellExpand, width: 200
                },
                { headerName: "Địa Chỉ", field: 'address', renderCell: renderCellExpand, width: 200 },
                { headerName: "Trình Độ", field: 'degree', renderCell: renderCellExpand, width: 100 },
                { headerName: "Ví trí tuyển dụng", field: 'position', renderCell: renderCellExpand, width: 200 },
                { headerName: "Số lượng", field: 'quantity', renderCell: renderCellExpand, width: 100 },
                { headerName: "Yêu cầu kỹ năng", field: 'require', renderCell: renderCellExpand, width: 200 },
                { headerName: "Mô tả", field: 'thumbnails', renderCell: renderCellExpand, width: 200 },
                {
                    headerName: "Công cụ", field: 'control',
                    renderCell: (params) => {
                        return (
                            <div className="d-flex justify-content-between align-items-center" style={{ cursor: "pointer" }}>
                                <EditToolbar
                                    getItem={getNewsUpdate}
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
                    renderCell: renderCellExpand, width: 200
                },
                {
                    headerName: "Ngày Cập nhật", field: 'updatedAt', hide: true,
                    valueFormatter: params => params?.row?.updatedAt ? moment(params.row?.updatedAt).format("DD-MM-YYYY HH:mm:ss") : 'Chưa cập nhật',
                    renderCell: renderCellExpand, width: 200
                },
                { headerName: "Tên Công Việc", field: 'nameJob', renderCell: renderCellExpand, width: 200 },
                {
                    headerName: "Mức Lương", field: 'salary',
                    valueFormatter: params =>
                        `
                    ${params?.row?.salaryBefore?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}đ - 
                    ${params?.row?.salaryAfter?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}đ
                    `,
                    renderCell: renderCellExpand, width: 200
                },
                { headerName: "Địa Chỉ", field: 'address', renderCell: renderCellExpand, width: 200 },
                { headerName: "Trình Độ", field: 'degree', renderCell: renderCellExpand, width: 100 },
                { headerName: "Ví trí tuyển dụng", field: 'position', renderCell: renderCellExpand, width: 200 },
                { headerName: "Số lượng", field: 'quantity', renderCell: renderCellExpand, width: 100 },
                { headerName: "Yêu cầu kỹ năng", field: 'require', renderCell: renderCellExpand, width: 200 },
                { headerName: "Mô tả", field: 'thumbnails', renderCell: renderCellExpand, width: 200 },
                {
                    headerName: "Công cụ", field: 'control',
                    renderCell: (params) => {
                        return (
                            <div className="d-flex justify-content-between align-items-center" style={{ cursor: "pointer" }}>
                                <EditToolbar
                                    getItem={getNewsUpdate}
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
                        renderCell: renderCellExpand, width: 200
                    },
                    {
                        headerName: "Ngày Cập nhật", field: 'updatedAt', hide: true,
                        valueFormatter: params => params?.row?.updatedAt ? moment(params.row?.updatedAt).format("DD-MM-YYYY HH:mm:ss") : 'Chưa cập nhật',
                        renderCell: renderCellExpand, width: 200
                    },
                    { headerName: "Tên Công Việc", field: 'nameJob', renderCell: renderCellExpand, width: 200 },
                    {
                        headerName: "Mức Lương", field: 'salary',
                        valueFormatter: params =>
                            `
                    ${params?.row?.salaryBefore?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}đ - 
                    ${params?.row?.salaryAfter?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}đ
                    `,
                        renderCell: renderCellExpand, width: 200
                    },
                    { headerName: "Địa Chỉ", field: 'address', renderCell: renderCellExpand, width: 200 },
                    { headerName: "Trình Độ", field: 'degree', renderCell: renderCellExpand, width: 100 },
                    { headerName: "Ví trí tuyển dụng", field: 'position', renderCell: renderCellExpand, width: 200 },
                    { headerName: "Số lượng", field: 'quantity', renderCell: renderCellExpand, width: 100 },
                    { headerName: "Yêu cầu kỹ năng", field: 'require', renderCell: renderCellExpand, width: 200 },
                    { headerName: "Mô tả", field: 'thumbnails', renderCell: renderCellExpand, width: 200 },
                    {
                        headerName: "Công cụ", field: 'control',
                        renderCell: (params) => {
                            return (
                                <div className="d-flex justify-content-between align-items-center" style={{ cursor: "pointer" }}>
                                    <EditToolbar
                                        getItem={getNewsUpdate}
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
                        renderCell: renderCellExpand, width: 200
                    },
                    {
                        headerName: "Ngày Cập nhật", field: 'updatedAt', hide: true,
                        valueFormatter: params => params?.row?.updatedAt ? moment(params.row?.updatedAt).format("DD-MM-YYYY HH:mm:ss") : 'Chưa cập nhật',
                        renderCell: renderCellExpand, width: 200
                    },
                    { headerName: "Tên Công Việc", field: 'nameJob', renderCell: renderCellExpand, width: 200 },
                    {
                        headerName: "Mức Lương", field: 'salary',
                        valueFormatter: params =>
                            `
                    ${params?.row?.salaryBefore?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}đ - 
                    ${params?.row?.salaryAfter?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}đ
                    `,
                        renderCell: renderCellExpand, width: 200
                    },
                    { headerName: "Địa Chỉ", field: 'address', renderCell: renderCellExpand, width: 200 },
                    { headerName: "Trình Độ", field: 'degree', renderCell: renderCellExpand, width: 100 },
                    { headerName: "Ví trí tuyển dụng", field: 'position', renderCell: renderCellExpand, width: 200 },
                    { headerName: "Số lượng", field: 'quantity', renderCell: renderCellExpand, width: 100 },
                    { headerName: "Yêu cầu kỹ năng", field: 'require', renderCell: renderCellExpand, width: 200 },
                    { headerName: "Mô tả", field: 'thumbnails', renderCell: renderCellExpand, width: 200 },
                    {
                        headerName: "Công cụ", field: 'control',
                        renderCell: (params) => {
                            return (
                                <div className="d-flex justify-content-between align-items-center" style={{ cursor: "pointer" }}>
                                    <EditToolbar
                                        getItem={getNewsUpdate}
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
                icon={faNewspaper}
                title="Tin Tuyển Dụng"
                color="darkblue"
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