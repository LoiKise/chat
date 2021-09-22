
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { getOrderUpdate } from '../../../../features/dashboard/order/orderSlice';
export function EditToolbar({ setOpenEditFunc, params }) {
    const dispatch = useDispatch();
    const handleEdit = () => {
        setOpenEditFunc();
        dispatch(getOrderUpdate(params))
    };

    return (
        <div
            className="dashboard-addnew-btn btn btn-outline-warning"
            onClick={() => handleEdit()}
        >Sửa</div>
    );
}
