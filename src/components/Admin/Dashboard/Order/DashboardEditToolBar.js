
import * as React from 'react';
export function EditToolbar({ index }) {
    const handleEdit = () => {
        console.log(index);
    };

    return (
        <div
            className="dashboard-addnew-btn btn btn-outline-warning"
            onClick={handleEdit}
        >Sửa</div>
    );
}
