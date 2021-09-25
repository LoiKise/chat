import React from 'react'
import { useDispatch } from 'react-redux';
export default function DashboardViewDetails({ params, getItem }) {
    const dispatch = useDispatch();
    const handleView = () => {
        dispatch(getItem(params))
    };

    return (
        <div
            className="dashboard-addnew-btn btn btn-outline-info"
            onClick={() => handleView()}
        >Xem
        </div>
    );
}
