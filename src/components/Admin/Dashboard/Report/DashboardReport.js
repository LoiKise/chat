import { faCheckCircle, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import DashboardReportTable from './DashboardReportTable'

export default function DashboardReport(props) {

    const table = [
        "Name",
        "Banner",
        "Items",
        "Date",
        "Action"
    ]

    return (
        <div className="dashboard-product">
            <div className={props.toast ? "toast toast-show" : "toast"} style={{ top: '20px' }}>
                <FontAwesomeIcon icon={faCheckCircle} className="icon" />
                Update Report successfully
            </div>
            <DashboardReportTable
                icon={faShoppingBag}
                title="Reports"
                color="orange"
                table={table}
                setOpenCreateFunc={props.setOpenCreateFunc}
                setCloseCreateFunc={props.setCloseCreateFunc}
                setOpenEditFunc={props.setOpenEditFunc}
                setCloseEditFunc={props.setCloseEditFunc}
                isChange={props.isChange}
            />
        </div>
    )
}