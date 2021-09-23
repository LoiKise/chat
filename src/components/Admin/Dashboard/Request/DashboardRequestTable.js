import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DataGrid } from '@mui/x-data-grid';
import CustomPagination from '../Order/CustomPagination';
import CustomNoRowsOverlay from '../Order/CustomNoRowsOverlay';
import CustomToolbar from '../Order/DashboardConfigToolBar';
import requestAPI from '../../../../apis';

export default function DashboardRequestTable(props) {
    const [request, setRequest] = useState([])
    const [constRequest, setConstRequest] = useState([])
    useEffect(() => {
        getRequests();
    }, [])
    const getRequests = async () => {
        const data = await requestAPI('/requests/all', 'GET')
            .then(res => {
                if (res) {
                    setRequest(res.data?.data)
                    setConstRequest(res.data?.data)
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
            for (let i in constRequest) {
                if ((constRequest[i].phone).includes(searchInput)) {
                    search.push(constRequest[i])
                }
            }
            setRequest(search)
        } else {
            setRequest(constRequest)
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
                            }}
                            columns={props.table}
                            rows={request}
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