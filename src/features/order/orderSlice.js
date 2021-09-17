import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    orderList: [
        {
            id: 1000000001,
            customerType: "Khách Mối",
            customerAddress: "Khóm 7, Trần Văn Thời, Cà Mau",
            customerDistrict: "Trần Văn Thời",
            customerName: "Nguyễn Hoài Nhớ",
            customerPhone: "0912521560",
            customerProvince: 111,
            customerProvinceName: "Cà Mau",
            driver: "",
            notes: "Giao nhanh",
            orderName: "Thực Phẩm Đông Lạnh",
            orderType: 1,
            paymentMethod: "cash on delivery",
            quantity: "1",
            recieverAddress: "Chợ Hạnh Đông Tây, Bình Thạnh, Hồ Chí Minh",
            recieverDistrict: "Bình Thạnh",
            recieverName: "Nguyễn Thành Long",
            recieverPhone: "090114223",
            recieverProvince: 222,
            recieverProvinceName: "Hồ Chí Minh",
            totalPrice: "800000",
            unit: "KG",
            status: "Đang vận chuyển",
            productList: [
                {
                    id: "1",
                    productName: "Cá Rô",
                    quantity: "2",
                    unit: "1111",
                }, {
                    id: "2",
                    productName: "Mực tươi",
                    quantity: "5",
                    unit: "1111",
                }
            ]
        },
        {
            id: 1000000002,
            customerType: "Khách Vảng Lai",
            customerAddress: "121 Lễ Duẫn, P21, Bình Thạnh, Hồ Chí Minh",
            customerDistrict: "Bình Thạnh",
            customerName: "Thành Long",
            customerPhone: "021211560",
            customerProvince: 111,
            customerProvinceName: "Hồ Chí Minh",
            driver: "",
            notes: "Giao nhanh",
            orderName: "Thực Phẩm Đông Lạnh",
            orderType: 1,
            paymentMethod: "cash on delivery",
            quantity: "1",
            recieverAddress: "Chợ Hạnh Đông Tây, Bình Thạnh, Hồ Chí Minh",
            recieverDistrict: "Bình Thạnh",
            recieverName: "Nguyễn Thành Long",
            recieverPhone: "090114223",
            recieverProvince: 222,
            recieverProvinceName: "Hồ Chí Minh",
            totalPrice: "800000",
            unit: "Thùng",
            status: "Lưu Kho",
            productList: [
                {
                    id: "1",
                    productName: "Cá Rô",
                    quantity: "2",
                    unit: "1111",
                }, {
                    id: "2",
                    productName: "Mực tươi",
                    quantity: "5",
                    unit: "1111",
                }
            ]
        },
    ],
    callbackGet: false,
    orderUpdate: {}
}

export const orderSlice = createSlice({
    name: 'Order',
    initialState,
    reducers: {
        AddOrder: (state, action) => {
            console.log('Add new');
        },
        CallBackGetOrder: (state, action) => {
            state.callbackGet = !state.callbackGet
        },
        getOrderUpdate: (state, action) => {
            state.orderUpdate = action.payload
        }

    },
})

// Action creators are generated for each case reducer function
export const { AddOrder, CallBackGetOrder } = orderSlice.actions

export default orderSlice.reducer