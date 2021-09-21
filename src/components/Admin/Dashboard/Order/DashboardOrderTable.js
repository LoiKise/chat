import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DataGrid } from '@mui/x-data-grid';
import CustomPagination from './CustomPagination';
import CustomNoRowsOverlay from './CustomNoRowsOverlay';
import CustomToolbar from './DashboardConfigToolBar';
import { useSelector, useDispatch } from 'react-redux';
import requestAPI from '../../../../apis';
import { useSnackbar } from 'notistack';
import { CallBackGetOrder } from '../../../../features/order/orderSlice';
import DashboardOrderControl from './DashboardOrderControl';

export default function DashboardOrderTable(props) {
    const update = useSelector(state => state.order.callbackGet)
    const [order, setOrder] = useState([])
    const [constOrder, setConstOrder] = useState([])
    const [selection, setSelection] = useState([])
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const dispatch = useDispatch();
    useEffect(() => {
        getOrders();
    }, [update])
    const getOrders = async () => {
        const data = await requestAPI('/orders', 'GET')
            .then(res => {
                if (res) {
                    setOrder(res.data?.data)
                    setConstOrder(res.data?.data)
                }
            })
            .catch(err => console.log(err))
        return data
    }
    const deleteOnClick = () => {
        if (selection.length > 0) {
            RemoveOrder({ idList: selection }).then(res => {
                if (res) {
                    dispatch(CallBackGetOrder());
                    enqueueSnackbar('Xóa hóa đơn thành công', {
                        persist: false,
                        variant: 'success',
                        preventDuplicate: true,
                        autoHideDuration: 3000,
                    })
                }
            }).catch(err => console.log(err))
        } else {
            enqueueSnackbar('Vui lòng chọn hóa đơn muốn xóa', {
                persist: false,
                variant: 'error',
                preventDuplicate: true,
                autoHideDuration: 3000,
            })
        }
    }
    const RemoveOrder = async (list) => {
        const data = await requestAPI(`/order/delete`, 'DELETE', list)
        return data
    }
    const searchOnSubmit = (event) => {
        event.preventDefault()
    }
    const searchOnChange = (event) => {
        const searchInput = event.target.value
        const search = []
        if (searchInput !== '') {
            for (let i in constOrder) {
                if ((constOrder[i].customerPhone).includes(searchInput)) {
                    search.push(constOrder[i])
                }
            }
            setOrder(search)
        } else {
            setOrder(constOrder)
        }

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
                    />
                    <div style={{ height: 400, width: "100%" }}>
                        <DataGrid
                            components={{
                                Toolbar: CustomToolbar,
                                Pagination: CustomPagination,
                                NoRowsOverlay: CustomNoRowsOverlay,
                            }}
                            columns={props.table}
                            rows={order}
                            pagination
                            pageSize={5}
                            rowsPerPageOptions={[5]}
                            onSelectionModelChange={(newSelectionModel) => {
                                setSelection(newSelectionModel)
                            }}
                            checkboxSelection
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}