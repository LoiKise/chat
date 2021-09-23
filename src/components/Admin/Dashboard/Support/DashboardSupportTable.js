import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DataGrid } from '@mui/x-data-grid';
import CustomPagination from '../Order/CustomPagination';
import CustomNoRowsOverlay from '../Order/CustomNoRowsOverlay';
import CustomToolbar from '../Order/DashboardConfigToolBar';
import requestAPI from '../../../../apis';
import CustomLoadingOverlay from '../Order/CustomLoadingOverlay';

export default function DashboardSuppportTable(props) {
    const [support, setSupport] = useState([])
    const [constSupport, setConstSupport] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        setIsLoading(true)
        getSupports();
    }, [])
    const getSupports = async () => {
        const data = await requestAPI('/contact/all', 'GET')
            .then(res => {
                if (res) {
                    setSupport(res.data?.data)
                    setConstSupport(res.data?.data)
                    setIsLoading(false)
                }
            })
            .catch(err => console.log(err))
        return data
    }
    const searchOnSubmit = (event) => {
        event.preventDefault()
    }
    const searchOnChange = (event) => {
        const searchInput = event.target.value
        const search = []
        if (searchInput !== '') {
            for (let i in constSupport) {
                if ((constSupport[i].phone).includes(searchInput)) {
                    search.push(constSupport[i])
                }
            }
            setSupport(search)
        } else {
            setSupport(constSupport)
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
                    <div className="dashboard-addnew-search pb-3">
                        <form onSubmit={searchOnSubmit}>
                            <input type="text" placeholder="Tìm kiếm theo số điện thoại"
                                onChange={searchOnChange}
                            ></input>
                        </form>
                    </div>
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
                            rows={support}
                            pagination
                            pageSize={5}
                            rowsPerPageOptions={[5]}
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}