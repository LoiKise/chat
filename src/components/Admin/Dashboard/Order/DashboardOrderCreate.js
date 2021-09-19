import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import MaterialTable from 'material-table';
import { useSnackbar } from 'notistack';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { useDispatch } from 'react-redux';
import { CallBackGetOrder } from '../../../../features/order/orderSlice';
import requestAPI from '../../../../apis';
export default function DashboardOrderCreate(props) {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const createForm = useRef();
    const dispatch = useDispatch();
    const [province, setProvince] = useState([])

    const [customer, setCustomer] = useState({
        customerName: '',
        customerPhone: '',
        customerAddress: '',
        customerDistrict: '',
        customerProvince: null,
        customerProvinceName: '',
    })
    const [receiver, setReceiver] = useState({
        receiverName: '',
        receiverPhone: '',
        receiverAddress: '',
        receiverDistrict: '',
        receiverProvince: null,
        receiverProvinceName: '',
    })
    const [paymentList, setPaymentList] = useState([])
    const [unitList, setUnitList] = useState([])
    const [table, setTable] = useState([])
    const [products, setProducts] = useState([])

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
            id: 2,
            name: 'Hàng kiện',
            symbox: 'HK'
        }
    ])
    const [data, setData] = useState({
        customerType: '',
        orderName: '',
        orderType: null,
        unit_id: null,
        quantity: null,
        totalPrice: null,
        notes: "",
        payment_id: "",
        driver_id: null,
        isFreeShip: false,
    })

    //Custom Selection
    const [sltTypeCustomer, setSltTypeCustomer] = useState(false);
    const [sltProvinceCustomer, setSltProvinceCustomer] = useState(false);
    const [sltDistrictCustomer, setSltDistrictCustomer] = useState(false);
    const [sltProvinceReceiver, setSltProvinceReceiver] = useState(false);
    const [sltDistrictReceiver, setSltDistrictReceiver] = useState(false);
    const [sltOrderType, setSltOrderType] = useState(false);
    const [sltDriver, setSltDriver] = useState(false);
    const [sltUnit, setSltUnit] = useState(false);
    const [sltPayment, setSltPayment] = useState(false);


    const handleClose = () => {
        setSltTypeCustomer(false);
        setSltProvinceCustomer(false);
        setSltDistrictCustomer(false);
        setSltProvinceReceiver(false);
        setSltDistrictReceiver(false);
        setSltDriver(false);
        setSltOrderType(false);
        setSltUnit(false);
        setSltPayment(false);
    };
    const handleOpenSltTypeCustomer = () => {
        setSltTypeCustomer(true);
    };
    const handleOpenSltProvinceCustomer = () => {
        setSltProvinceCustomer(true);
    };
    const handleOpenSltDistrictCustomer = () => {
        setSltDistrictCustomer(true);
    };
    const handleOpenSltProvinceReceiver = () => {
        setSltProvinceReceiver(true);
    };
    const handleOpenSltDistrictReceiver = () => {
        setSltDistrictReceiver(true);
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
        getProvince();
        getUnit();
        getPayment();

    }, [])
    const getUnit = async () => {
        const data = await requestAPI('/unit', 'GET')
            .then(res => {
                if (res) {
                    setUnitList(res.data?.data)
                    setTable([
                        { title: "STT", field: 'id', render: rowData => rowData?.tableData?.id + 1, editable: 'never' },
                        { title: "Sản Phẩm", field: 'name' },
                        { title: "Số lượng", field: 'quantity' },
                        {
                            title: "Đơn vị", field: 'unit_id',
                            lookup: res.data?.data?.reduce((item, cur, i) => {
                                item[cur.id] = cur.name;
                                return item;
                            }, {}) // { 1: 'KG', 2: 'Cái', 3: 'Thùng' }

                        }])
                }
            })
            .catch(err => console.log(err))
        return data
    }
    const getPayment = async () => {
        const data = await requestAPI('/payment', 'GET')
            .then(res => {
                if (res) {
                    setPaymentList(res.data?.data)
                }
            })
            .catch(err => console.log(err))
        return data
    }
    const getProvince = async () => {
        const data = await requestAPI('/city', 'GET')
            .then(res => {
                if (res) {
                    setProvince(res.data?.data)
                }
            })
            .catch(err => console.log(err))
        return data
    }
    const createOrders = async (dataFormat) => {
        const data = await requestAPI('/order', 'POST', dataFormat)
        return data
    }
    const onSubmit = (event) => {
        event.preventDefault()
        let dataFormat = { ...data, ...customer, ...receiver, products }
        let validatePhone = /^(((0))[0-9]{9})$/g;
        let validatePhone1 = /^(((0))[0-9]{9})$/g;

        if (dataFormat.customerDistrict.length <= 0 || dataFormat.receiverDistrict.length <= 0) {
            enqueueSnackbar('Quận/Huyện không được bỏ trống, vui lòng kiểm tra lại thông tin vừa nhập', {
                persist: false,
                variant: 'warning',
                preventDuplicate: true,
                autoHideDuration: 3000,
            })
        } else if (products.length <= 0) {
            enqueueSnackbar('Hàng hóa không được bỏ trống, vui lòng kiểm tra lại thông tin vừa nhập', {
                persist: false,
                variant: 'error',
                preventDuplicate: true,
                autoHideDuration: 3000,
            })
        } else if (validatePhone.test(`${dataFormat.customerPhone}`) === false || validatePhone1.test(`${dataFormat.receiverPhone}`) === false) {
            enqueueSnackbar('Số điện thoại sai định dạng hoặc không tồn tại, vui lòng kiểm tra lại thông tin vừa nhập', {
                persist: false,
                variant: 'error',
                preventDuplicate: true,
                autoHideDuration: 3000,
            })
        } else {
            // let customerAddressfull = dataFormat.customerAddress + dataFormat.customerDistrict + dataFormat.customerProvinceName
            dataFormat.customerAddress = dataFormat.customerAddress + ', ' + dataFormat.customerDistrict + ', ' + dataFormat.customerProvinceName
            dataFormat.receiverAddress = dataFormat.receiverAddress + ', ' + dataFormat.receiverDistrict + ', ' + dataFormat.receiverProvinceName
            dataFormat.quantity = parseInt(dataFormat.quantity, 10)
            console.log({ dataFormat });
            createOrders(dataFormat).then(res => {
                if (res.data) {
                    dispatch(CallBackGetOrder());
                }
            })
            enqueueSnackbar('Thêm đơn hàng thành công', {
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
                            props.setCloseCreateFunc(false);
                        }}
                    >
                        <FontAwesomeIcon icon={faTimes} />
                    </div>
                </div>
                <form onSubmit={onSubmit} encType="multipart/form-data" ref={createForm}>
                    {/* Sender Infomation */}
                    <div className="create-box-row flex">
                        <div className="dashboard-left flex">Phân loại khách hàng<span style={{ color: "red" }}>*</span></div>
                        <div className="dashboard-right">
                            <Select
                                className="MUI-customBorder"
                                labelId="demo-controlled-open-select-label"
                                id="demo-controlled-open-select"
                                open={sltTypeCustomer}
                                onClose={handleClose}
                                onOpen={handleOpenSltTypeCustomer}
                                value={data.customerType || ""}
                                defaultValue={"Khách Vãng Lai"}
                                onChange={(event) => {
                                    setData({
                                        ...data,
                                        customerType: event.target.value,
                                    })
                                }}
                            >
                                <MenuItem value="Khách Vãng Lai" selected>
                                    <em style={{ borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>Chọn loại khách hàng :</em>
                                </MenuItem>
                                <MenuItem value="Khách Mối" >
                                    <em >Khách mối</em>
                                </MenuItem>
                                <MenuItem value="Khách Vãng Lai" >
                                    <em >Khách vãng lai</em>
                                </MenuItem>
                            </Select>
                        </div>
                    </div>
                    <div className="create-box-row flex">
                        <div className="dashboard-left flex">Khách hàng gửi <span style={{ color: "red" }}>*</span></div>
                        <div className="dashboard-right--input">
                            <TextField
                                id="outlined-totalPrice"
                                label="Họ và tên người gửi hàng"
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
                        <div className="dashboard-left flex">Số điện thoại ( Người gửi hàng ) <span style={{ color: "red" }}>*</span></div>
                        <div className="dashboard-right--input">
                            <TextField
                                id="outlined-totalPrice"
                                label="Số điện thoại người gửi hàng"
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
                        <div className="dashboard-left flex">Địa chỉ cụ thể ( Người gửi hàng ) <span style={{ color: "red" }}>*</span> </div>
                        <div className="dashboard-right--input">
                            <TextField
                                id="outlined-totalPrice"
                                label="Địa chỉ cụ thể người gửi hàng"
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
                        <div className="dashboard-left flex">Tỉnh/Thành Phố ( Người gửi hàng ) <span style={{ color: "red" }}>*</span></div>
                        <div className="dashboard-right">
                            <Select
                                className="MUI-customBorder"
                                labelId="demo-controlled-open-select-label"
                                id="demo-controlled-open-select"
                                open={sltProvinceCustomer}
                                onClose={handleClose}
                                onOpen={handleOpenSltProvinceCustomer}
                                value={customer.customerProvince || ""}
                                onChange={(event, params) => {
                                    setCustomer({
                                        ...customer,
                                        customerProvince: params?.props?.value,
                                        customerProvinceName: params?.props?.name
                                    })
                                }}
                            >
                                <MenuItem value={null} selected>
                                    <em style={{ borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>Chọn tỉnh/thành phố :</em>
                                </MenuItem>
                                {province && province.length > 0 && province?.map((item, index) => {
                                    return <MenuItem key={index} value={item.id} name={item.cityName}>{item.cityName}</MenuItem>
                                })}
                            </Select>
                        </div>
                    </div>
                    <div className="create-box-row flex">
                        <div className="dashboard-left flex">Quận/Huyện ( Người gửi hàng ) <span style={{ color: "red" }}>*</span></div>
                        <div className="dashboard-right">
                            <Select
                                className="MUI-customBorder"
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
                                <MenuItem value={null} selected>
                                    <em style={{ borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>Chọn tỉnh/thành phố :</em>
                                </MenuItem>
                                {province && province.length > 0 && province?.find(el => el.id === customer.customerProvince)?.districts?.map((item, index) => {
                                    return <MenuItem key={index} value={item.name}>{item.name}</MenuItem>
                                })}
                            </Select>
                        </div>
                    </div>

                    {/* Receiver Infomation */}

                    <div className="create-box-row flex">
                        <div className="dashboard-left flex">Khách hàng nhận <span style={{ color: "red" }}>*</span></div>
                        <div className="dashboard-right--input">
                            <TextField
                                id="outlined-totalPrice"
                                label="Họ và tên người nhận hàng"
                                variant="outlined"
                                color="primary"
                                value={receiver?.receiverName || ""}
                                onChange={(event) => {
                                    setReceiver({ ...receiver, receiverName: event.target.value })
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
                                value={receiver?.receiverPhone || ""}
                                onChange={(event) => {
                                    setReceiver({ ...receiver, receiverPhone: event.target.value })
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
                                value={receiver?.receiverAddress || ""}
                                onChange={(event) => {
                                    setReceiver({ ...receiver, receiverAddress: event.target.value })
                                }} required
                            />
                        </div>
                    </div>
                    <div className="create-box-row flex">
                        <div className="dashboard-left flex">Tỉnh/Thành Phố ( Người nhận hàng ) <span style={{ color: "red" }}>*</span></div>
                        <div className="dashboard-right">
                            <Select
                                className="MUI-customBorder"
                                labelId="demo-controlled-open-select-label"
                                id="demo-controlled-open-select"
                                open={sltProvinceReceiver}
                                onClose={handleClose}
                                onOpen={handleOpenSltProvinceReceiver}
                                value={receiver.receiverProvince || ""}
                                onChange={(event, params) => {
                                    setReceiver({
                                        ...receiver,
                                        receiverProvince: params.props.value,
                                        receiverProvinceName: params.props.name
                                    })
                                }}
                            >
                                <MenuItem value={null} selected>
                                    <em style={{ borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>Chọn tỉnh/thành phố :</em>
                                </MenuItem>
                                {province && province.length > 0 && province?.map((item, index) => {
                                    return <MenuItem key={index} value={item.id} name={item.cityName}> {item.cityName} </MenuItem>
                                })}
                            </Select>
                        </div>
                    </div>
                    <div className="create-box-row flex">
                        <div className="dashboard-left flex">Quận/Huyện ( Người nhận hàng ) <span style={{ color: "red" }}>*</span></div>
                        <div className="dashboard-right">
                            <Select
                                className="MUI-customBorder"
                                labelId="demo-controlled-open-select-label"
                                id="demo-controlled-open-select"
                                open={sltDistrictReceiver}
                                onClose={handleClose}
                                onOpen={handleOpenSltDistrictReceiver}
                                value={receiver.receiverDistrict || ""}
                                onChange={(event) => {
                                    setReceiver({ ...receiver, receiverDistrict: event.target.value })
                                }}
                            >
                                <MenuItem value={null} selected>
                                    <em style={{ borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>Chọn quận/huyện :</em>
                                </MenuItem>
                                {province && province.length > 0 && province?.find(el => el.id === receiver.receiverProvince)?.districts?.map((item, index) => {
                                    return <MenuItem key={index} value={item.name}>{item.name}</MenuItem>
                                })}
                            </Select>
                        </div>
                    </div>

                    {/* Product Infomation */}
                    {/* <div className="create-box-row flex">
                        <div className="dashboard-left flex">Tài xế</div>
                        <div className="dashboard-right">
                            <Select
                            className="MUI-customBorder"
                                labelId="demo-controlled-open-select-label"
                                id="demo-controlled-open-select"
                                open={sltDriver}
                                onClose={handleClose}
                                onOpen={handleOpenSltDriver}
                                value={data.driver_id || ""}
                                onChange={(event) => {
                                    setData({ ...data, driver_id: event.target.value })
                                }}
                            >
                                <MenuItem value={null} selected>
                                    <em style={{ borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>Chọn tài xế (Tạo đơn có thể không cần tài xế ) :</em>
                                </MenuItem>
                                {driverList.map((item, index) => {
                                    return <MenuItem key={index} value={item.id}>{item.name}</MenuItem>
                                })}
                            </Select>
                        </div>
                    </div>
                     */}
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

                                className="MUI-customBorder"
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
                                <MenuItem value={null} selected>
                                    <em style={{ borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>Chọn loại hàng khi đóng gói :</em>
                                </MenuItem>
                                {orderType && orderType.length > 0 && orderType?.map((item, index) => {
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
                                defaultValue={1}
                                className="MUI-customBorder"
                                labelId="demo-controlled-open-select-label"
                                id="demo-controlled-open-select"
                                open={sltUnit}
                                onClose={handleClose}
                                onOpen={handleOpenSltUnit}
                                value={data.unit_id || ""}
                                onChange={(event) => {
                                    setData({ ...data, unit_id: event.target.value })
                                }}
                            >
                                <MenuItem value={null} selected>
                                    <em style={{ borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>Chọn đơn vị tính :</em>
                                </MenuItem>
                                {unitList && unitList.length > 0 && unitList?.map((item, index) => {
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
                                defaultValue={1}
                                className="MUI-customBorder"
                                labelId="demo-controlled-open-select-label"
                                id="demo-controlled-open-select"
                                open={sltPayment}
                                onClose={handleClose}
                                onOpen={handleOpenSltPayment}
                                value={data.payment_id || ""}
                                onChange={(event) => {
                                    setData({ ...data, payment_id: event.target.value })
                                }}
                            >
                                <MenuItem value={null} selected>
                                    <em style={{ borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>Chọn phương thức thanh toán :</em>
                                </MenuItem>
                                {paymentList && paymentList.length > 0 && paymentList?.map((item, index) => {
                                    return <MenuItem key={index} value={item.id}>{item.namePayment}</MenuItem>
                                })}
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
                                value={data?.notes || ""}
                                onChange={(event) => {
                                    setData({ ...data, notes: event.target.value })
                                }}
                            />
                        </div>
                    </div>
                    <MaterialTable
                        title="Danh sách hàng hóa"
                        data={products}
                        columns={table}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
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
                                const updatedRows = [...products, newRow]
                                console.log({ newRow });
                                setTimeout(() => {
                                    setProducts(updatedRows)
                                    resolve()
                                }, 1000)
                            }),
                            onRowDelete: selectedRow => new Promise((resolve, reject) => {
                                const index = selectedRow.tableData.id;
                                const updatedRows = [...products]
                                updatedRows.splice(index, 1)
                                setTimeout(() => {
                                    setProducts(updatedRows)
                                    resolve()
                                }, 2000)
                            }),
                            onRowUpdate: (updatedRow, oldRow) => new Promise((resolve, reject) => {
                                const index = oldRow.tableData.id;
                                const updatedRows = [...products]
                                updatedRows[index] = updatedRow
                                setTimeout(() => {
                                    setProducts(updatedRows)
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