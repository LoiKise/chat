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
import { CallBackGetUser } from '../../../../features/dashboard/user/userSlice';

export default function DashboardUserTable(props) {
    const update = useSelector(state => state.user.callbackGet)
    const [user, setUser] = useState([])
    const [constUser, setConstUser] = useState([])
    const [selection, setSelection] = useState([])
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const dispatch = useDispatch();
    useEffect(() => {
        getUsers();
    }, [update])
    const getUsers = async () => {
        const data = await requestAPI('/users', 'GET')
            .then(res => {
                if (res) {
                    setUser(res.data?.data)
                    setConstUser(res.data?.data)
                }
            })
            .catch(err => console.log(err))
        return data
    }
    const deleteOnClick = () => {
        if (selection.length > 0) {
            RemoveUser({ idList: selection }).then(res => {
                if (res) {
                    dispatch(CallBackGetUser());
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
    const RemoveUser = async (list) => {
        const data = await requestAPI(`/user/delete`, 'DELETE', list)
        return data
    }
    const searchOnSubmit = (event) => {
        event.preventDefault()
    }
    const searchOnChange = (event) => {
        const searchInput = event.target.value
        const search = []
        if (searchInput !== '') {
            for (let i in constUser) {
                if ((constUser[i].phone).includes(searchInput)) {
                    search.push(constUser[i])
                }
            }
            setUser(search)
        } else {
            setUser(constUser)
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
                            rows={user}
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