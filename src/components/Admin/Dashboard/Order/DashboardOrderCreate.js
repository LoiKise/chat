import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import CustomPagination from './CustomPagination';
import CustomNoRowsOverlay from './CustomNoRowsOverlay';
import MaterialTable from 'material-table';

export default function DashboardOrderCreate(props) {

    const createForm = useRef();

    const [province, setProvince] = useState([ //Tỉnh / Thành Phố
        {
            id: 111,
            name: 'Cà Mau',
        },
        {
            id: 222,
            name: 'Hồ Chí Minh'
        }
    ])
    const [district, setDistrict] = useState([ //Quận / Huyện
        {
            id: 1,
            name: 'Bình Thạnh',
            idProvince: 222,
        },
        {
            id: 2,
            name: 'Trần Văn Thời',
            idProvince: 111,

        },
        {
            id: 3,
            name: 'Năm Căn',
            idProvince: 111,

        }
    ])

    const [customer, setCustomer] = useState({
        name: '',
        phone: '',
        address: '',
        district: null,
        province: '',
    })
    const [reciever, setReciever] = useState({
        name: '',
        phone: '',
        address: '',
        district: null,
        province: null,
    })

    const [orderDistrict, setOrderDistrict] = useState("")

    const [orderProvince, setOrderProvince] = useState("")
    const [customerProvinceName, setCustomerProvinceName] = useState("")
    const [recieverProvinceName, setRecieverProvinceName] = useState("")

    const [orderPaymentMethod, setOrderPaymentMethod] = useState("")

    const [table, setTable] = useState([])
    const [productList, setProductList] = useState([])
    useEffect(() => {
        if (window.innerWidth <= 600) {
            setTable([
                { title: "STT", field: 'id', },
                {
                    title: "Phân loại", field: 'customerType',
                },
                { title: "Sản Phẩm", field: 'productName' },
                {
                    title: "Loại Hàng", field: 'type',
                },
                { title: "Số lượng", field: 'quantity' },
                {
                    title: "Đơn vị", field: 'unit',
                },
                { title: "Ghi chú", field: 'note' },

            ])
        } else {
            setTable([
                { title: "STT", field: 'id', },
                {
                    title: "Phân loại", field: 'customerType',
                },
                { title: "Sản Phẩm", field: 'productName' },
                {
                    title: "Loại Hàng", field: 'type',
                },
                { title: "Số lượng", field: 'quantity' },
                {
                    title: "Đơn vị", field: 'unit',
                },
                { title: "Ghi chú", field: 'note' },

            ])
        }
        function handleResize() {
            if (window.innerWidth <= 600) {
                setTable([
                    { title: "STT", field: 'id', },
                    {
                        title: "Phân loại", field: 'customerType',
                    },
                    { title: "Sản Phẩm", field: 'productName' },
                    {
                        title: "Loại Hàng", field: 'type',
                    },
                    { title: "Số lượng", field: 'quantity' },
                    {
                        title: "Đơn vị", field: 'unit',
                    },
                    { title: "Ghi chú", field: 'note' },

                ])
            } else {
                setTable([
                    { title: "STT", field: 'id', },
                    {
                        title: "Phân loại", field: 'customerType',
                    },
                    { title: "Sản Phẩm", field: 'productName' },
                    {
                        title: "Loại Hàng", field: 'type',
                    },
                    { title: "Số lượng", field: 'quantity' },
                    {
                        title: "Đơn vị", field: 'unit',
                    },
                    { title: "Ghi chú", field: 'note' },

                ])
            }
        }
        window.addEventListener("resize", handleResize);
        return (() => {
            window.removeEventListener("resize", handleResize);
        })
    }, [])

    useEffect(() => {
        console.log({ customer });
    }, [customer])

    const onSubmit = (event) => {
        event.preventDefault()
    }

    const [driverList, setDriverList] = useState([
        {
            id: 1,
            name: 'Thành Long',
        },
        {
            id: 2,
            name: 'Hoài Nhớ',
        },
    ])

    const [unitList, setUnitList] = useState([
        {
            id: 1,
            name: 'Kilogam',
            symbox: 'KG'
        },
        {
            id: 1,
            name: 'Gam',
            symbox: 'G'
        },
        {
            id: 1,
            name: 'Cái',
            symbox: 'C'
        },
        {
            id: 1,
            name: 'Thùng',
            symbox: 'T'
        },
    ])
    const [data, setData] = useState({
        driverId: null,
        orderName: '',
        unitId: null,
        quantity: null,
        totalPrice: null,
    })

    return (
        <div className="DashboardProductInfo">
            <div className="create-box">
                <div className="create-box-title flex">
                    <h2 className="create-box-title-text ">
                        Thông tin đơn hàng
                    </h2>
                    <div
                        className="btn btn-outline-danger"
                        onClick={() => {
                            props.setCloseCreateFunc(false);
                        }}
                    >
                        <FontAwesomeIcon icon={faTimes} />
                    </div>
                </div>
                <form onSubmit={onSubmit} encType="multipart/form-data" ref={createForm}>
                    {/* Sender Infomation */}
                    <div className="create-box-row flex">
                        <div className="dashboard-left flex">Khách hàng gửi</div>
                        <div className="dashboard-right">
                            <input
                                type="text" name="name"
                                value={customer?.name || ""}
                                onChange={(event) => {
                                    setCustomer({ ...customer, name: event.target.value })
                                }}
                                required
                            ></input>
                        </div>
                    </div>
                    <div className="create-box-row flex">
                        <div className="dashboard-left flex">Số điện thoại</div>
                        <div className="dashboard-right">
                            <input
                                type="text" name="phone"
                                value={customer?.phone || ""}
                                onChange={(event) => {
                                    setCustomer({ ...customer, phone: event.target.value })
                                }} required
                            ></input>
                        </div>
                    </div>
                    <div className="create-box-row flex">
                        <div className="dashboard-left flex">Địa chỉ cụ thể</div>
                        <div className="dashboard-right">
                            <input
                                type="text" name="address"
                                value={customer?.address || ""}
                                onChange={(event) => {
                                    setCustomer({ ...customer, address: event.target.value })
                                }} required
                            ></input>
                        </div>
                    </div>
                    <div className="create-box-row flex">
                        <div className="dashboard-left flex">Tỉnh/Thành Phố</div>
                        <div className="dashboard-right">
                            <select
                                className="input"
                                value={customer?.province || ""}
                                onChange={(event) => {
                                    setCustomer({ ...customer, province: event.target.value })
                                    setCustomerProvinceName(province[event.target.selectedIndex - 1].name)
                                    //province: province[event.target.selectedIndex - 1].name
                                }}
                            >
                                <option disabled selected value>Chọn tỉnh/thành phố</option>
                                {province.map((item, index) => {
                                    return (
                                        <option
                                            key={index}
                                            value={item.id}
                                        >{item.name}</option>
                                    )
                                })}
                            </select>
                        </div>
                    </div>
                    <div className="create-box-row flex">
                        <div className="dashboard-left flex">Quận/Huyện</div>
                        <div className="dashboard-right">
                            <select
                                className="input"
                                value={customer.district || ""}
                                onChange={(event) => {
                                    setCustomer({ ...customer, district: event.target.value })
                                }}
                            >
                                <option disabled selected value>Chọn quận/huyện</option>
                                {district.filter(el => el.idProvince.toString() === customer.province).map((item, index) => {
                                    return (
                                        <option
                                            key={index}
                                            value={item.name}
                                        >{item.name}</option>
                                    )
                                })}
                            </select>
                        </div>
                    </div>

                    {/* Reciever Infomation */}

                    <div className="create-box-row flex">
                        <div className="dashboard-left flex">Khách hàng nhận</div>
                        <div className="dashboard-right">
                            <input
                                type="text" name="name"
                                value={reciever?.name || ""}
                                onChange={(event) => {
                                    setReciever({ ...reciever, name: event.target.value })
                                }}
                                required
                            ></input>
                        </div>
                    </div>
                    <div className="create-box-row flex">
                        <div className="dashboard-left flex">Số điện thoại</div>
                        <div className="dashboard-right">
                            <input
                                type="text" name="phone"
                                value={reciever?.phone || ""}
                                onChange={(event) => {
                                    setReciever({ ...reciever, phone: event.target.value })
                                }} required
                            ></input>
                        </div>
                    </div>
                    <div className="create-box-row flex">
                        <div className="dashboard-left flex">Địa chỉ cụ thể</div>
                        <div className="dashboard-right">
                            <input
                                type="text" name="address"
                                value={reciever?.address || ""}
                                onChange={(event) => {
                                    setReciever({ ...reciever, address: event.target.value })
                                }} required
                            ></input>
                        </div>
                    </div>
                    <div className="create-box-row flex">
                        <div className="dashboard-left flex">Tỉnh/Thành Phố</div>
                        <div className="dashboard-right">
                            <select
                                className="input"
                                value={reciever.province}
                                onChange={(event) => {
                                    setRecieverProvinceName(event.target.selectedIndex)
                                    setReciever({ ...reciever, province: event.target.value })
                                }}
                            >
                                <option disabled selected value>Chọn tỉnh/thành phố</option>
                                {province.map((item, index) => {
                                    return (
                                        <option
                                            key={index}
                                            value={item.name}
                                        >{item.name}</option>
                                    )
                                })}
                            </select>
                        </div>
                    </div>
                    <div className="create-box-row flex">
                        <div className="dashboard-left flex">Quận/Huyện</div>
                        <div className="dashboard-right">
                            <select
                                className="input"
                                value={reciever.district}
                                onChange={(event) => {
                                    setReciever({ ...reciever, district: event.target.value })
                                }}
                            >
                                <option disabled selected value>Chọn quận/huyện</option>
                                {district.map((item, index) => {
                                    if (index === recieverProvinceName) {
                                        return (
                                            <option
                                                key={index}
                                                value={item.name}
                                            >{item.name}</option>
                                        )
                                    }
                                    return null
                                })}
                            </select>
                        </div>
                    </div>

                    {/* Order Details Infomation */}
                    <div className="create-box-row flex">
                        <div className="dashboard-left flex">Tài xế</div>
                        <div className="dashboard-right">
                            <select
                                className="input"
                                value={data.driverId}
                                onChange={(event) => {
                                    setData({ ...data, driverId: event.target.value })
                                }}
                            >
                                <option disabled selected value>Chọn tài xế</option>
                                {driverList.map((item, index) => {
                                    return (
                                        <option
                                            key={index}
                                            value={item.name}
                                        >{item.name}</option>
                                    )
                                })}
                            </select>
                        </div>
                    </div>
                    <div className="create-box-row flex">
                        <div className="dashboard-left flex">Đơn vị tính</div>
                        <div className="dashboard-right">
                            <select
                                className="input"
                                value={data.unitId}
                                onChange={(event) => {
                                    setData({ ...data, unitId: event.target.value })
                                }}
                            >
                                <option disabled selected value>Chọn đơn vị tính</option>
                                {unitList.map((item, index) => {
                                    return (
                                        <option
                                            key={index}
                                            value={item.name}
                                        >{item.name}</option>
                                    )
                                })}
                            </select>
                        </div>
                    </div>
                    <div className="create-box-row flex">
                        <div className="dashboard-left flex">Thành tiền</div>
                        <div className="dashboard-right">
                            <input
                                type="text" name="totalPrice"
                                value={data?.totalPrice || ""}
                                onChange={(event) => {
                                    setData({ ...data, totalPrice: event.target.value })
                                }}
                                required
                            ></input>
                        </div>
                    </div>

                    <div className="create-box-row flex">
                        <div className="dashboard-left flex">Phương thức thanh toán</div>
                        <div className="dashboard-right">
                            <select
                                className="input"
                                type="text"
                                value={orderPaymentMethod || ""}
                                onChange={(event) => {
                                    setOrderPaymentMethod(event.target.value)
                                }} required
                            >
                                <option></option>
                                <option value="cash on delivery">Ship COD</option>
                                <option value="direct back transfer">Chuyển khoản</option>
                                <option value="paypal">Thanh toán Paypal</option>
                            </select>
                        </div>
                    </div>

                    <MaterialTable
                        title="Danh sách hàng hóa"
                        data={productList}
                        columns={table}
                        options={{
                            search: true,
                            selection: true,
                            actionsColumnIndex: -1,
                            addRowPosition: "first",
                            exportButton: true,
                        }}
                        localization={{
                            pagination: {
                                labelDisplayedRows: '{from}-{to} trong {count}',
                                labelRowsSelect: 'sản phẩm',
                                previousTooltip: 'Trang trước',
                                firstTooltip: 'Trang đầu',
                                nextTooltip: 'Trang kế',
                                lastTooltip: 'Trang cuối'
                            },
                            toolbar: {
                                nRowsSelected: '{0} hàng đang được chọn',
                                exportTitle: 'Tải xuống',
                                searchTooltip: 'Tìm kiếm'
                            },
                            header: {
                                actions: 'Tùy chỉnh'
                            },
                            body: {
                                emptyDataSourceMessage: 'Chưa có sản phẩm',
                                filterRow: {
                                    filterTooltip: 'Lọc'
                                },
                                addTooltip: 'Thêm',
                                editTooltip: 'Sửa',
                                deleteTooltip: 'Xóa',
                            }
                        }}
                        actions={[
                            rowData => ({
                                icon: 'delete',
                                tooltip: 'Xóa tất cả lựa chọn',
                                onClick: (event, rowData) => alert(" " + rowData.name),
                                disabled: rowData.birthYear < 2000
                            })
                        ]}
                        editable={{
                            onRowAdd: (newRow) => new Promise((resolve, reject) => {
                                const updatedRows = [...productList, { id: Math.floor(Math.random() * 100), ...newRow }]
                                setTimeout(() => {
                                    setProductList(updatedRows)
                                    resolve()
                                }, 2000)
                            }),
                            onRowDelete: selectedRow => new Promise((resolve, reject) => {
                                const index = selectedRow.tableData.id;
                                const updatedRows = [...productList]
                                updatedRows.splice(index, 1)
                                setTimeout(() => {
                                    setProductList(updatedRows)
                                    resolve()
                                }, 2000)
                            }),
                            onRowUpdate: (updatedRow, oldRow) => new Promise((resolve, reject) => {
                                const index = oldRow.tableData.id;
                                const updatedRows = [...productList]
                                updatedRows[index] = updatedRow
                                setTimeout(() => {
                                    setProductList(updatedRows)
                                    resolve()
                                }, 2000)
                            })
                        }}
                    />
                    <div className="flex-center" style={{ marginTop: '40px' }}>
                        <button className="create-box-btn btn btn-outline-success">
                            Tạo đơn hàng
                        </button>
                    </div>


                </form>
            </div>
        </div >
    )
}