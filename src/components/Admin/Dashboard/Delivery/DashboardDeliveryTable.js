import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DataGrid } from '@mui/x-data-grid';
import CustomPagination from '../Order/CustomPagination';
import CustomNoRowsOverlay from '../Order/CustomNoRowsOverlay';
import CustomToolbar from '../Order/DashboardConfigToolBar';
import { useSelector, useDispatch } from 'react-redux';
import requestAPI from '../../../../apis';
import { useSnackbar } from 'notistack';
import DashboardOrderControl from '../Order/DashboardOrderControl';
import { CallBackGetDelivery } from '../../../../features/dashboard/delivery/deliverySlice';
import CustomLoadingOverlay from '../Order/CustomLoadingOverlay';
import DashboardDialog from '../Order/DashboardDialog';
import { closeStatusView } from '../../../../features/dashboard/order/orderSlice';

export default function DashboardDeliveryTable(props) {
    const steps = ['Lưu Kho', 'Đang Vận Chuyển', 'Đã Giao', 'Đã Hủy'];
    const orderUpdate = useSelector(state => state.delivery.callbackGet)
    const statusView = useSelector(state => state.order.statusOrderView)
    const orderView = useSelector(state => state.order.orderView)
    const [delivery, setDelivery] = useState([])
    const [constDelivery, setConstDelivery] = useState([])
    const [selection, setSelection] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const { enqueueSnackbar } = useSnackbar();
    const dispatch = useDispatch();
    useEffect(() => {
        setIsLoading(true)
        getDelivery();
    }, [orderUpdate])
    const getDelivery = async () => {
        const data = await requestAPI('/delivery', 'GET')
            .then(res => {
                if (res) {
                    setDelivery(res.data?.data)
                    setConstDelivery(res.data?.data)
                    setIsLoading(false);
                }
            })
            .catch(err => console.log(err))
        return data
    }
    const deleteOnClick = () => {
        if (selection.length > 0) {
            RemoveDelivery({ idList: selection }).then(res => {
                if (res) {
                    dispatch(CallBackGetDelivery());
                    enqueueSnackbar('Xóa hóa đơn giao hàng thành công', {
                        persist: false,
                        variant: 'success',
                        preventDuplicate: true,
                        autoHideDuration: 3000,
                    })
                }
            }).catch(err => console.log(err))
        } else {
            enqueueSnackbar('Vui lòng chọn hóa đơn giao hàng muốn xóa', {
                persist: false,
                variant: 'error',
                preventDuplicate: true,
                autoHideDuration: 3000,
            })
        }
    }
    const RemoveDelivery = async (list) => {
        const data = await requestAPI(`/delivery/delete`, 'DELETE', list)
        return data
    }
    const searchOnSubmit = (event) => {
        event.preventDefault()
    }
    const searchOnChange = (event) => {
        const searchInput = event.target.value
        const search = []
        if (searchInput !== '') {
            for (let i in constDelivery) {
                if ((constDelivery[i]?.saleOrderId).includes(searchInput)) {
                    search.push(constDelivery[i])
                }
            }
            setDelivery(search)
        } else {
            setDelivery(constDelivery)
        }

    }
    const closeDialog = () => {
        dispatch(closeStatusView())
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
                    <DashboardOrderControl
                        addController={props.setOpenCreateFunc}
                        deleteController={deleteOnClick}
                        searchOnChange={searchOnChange}
                        searchController={searchOnSubmit}
                        placeholderSearch="Tìm kiếm theo mã hóa đơn"
                    />
                    <div style={{ height: 400, width: "100%" }}>
                        <DataGrid
                            components={{
                                Toolbar: CustomToolbar,
                                Pagination: CustomPagination,
                                NoRowsOverlay: CustomNoRowsOverlay,
                                LoadingOverlay: CustomLoadingOverlay
                            }}
                            loading={isLoading}
                            columns={props.table}
                            rows={delivery}
                            pagination
                            pageSize={5}
                            rowsPerPageOptions={[5]}
                            onSelectionModelChange={(newSelectionModel) => {
                                setSelection(newSelectionModel)
                            }}
                            checkboxSelection
                        />
                        <DashboardDialog
                            open={statusView}
                            onClose={closeDialog}
                            steps={steps}
                            titleLabel={"Lịch sử đơn hàng"}
                            orderView={orderView}
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}