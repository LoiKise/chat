import { faTshirt } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import DashboardDriverTable from './DashboardDriverTable'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

export default function DashboardDriver(props) {

    const table = [
        "Name",
        "Images",
        "Price",
        "Sale",
        "Sold",
        // "Category",    
        // "Size",
        "Date",
        "Rating",
        "Action"
    ]

    return (
        <div className="dashboard-product">
            <DashboardDriverTable
                icon={faTshirt}
                title="Drivers"
                color="pink"
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