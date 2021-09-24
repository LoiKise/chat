import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { useSnackbar } from 'notistack';
import { useDispatch } from 'react-redux';
import requestAPI from '../../../../apis';
import DashboardSelectInput from './../Order/DashboardSelectInput';
import { CallBackGetUser } from '../../../../features/dashboard/user/userSlice';
import DashboardTextInput from './../Order/DashboardTextInput';
export default function DashboardUserCreate(props) {
    const { enqueueSnackbar } = useSnackbar();
    const dispatch = useDispatch();
    const createForm = useRef();
    const [data, setData] = useState({
        email: "",
        password: "",
        fullname: "",
        phone: "",
        role: "",
    })

    //Custom Selection
    const [roleList] = useState([
        {
            id: "admin",
            name: "ADMIN",
        },
        {
            id: "manage",
            name: "Quản Lí",
        },
        {
            id: "user",
            name: "Người dùng"
        }
    ])
    const [sltRole, setSltRole] = useState(false);

    const handleClose = () => {
        setSltRole(false);
    };
    const handleOpenSltRole = () => {
        setSltRole(true);
    };
    //Handle Event and Request DataBase
    const createUser = async (dataFormat) => {
        const data = await requestAPI(`/register`, 'POST', dataFormat)
        return data
    }
    const onSubmit = (event) => {
        event.preventDefault()

        if (!data.email || !data.fullname || !data.password || !data.phone) {
            enqueueSnackbar('Không được bỏ trống các trường, vui lòng kiểm tra lại thông tin vừa nhập', {
                persist: false,
                variant: 'warning',
                preventDuplicate: true,
                autoHideDuration: 3000,
            })
        } else {
            console.log({ data });
            createUser(data).then(res => {
                if (res.data) {
                    dispatch(CallBackGetUser());
                }
            })
            enqueueSnackbar('Thêm mới tài khoản thành công', {
                persist: false,
                variant: 'success',
                preventDuplicate: true,
                autoHideDuration: 3000,
            })
        }
    }
    return (
        <div className="DashboardProductInfo">
            <div className="create-box">
                <div className="create-box-title flex">
                    <h2 className="create-box-title-text ">
                        Thông tin tài khoản
                    </h2>
                    <div
                        className="btn btn-outline-danger"
                        onClick={() => {
                            props.setCloseCreateFunc(false);
                        }}
                    >
                        <FontAwesomeIcon icon={faTimes} />
                    </div>
                </div>
                <form onSubmit={onSubmit} encType="multipart/form-data" ref={createForm}>
                    {/* Sender Infomation */}

                    <DashboardTextInput
                        textType={"text"}
                        title={"Email"}
                        placeholder={"Địa chỉ Email"}
                        isRequire={true}
                        data={data}
                        setData={setData}
                        objectKey={"email"}
                    />
                    <DashboardTextInput
                        textType={"text"}
                        title={"Họ và tên"}
                        placeholder={"Họ và tên tài khoản"}
                        isRequire={true}
                        data={data}
                        setData={setData}
                        objectKey={"fullname"}
                    />
                    <DashboardTextInput
                        textType={"text"}
                        title={"Số điện thoại"}
                        placeholder={"Số điện thoại tài khoản"}
                        isRequire={true}
                        data={data}
                        setData={setData}
                        objectKey={"phone"}
                    />
                    <DashboardTextInput
                        textType={"text"}
                        title={"Mật khẩu"}
                        placeholder={"Mật khẩu tài khoản"}
                        isRequire={true}
                        data={data}
                        setData={setData}
                        objectKey={"password"}
                    />
                    <DashboardSelectInput
                        title={"Quyền sử dụng"}
                        data={data}
                        setData={setData}
                        handleClose={handleClose}
                        sltOpen={sltRole}
                        handleOpenSlt={handleOpenSltRole}
                        subTitle={"Chọn quyền cho tài khoản :"}
                        listSelect={roleList}
                        objectKey={"role"}
                        objectNameKey={null}
                    />
                    <div className="flex-center" style={{ marginTop: '40px' }}>
                        <button className="create-box-btn btn btn-outline-success">
                            Tạo tài khoản
                        </button>
                    </div>


                </form>

            </div>
        </div >

    )
}