import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPencilAlt, faTimes, faEye } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
import { DataGrid, GridToolbar, GridOverlay } from '@mui/x-data-grid';
import { createTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import CustomPagination from './CustomPagination';


const defaultTheme = createTheme();
const useStyles = makeStyles(
    (theme) => ({
        root: {
            flexDirection: 'column',
            '& .ant-empty-img-1': {
                fill: theme.palette.type === 'light' ? '#aeb8c2' : '#262626',
            },
            '& .ant-empty-img-2': {
                fill: theme.palette.type === 'light' ? '#f5f5f7' : '#595959',
            },
            '& .ant-empty-img-3': {
                fill: theme.palette.type === 'light' ? '#dce0e6' : '#434343',
            },
            '& .ant-empty-img-4': {
                fill: theme.palette.type === 'light' ? '#fff' : '#1c1c1c',
            },
            '& .ant-empty-img-5': {
                fillOpacity: theme.palette.type === 'light' ? '0.8' : '0.08',
                fill: theme.palette.type === 'light' ? '#f5f5f5' : '#fff',
            },
        },
        label: {
            marginTop: theme.spacing(1),
        },
    }),
    { defaultTheme },
);

function CustomNoRowsOverlay() {
    const classes = useStyles();

    return (
        <GridOverlay className={classes.root}>
            <svg
                width="120"
                height="100"
                viewBox="0 0 184 152"
                aria-hidden
                focusable="false"
            >
                <g fill="none" fillRule="evenodd">
                    <g transform="translate(24 31.67)">
                        <ellipse
                            className="ant-empty-img-5"
                            cx="67.797"
                            cy="106.89"
                            rx="67.797"
                            ry="12.668"
                        />
                        <path
                            className="ant-empty-img-1"
                            d="M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"
                        />
                        <path
                            className="ant-empty-img-2"
                            d="M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"
                        />
                        <path
                            className="ant-empty-img-3"
                            d="M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"
                        />
                    </g>
                    <path
                        className="ant-empty-img-3"
                        d="M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"
                    />
                    <g className="ant-empty-img-4" transform="translate(149.65 15.383)">
                        <ellipse cx="20.654" cy="3.167" rx="2.849" ry="2.815" />
                        <path d="M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z" />
                    </g>
                </g>
            </svg>
            <div className={classes.label}>No Rows</div>
        </GridOverlay>
    );
}



export default function DashboardUserTable(props) {
    const [order, setOrder] = useState([
        {
            id: 1000000001,
            type: {
                id: 123,
                symbox: 'HL',
                name: 'Hàng lô'
            }, //HL : Hàng Lô, HL : Hàng Kiện  
            createdDate: Date.now(),
            createdBy: 'Admin',
            phone: '0901150222',
            customerName: 'Hoài Nhớ',
            customerType: {
                id: 123,
                symbox: 'KM',
                name: 'Khách mối'
            },// KVL : Khách vãng lai , KM : Khách mối
            driver: {
                id: 111,
                name: 'Thành Long',
                age: 22
            },
            productName: 'Thực phẩm',
            unit: {
                id: 1,
                symbox: 'KG',
                name: 'Kilogam'
            },
            quantity: 5,
            totalPrice: 60000,
            status: {
                id: 1,
                symbox: 'LK',
                name: 'Lưu Kho'
            }, //LK : Lưu Kho - DVC : Đang vận chuyển - DG : Đã giao
            note: 'Hàng khô, có mùi, tránh ẩm ướt',
        },
        {
            id: 1000000002,
            type: {
                id: 123,
                symbox: 'HK',
                name: 'Hàng Kiện'
            }, //HL : Hàng Lô, HK : Hàng Kiện  
            createdDate: Date.now(),
            createdBy: 'Admin',
            phone: '0912521560',
            customerName: 'GPT Group',
            customerType: {
                id: 123,
                symbox: 'KVL',
                name: 'Khách vãng lai'
            },// KVL : Khách vãng lai , KM : Khách mối
            driver: {
                id: 111,
                name: 'Thành Long',
                age: 22
            },
            productName: 'Điện thoại',
            unit: {
                id: 1,
                symbox: 'C',
                name: 'Cái'
            },
            quantity: 5, //5 items
            totalPrice: 250000,
            status: {
                id: 1,
                symbox: 'DVC',
                name: 'Đang vận chuyển'
            }, //LK : Lưu Kho - DVC : Đang vận chuyển - DG : Đã giao
            note: 'Hàng dễ vỡ, tránh ẩm ướt',
        }
    ])
    const [constOrder, setConstOrder] = useState([
        {
            id: 1000000001,
            type: {
                id: 123,
                symbox: 'HL',
                name: 'Hàng lô'
            }, //HL : Hàng Lô, HL : Hàng Kiện  
            createdDate: Date.now(),
            createdBy: 'Admin',
            phone: '0901150222',
            customerName: 'Hoài Nhớ',
            customerType: {
                id: 123,
                symbox: 'KM',
                name: 'Khách mối'
            },// KVL : Khách vãng lai , KM : Khách mối
            driver: {
                id: 111,
                name: 'Thành Long',
                age: 22
            },
            productName: 'Thực phẩm',
            unit: {
                id: 1,
                symbox: 'KG',
                name: 'Kilogam'
            },
            quantity: 5,
            totalPrice: 60000,
            status: {
                id: 1,
                symbox: 'LK',
                name: 'Lưu Kho'
            }, //LK : Lưu Kho - DVC : Đang vận chuyển - DG : Đã giao
            note: 'Hàng khô, có mùi, tránh ẩm ướt',
        },
        {
            id: 1000000002,
            type: {
                id: 123,
                symbox: 'HK',
                name: 'Hàng Kiện'
            }, //HL : Hàng Lô, HK : Hàng Kiện  
            createdDate: Date.now(),
            createdBy: 'Admin',
            phone: '0912521560',
            customerName: 'GPT Group',
            customerType: {
                id: 123,
                symbox: 'KVL',
                name: 'Khách vãng lai'
            },// KVL : Khách vãng lai , KM : Khách mối
            driver: {
                id: 111,
                name: 'Thành Long',
                age: 22
            },
            productName: 'Điện thoại',
            unit: {
                id: 1,
                symbox: 'C',
                name: 'Cái'
            },
            quantity: 5, //5 items
            totalPrice: 250000,
            status: {
                id: 1,
                symbox: 'DVC',
                name: 'Đang vận chuyển'
            }, //LK : Lưu Kho - DVC : Đang vận chuyển - DG : Đã giao
            note: 'Hàng dễ vỡ, tránh ẩm ướt',
        }
    ])
    const [selection, setSelection] = useState()


    const deleteOnClick = () => {
        console.log({ selection });
    }

    const searchOnSubmit = (event) => {
        event.preventDefault()
    }
    const searchOnChange = (event) => {
        const searchInput = event.target.value
        const search = []
        for (let i in constOrder) {
            if ((constOrder[i].orderName).toLowerCase().includes(searchInput)) {
                search.push(constOrder[i])
            }
            else if ((constOrder[i].orderId).toString().includes((searchInput))) {
                search.push(constOrder[i])
            }
        }
        setOrder(search)
    }


    return (
        <div className="topfive flex-col" style={{ width: '100%' }}>
            <div className={`headerbox flex-center ${props.color}`}>
                <FontAwesomeIcon icon={props.icon} className="icon" />
            </div>
            <div className="top-location-container">
                <div className="headerbox-header">
                    <p>{props.title}</p>
                </div>
                <div className="topfive-content flex-col">
                    <div className="dashboard-addnew flex">
                        <div>
                            <div className="dashboard-addnew-btn btn btn-outline-success mr-5"
                                onClick={props.setOpenCreateFunc}
                            >Thêm</div>
                            <div className="dashboard-addnew-btn btn btn-outline-danger"
                                onClick={() => deleteOnClick()}
                            >Xóa</div>
                        </div>
                        <div className="dashboard-addnew-search">
                            <form
                                onSubmit={searchOnSubmit}
                            >
                                <input type="text" placeholder="Search records"
                                    onChange={searchOnChange}
                                ></input>
                            </form>
                        </div>
                    </div>
                    <div style={{ height: 400, width: "100%" }}>
                        <DataGrid
                            components={{
                                Toolbar: GridToolbar,
                                Pagination: CustomPagination,
                                NoRowsOverlay: CustomNoRowsOverlay,
                            }}
                            columns={props.table}
                            rows={order}
                            pagination
                            pageSize={5}
                            rowsPerPageOptions={[5]}
                            onSelectionModelChange={(newSelectionModel) => {
                                console.log({ idDelete: newSelectionModel })
                            }}
                            checkboxSelection
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}