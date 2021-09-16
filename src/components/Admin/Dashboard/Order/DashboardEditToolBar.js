
import { useSnackbar } from 'notistack';
import * as React from 'react';
export function EditToolbar({ index }) {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar()
    const handleEdit = () => {
        enqueueSnackbar('Sửa thành công', {
            persist: false,
            variant: 'success',
            preventDuplicate: true,
            autoHideDuration: 3000,
        })
    };

    return (
        <div
            className="dashboard-addnew-btn btn btn-outline-warning"
            onClick={handleEdit}
        >Sửa</div>
    );
}
