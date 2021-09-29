import { createSlice } from '@reduxjs/toolkit'
import requestAPI from '../../../apis'

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
    orderUpdate: {},
    orderView: {},
    statusOrderView: false
}

export const orderSlice = createSlice({
    name: 'Order',
    initialState,
    reducers: {
        CallBackGetOrder: (state, action) => {
            state.callbackGet = !state.callbackGet
        },
        getOrderUpdate: (state, action) => {
            state.orderUpdate = action.payload
        },
        getOrderView: (state, action) => {
            state.orderView = action.payload
            state.statusOrderView = true
            requestAPI(`/delivery/history/${action.payload?.id}`, 'GET')
                .then(res => {
                    console.log({ history: res.data?.delivery[0]?.deliveryHistory });
                }).catch({

                })
        },
        closeStatusView: (state, action) => {
            state.statusOrderView = false
        }

    },
})

// Action creators are generated for each case reducer function
export const { AddOrder, CallBackGetOrder, getOrderUpdate, getOrderView, closeStatusView } = orderSlice.actions

export default orderSlice.reducer