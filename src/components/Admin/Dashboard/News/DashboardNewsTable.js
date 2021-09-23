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
import { CallBackGetNews } from '../../../../features/dashboard/news/newsSlice.js';
import CustomLoadingOverlay from '../Order/CustomLoadingOverlay';

export default function DashboardNewsTable(props) {
    const update = useSelector(state => state.news.callbackGet)
    const [news, setNews] = useState([])
    const [constNews, setConstNews] = useState([])
    const [selection, setSelection] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const { enqueueSnackbar } = useSnackbar();
    const dispatch = useDispatch();
    useEffect(() => {
        setIsLoading(true)
        getNews();
    }, [update])
    const getNews = async () => {
        const data = await requestAPI('/jobs/all', 'GET')
            .then(res => {
                if (res) {
                    setNews(res.data?.data)
                    setConstNews(res.data?.data)
                    setIsLoading(false)
                }
            })
            .catch(err => console.log(err))
        return data
    }
    const deleteOnClick = () => {
        if (selection.length > 0) {
            RemoveNews({ idList: selection }).then(res => {
                if (res) {
                    dispatch(CallBackGetNews());
                    enqueueSnackbar('Xóa tin tuyển dụng thành công', {
                        persist: false,
                        variant: 'success',
                        preventDuplicate: true,
                        autoHideDuration: 3000,
                    })
                }
            }).catch(err => console.log(err))
        } else {
            enqueueSnackbar('Vui lòng chọn tin tuyển dụng muốn xóa', {
                persist: false,
                variant: 'error',
                preventDuplicate: true,
                autoHideDuration: 3000,
            })
        }
    }
    const RemoveNews = async (list) => {
        const data = await requestAPI(`/news/delete`, 'DELETE', list)
        return data
    }
    const searchOnSubmit = (event) => {
        event.preventDefault()
    }
    const searchOnChange = (event) => {
        const searchInput = event.target.value
        const search = []
        if (searchInput !== '') {
            for (let i in constNews) {
                if ((constNews[i].nameJob?.toLowerCase()).includes(searchInput?.toLowerCase())) {
                    search.push(constNews[i])
                }
            }
            setNews(search)
        } else {
            setNews(constNews)
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
                        placeholderSearch={"Tìm kiếm theo tên công việc"}
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
                            rows={news}
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