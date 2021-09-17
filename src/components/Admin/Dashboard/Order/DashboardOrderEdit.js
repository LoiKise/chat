import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import MaterialTable from 'material-table';
import { useSnackbar } from 'notistack';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
export default function DashboardOrderCreate(props) {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
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
        customerName: '',
        customerPhone: '',
        customerAddress: '',
        customerDistrict: '',
        customerProvince: null,
        customerProvinceName: '',
    })
    const [reciever, setReciever] = useState({
        recieverName: '',
        recieverPhone: '',
        recieverAddress: '',
        recieverDistrict: '',
        recieverProvince: null,
        recieverProvinceName: '',
    })
    const [unitList, setUnitList] = useState([
        {
            id: 1111,
            name: 'Kilogam',
            symbox: 'KG'
        },
        {
            id: 2222,
            name: 'Gam',
            symbox: 'G'
        },
        {
            id: 3333,
            name: 'Cái',
            symbox: 'C'
        },
        {
            id: 4444,
            name: 'Thùng',
            symbox: 'T'
        },
    ])
    const [table, setTable] = useState([])
    const [productList, setProductList] = useState([])

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


    const [orderType, setOrderType] = useState([
        {
            id: 1,
            name: 'Hàng lô',
            symbox: 'HL'
        },
        {
            id: 1,
            name: 'Hàng kiện',
            symbox: 'HK'
        }
    ])
    const [data, setData] = useState({
        orderName: '',
        orderType: null,
        unit: null,
        quantity: null,
        totalPrice: null,
        note: "",
        paymentMethod: "",
        driver: null,
    })

    //Custom Selection
    const [sltProvinceCustomer, setSltProvinceCustomer] = useState(false);
    const [sltDistrictCustomer, setSltDistrictCustomer] = useState(false);
    const [sltProvinceReciever, setSltProvinceReciever] = useState(false);
    const [sltDistrictReciever, setSltDistrictReciever] = useState(false);
    const [sltOrderType, setSltOrderType] = useState(false);
    const [sltDriver, setSltDriver] = useState(false);
    const [sltUnit, setSltUnit] = useState(false);
    const [sltPayment, setSltPayment] = useState(false);


    const handleClose = () => {
        setSltProvinceCustomer(false);
        setSltDistrictCustomer(false);
        setSltProvinceReciever(false);
        setSltDistrictReciever(false);
        setSltDriver(false);
        setSltOrderType(false);
        setSltUnit(false);
        setSltPayment(false);
    };

    const handleOpenSltProvinceCustomer = () => {
        setSltProvinceCustomer(true);
    };
    const handleOpenSltDistrictCustomer = () => {
        setSltDistrictCustomer(true);
    };
    const handleOpenSltProvinceReciever = () => {
        setSltProvinceReciever(true);
    };
    const handleOpenSltDistrictReciever = () => {
        setSltDistrictReciever(true);
    };
    const handleOpenSltDriver = () => {
        setSltDriver(true);
    };
    const handleOpenSltOrderType = () => {
        setSltOrderType(true);
    };
    const handleOpenSltUnit = () => {
        setSltUnit(true);
    };
    const handleOpenSltPayment = () => {
        setSltPayment(true);
    };

    //Handle Event and Request DataBase

    useEffect(() => {
        setTable([
            { title: "STT", field: 'id', },
            { title: "Sản Phẩm", field: 'productName' },
            { title: "Số lượng", field: 'quantity' },
            {
                title: "Đơn vị", field: 'unit',
                lookup: unitList.reduce((item, cur, i) => {
                    item[cur.id] = cur.name;
                    return item;
                }, {}) // { 1: 'KG', 2: 'Cái', 3: 'Thùng' }

            },

        ])
    }, [])

    const onSubmit = (event) => {
        event.preventDefault()
        let dataFormat = { ...data, ...customer, ...reciever, productList }

        if (dataFormat.customerDistrict.length <= 0 || dataFormat.recieverDistrict.length <= 0) {
            enqueueSnackbar('Quận/Huyện không được bỏ trống', {
                persist: false,
                variant: 'warning',
                preventDuplicate: true,
                autoHideDuration: 3000,
            })
        } else if (productList.length <= 0) {
            enqueueSnackbar('Hàng hóa không được bỏ trống', {
                persist: false,
                variant: 'error',
                preventDuplicate: true,
                autoHideDuration: 3000,
            })
        } else {
            // let customerAddressfull = dataFormat.customerAddress + dataFormat.customerDistrict + dataFormat.customerProvinceName
            dataFormat.customerAddress = dataFormat.customerAddress + ', ' + dataFormat.customerDistrict + ', ' + dataFormat.customerProvinceName
            dataFormat.recieverAddress = dataFormat.recieverAddress + ', ' + dataFormat.recieverDistrict + ', ' + dataFormat.recieverProvinceName
            console.log({ dataFormat });

            enqueueSnackbar('Cập nhật đơn hàng thành công', {
                persist: false,
                variant: 'success',
                preventDuplicate: true,
                autoHideDuration: 3000,
            })
        }
    }

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
                            props.setCloseEditFunc(false);
                        }}
                    >
                        <FontAwesomeIcon icon={faTimes} />
                    </div>
                </div>
                <form onSubmit={onSubmit} encType="multipart/form-data" ref={createForm}>
                    {/* Sender Infomation */}
                    <div className="create-box-row flex">
                        <div className="dashboard-left flex">Khách hàng gửi <span style={{ color: "red" }}>*</span></div>
                        <div className="dashboard-right--input">
                            <TextField
                                id="outlined-totalPrice"
                                label="Họ và tên người giao hàng"
                                variant="outlined"
                                color="primary"
                                value={customer?.customerName || ""}
                                onChange={(event) => {
                                    setCustomer({ ...customer, customerName: event.target.value })
                                }}
                                required
                            />
                        </div>
                    </div>
                    <div className="create-box-row flex">
                        <div className="dashboard-left flex">Số điện thoại ( Người giao hàng ) <span style={{ color: "red" }}>*</span></div>
                        <div className="dashboard-right--input">
                            <TextField
                                id="outlined-totalPrice"
                                label="Số điện thoại người giao hàng"
                                variant="outlined"
                                color="primary"
                                value={customer?.customerPhone || ""}
                                onChange={(event) => {
                                    setCustomer({ ...customer, customerPhone: event.target.value })
                                }} required
                            />
                        </div>
                    </div>
                    <div className="create-box-row flex">
                        <div className="dashboard-left flex">Địa chỉ cụ thể ( Người giao hàng ) <span style={{ color: "red" }}>*</span> </div>
                        <div className="dashboard-right--input">
                            <TextField
                                id="outlined-totalPrice"
                                label="Địa chỉ cụ thể người giao hàng"
                                variant="outlined"
                                color="primary"
                                value={customer?.customerAddress || ""}
                                onChange={(event) => {
                                    setCustomer({ ...customer, customerAddress: event.target.value })
                                }} required
                            />
                        </div>
                    </div>
                    <div className="create-box-row flex">
                        <div className="dashboard-left flex">Tỉnh/Thành Phố ( Người giao hàng ) <span style={{ color: "red" }}>*</span></div>
                        <div className="dashboard-right">
                            <Select
                                labelId="demo-controlled-open-select-label"
                                id="demo-controlled-open-select"
                                open={sltProvinceCustomer}
                                onClose={handleClose}
                                onOpen={handleOpenSltProvinceCustomer}
                                value={customer.customerProvince}
                                onChange={(event, params) => {
                                    setCustomer({
                                        ...customer,
                                        customerProvince: params?.props?.value,
                                        customerProvinceName: params?.props?.name
                                    })
                                }}
                            >
                                <MenuItem value="">
                                    <em style={{ borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>Chọn tỉnh/thành phố :</em>
                                </MenuItem>
                                {province.map((item, index) => {
                                    return <MenuItem key={index} value={item.id} name={item.name}>{item.name}</MenuItem>
                                })}
                            </Select>
                        </div>
                    </div>
                    <div className="create-box-row flex">
                        <div className="dashboard-left flex">Quận/Huyện ( Người giao hàng ) <span style={{ color: "red" }}>*</span></div>
                        <div className="dashboard-right">
                            <Select
                                labelId="demo-controlled-open-select-label"
                                id="demo-controlled-open-select"
                                open={sltDistrictCustomer}
                                onClose={handleClose}
                                onOpen={handleOpenSltDistrictCustomer}
                                value={customer.customerDistrict || ""}
                                onChange={(event) => {
                                    setCustomer({ ...customer, customerDistrict: event.target.value })
                                }}

                            >
                                <MenuItem value="">
                                    <em style={{ borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>Chọn tỉnh/thành phố :</em>
                                </MenuItem>
                                {district.filter(el => el.idProvince === customer.customerProvince).map((item, index) => {
                                    return <MenuItem key={index} value={item.name}>{item.name}</MenuItem>
                                })}
                            </Select>
                        </div>
                    </div>

                    {/* Reciever Infomation */}

                    <div className="create-box-row flex">
                        <div className="dashboard-left flex">Khách hàng nhận <span style={{ color: "red" }}>*</span></div>
                        <div className="dashboard-right--input">
                            <TextField
                                id="outlined-totalPrice"
                                label="Họ và tên người nhận hàng"
                                variant="outlined"
                                color="primary"
                                value={reciever?.recieverName || ""}
                                onChange={(event) => {
                                    setReciever({ ...reciever, recieverName: event.target.value })
                                }}
                                required
                            />
                        </div>
                    </div>
                    <div className="create-box-row flex">
                        <div className="dashboard-left flex">Số điện thoại ( Người nhận hàng ) <span style={{ color: "red" }}>*</span></div>
                        <div className="dashboard-right--input">
                            <TextField
                                id="outlined-totalPrice"
                                label="Số điện thoại người nhận hàng"
                                variant="outlined"
                                color="primary"
                                value={reciever?.recieverPhone || ""}
                                onChange={(event) => {
                                    setReciever({ ...reciever, recieverPhone: event.target.value })
                                }} required
                            />
                        </div>
                    </div>
                    <div className="create-box-row flex">
                        <div className="dashboard-left flex">Địa chỉ cụ thể ( Người nhận hàng ) <span style={{ color: "red" }}>*</span></div>
                        <div className="dashboard-right--input">
                            <TextField
                                id="outlined-totalPrice"
                                label="Địa chỉ cụ thể người nhận hàng"
                                variant="outlined"
                                color="primary"
                                value={reciever?.recieverAddress || ""}
                                onChange={(event) => {
                                    setReciever({ ...reciever, recieverAddress: event.target.value })
                                }} required
                            />
                        </div>
                    </div>
                    <div className="create-box-row flex">
                        <div className="dashboard-left flex">Tỉnh/Thành Phố ( Người nhận hàng ) <span style={{ color: "red" }}>*</span></div>
                        <div className="dashboard-right">
                            <Select
                                labelId="demo-controlled-open-select-label"
                                id="demo-controlled-open-select"
                                open={sltProvinceReciever}
                                onClose={handleClose}
                                onOpen={handleOpenSltProvinceReciever}
                                value={reciever.recieverProvince}
                                onChange={(event, params) => {
                                    setReciever({
                                        ...reciever,
                                        recieverProvince: params.props.value,
                                        recieverProvinceName: params.props.name
                                    })
                                }}
                            >
                                <MenuItem value="">
                                    <em style={{ borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>Chọn tỉnh/thành phố :</em>
                                </MenuItem>
                                {province.map((item, index) => {
                                    return <MenuItem key={index} value={item.id} name={item.name}> {item.name} </MenuItem>
                                })}
                            </Select>
                        </div>
                    </div>
                    <div className="create-box-row flex">
                        <div className="dashboard-left flex">Quận/Huyện ( Người nhận hàng ) <span style={{ color: "red" }}>*</span></div>
                        <div className="dashboard-right">
                            <Select
                                labelId="demo-controlled-open-select-label"
                                id="demo-controlled-open-select"
                                open={sltDistrictReciever}
                                onClose={handleClose}
                                onOpen={handleOpenSltDistrictReciever}
                                value={reciever.recieverDistrict || ""}
                                onChange={(event) => {
                                    setReciever({ ...reciever, recieverDistrict: event.target.value })
                                }}
                            >
                                <MenuItem value="">
                                    <em style={{ borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>Chọn quận/huyện :</em>
                                </MenuItem>
                                {district.filter(el => el.idProvince === reciever.recieverProvince).map((item, index) => {
                                    return <MenuItem key={index} value={item.name}>{item.name}</MenuItem>
                                })}
                            </Select>
                        </div>
                    </div>

                    {/* Product Infomation */}
                    <div className="create-box-row flex">
                        <div className="dashboard-left flex">Tài xế</div>
                        <div className="dashboard-right">
                            <Select
                                labelId="demo-controlled-open-select-label"
                                id="demo-controlled-open-select"
                                open={sltDriver}
                                onClose={handleClose}
                                onOpen={handleOpenSltDriver}
                                value={data.driver || ""}
                                onChange={(event) => {
                                    setData({ ...data, driver: event.target.value })
                                }}
                            >
                                <MenuItem value="">
                                    <em style={{ borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>Chọn tài xế (Tạo đơn có thể không cần tài xế ) :</em>
                                </MenuItem>
                                {driverList.map((item, index) => {
                                    return <MenuItem key={index} value={item.id}>{item.name}</MenuItem>
                                })}
                            </Select>
                        </div>
                    </div>
                    <div className="create-box-row flex">
                        <div className="dashboard-left flex">Tên hàng hóa <span style={{ color: "red" }}>*</span></div>
                        <div className="dashboard-right--input">
                            <TextField
                                id="outlined-totalPrice"
                                label="Tên hàng hóa"
                                variant="outlined"
                                color="primary"
                                value={data?.orderName || ""}
                                onChange={(event) => {
                                    setData({ ...data, orderName: event.target.value })
                                }}
                                required
                            />
                        </div>
                    </div>
                    <div className="create-box-row flex">
                        <div className="dashboard-left flex">Loại hàng hóa <span style={{ color: "red" }}>*</span></div>
                        <div className="dashboard-right">
                            <Select
                                labelId="demo-controlled-open-select-label"
                                id="demo-controlled-open-select"
                                open={sltOrderType}
                                onClose={handleClose}
                                onOpen={handleOpenSltOrderType}
                                value={data.orderType || ""}
                                onChange={(event) => {
                                    setData({ ...data, orderType: event.target.value })
                                }}
                            >
                                <MenuItem value="">
                                    <em style={{ borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>Chọn loại hàng khi đóng gói :</em>
                                </MenuItem>
                                {orderType.map((item, index) => {
                                    return <MenuItem key={index} value={item.id}>{item.name}</MenuItem>
                                })}
                            </Select>
                        </div>
                    </div>
                    <div className="create-box-row flex">
                        <div className="dashboard-left flex">Số lượng <span style={{ color: "red" }}>*</span></div>
                        <div className="dashboard-right--input">
                            <TextField
                                id="outlined-totalPrice"
                                label="Số lượng"
                                variant="outlined"
                                color="primary"
                                type="number"
                                value={data?.quantity || ""}
                                onChange={(event) => {
                                    setData({ ...data, quantity: event.target.value })
                                }}
                                required
                            />
                        </div>
                    </div>
                    <div className="create-box-row flex">
                        <div className="dashboard-left flex">Đơn vị tính <span style={{ color: "red" }}>*</span></div>
                        <div className="dashboard-right">
                            <Select
                                labelId="demo-controlled-open-select-label"
                                id="demo-controlled-open-select"
                                open={sltUnit}
                                onClose={handleClose}
                                onOpen={handleOpenSltUnit}
                                value={data.unit}
                                onChange={(event) => {
                                    setData({ ...data, unit: event.target.value })
                                }}
                            >
                                <MenuItem value="">
                                    <em style={{ borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>Chọn đơn vị tính :</em>
                                </MenuItem>
                                {unitList.map((item, index) => {
                                    return <MenuItem key={index} value={item.id}>{item.name}</MenuItem>
                                })}
                            </Select>
                        </div>
                    </div>
                    <div className="create-box-row flex">
                        <div className="dashboard-left flex">Thành tiền <span style={{ color: "red" }}>*</span></div>
                        <div className="dashboard-right--input">
                            <TextField
                                id="outlined-totalPrice"
                                label="Tổng số tiền cần thu"
                                variant="outlined"
                                color="primary"
                                value={data?.totalPrice || ""}
                                onChange={(event) => {
                                    setData({ ...data, totalPrice: event.target.value })
                                }}
                                required
                            />
                        </div>
                    </div>

                    <div className="create-box-row flex">
                        <div className="dashboard-left flex">Phương thức thanh toán <span style={{ color: "red" }}>*</span></div>
                        <div className="dashboard-right--input">
                            <Select
                                labelId="demo-controlled-open-select-label"
                                id="demo-controlled-open-select"
                                open={sltPayment}
                                onClose={handleClose}
                                onOpen={handleOpenSltPayment}
                                value={data.paymentMethod || ""}
                                onChange={(event) => {
                                    setData({ ...data, paymentMethod: event.target.value })
                                }}
                            >
                                <MenuItem value="">
                                    <em style={{ borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>Các phương thức thanh toán :</em>
                                </MenuItem>
                                <MenuItem value={"cash on delivery"}>Ship COD</MenuItem>
                                <MenuItem value={"direct back transfer"}>Chuyển khoản</MenuItem>
                                <MenuItem value={"paypal"}>Thanh toán Paypal</MenuItem>
                            </Select>
                        </div>
                    </div>
                    <div className="create-box-row flex">
                        <div className="dashboard-left flex">Ghi chú</div>
                        <div className="dashboard-right--input">
                            <TextField
                                id="outlined-note"
                                label="Ghi chú đơn hàng"
                                variant="outlined"
                                color="primary"
                                onChange={(event) => {
                                    setData({ ...data, note: event.target.value })
                                }}
                            />
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
                                }, 1000)
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
                        <button className="create-box-btn btn btn-outline-warning">
                            Cập nhật đơn hàng
                        </button>
                    </div>


                </form>
            </div>
        </div >
    )
}