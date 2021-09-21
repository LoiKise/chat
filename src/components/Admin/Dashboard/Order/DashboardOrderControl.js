import React from 'react'

export default function DashboardOrderControl({ addController, deleteController, searchController, searchOnChange }) {
    return (
        <div className="dashboard-addnew flex">
            <div>
                <div className="dashboard-addnew-btn btn btn-outline-success mr-5"
                    onClick={addController}
                >Thêm</div>
                <div className="dashboard-addnew-btn btn btn-outline-danger"
                    onClick={() => deleteController()}
                >Xóa</div>
            </div>
            <div className="dashboard-addnew-search">
                <form onSubmit={searchController}>
                    <input type="text" placeholder="Tìm kiếm theo số điện thoại"
                        onChange={searchOnChange}
                    ></input>
                </form>
            </div>
        </div>
    )
}
