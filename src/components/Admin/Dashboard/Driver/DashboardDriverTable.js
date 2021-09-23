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
import { CallBackGetDriver } from '../../../../features/dashboard/driver/driverSlice';
import CustomLoadingOverlay from '../Order/CustomLoadingOverlay';

export default function DashboardDriverTable(props) {
    const update = useSelector(state => state.driver.callbackGet)
    const [driver, setDriver] = useState([])
    const [constDriver, setConstDriver] = useState([])
    const [selection, setSelection] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const { enqueueSnackbar } = useSnackbar();
    const dispatch = useDispatch();
    useEffect(() => {
        setIsLoading(true)
        getDrivers();
    }, [update])
    const getDrivers = async () => {
        const data = await requestAPI('/drivers/all', 'GET')
            .then(res => {
                if (res) {
                    setDriver(res.data?.data)
                    setConstDriver(res.data?.data)
                    setIsLoading(false)
                }
            })
            .catch(err => console.log(err))
        return data
    }
    const deleteOnClick = () => {
        if (selection.length > 0) {
            RemoveDriver({ idList: selection }).then(res => {
                if (res) {
                    dispatch(CallBackGetDriver());
                    enqueueSnackbar('Xóa tài khoản thành công', {
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
    const RemoveDriver = async (list) => {
        const data = await requestAPI(`/driver/delete`, 'DELETE', list)
        return data
    }
    const searchOnSubmit = (event) => {
        event.preventDefault()
    }
    const searchOnChange = (event) => {
        const searchInput = event.target.value
        const search = []
        if (searchInput !== '') {
            for (let i in constDriver) {
                if ((constDriver[i].phone).includes(searchInput)) {
                    search.push(constDriver[i])
                }
            }
            setDriver(search)
        } else {
            setDriver(constDriver)
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
                                LoadingOverlay: CustomLoadingOverlay
                            }}
                            loading={isLoading}
                            columns={props.table}
                            rows={driver}
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