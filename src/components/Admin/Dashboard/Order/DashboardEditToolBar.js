
import { useSnackbar } from 'notistack';
import * as React from 'react';
export function EditToolbar(props, order) {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar()
    const handleEdit = () => {
        props.setOpenEditFunc();
        console.log({ order });
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
