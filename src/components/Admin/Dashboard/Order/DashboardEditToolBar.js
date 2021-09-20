
import { useSnackbar } from 'notistack';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { getOrderUpdate } from '../../../../features/order/orderSlice';
export function EditToolbar({ setOpenEditFunc, params }) {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar()
    const dispatch = useDispatch();
    const handleEdit = () => {
        setOpenEditFunc();
        dispatch(getOrderUpdate(params))
        enqueueSnackbar('Cập nhật đơn hàng thành công', {
            persist: false,
            variant: 'success',
            preventDuplicate: true,
            autoHideDuration: 3000,
        })
    };

    return (
        <div
            className="dashboard-addnew-btn btn btn-outline-warning"
            onClick={() => handleEdit()}
        >Sửa</div>
    );
}
