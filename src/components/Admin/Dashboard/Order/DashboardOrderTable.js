import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import CustomPagination from './CustomPagination';
import CustomNoRowsOverlay from './CustomNoRowsOverlay';



export default function DashboardOrderTable(props) {
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