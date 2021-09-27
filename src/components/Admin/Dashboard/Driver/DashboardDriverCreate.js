import React, { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { useSnackbar } from 'notistack';
import { useDispatch } from 'react-redux';
import requestAPI from '../../../../apis';
import DashboardTextInput from './../Order/DashboardTextInput';
import { CallBackGetDriver } from '../../../../features/dashboard/driver/driverSlice';
export default function DashboardUserCreate(props) {
    const { enqueueSnackbar } = useSnackbar();
    const dispatch = useDispatch();
    const createForm = useRef();
    const [data, setData] = useState({
        age: "",
        password: "",
        name: "",
        phone: "",
        idenityCard: "",
    })

    //Handle Event and Request DataBase
    const createDriver = async (dataFormat) => {
        const data = await requestAPI(`/driver`, 'POST', dataFormat)
        return data
    }
    const onSubmit = (event) => {
        event.preventDefault()

        if (!data.idenityCard || !data.name || !data.age || !data.phone) {
            enqueueSnackbar('Không được bỏ trống các trường, vui lòng kiểm tra lại thông tin vừa nhập', {
                persist: false,
                variant: 'warning',
                preventDuplicate: true,
                autoHideDuration: 3000,
            })
        } else {
            createDriver(data).then(res => {
                if (res.data) {
                    dispatch(CallBackGetDriver());
                    enqueueSnackbar('Thêm mới tài xế thành công', {
                        persist: false,
                        variant: 'success',
                        preventDuplicate: true,
                        autoHideDuration: 3000,
                    })
                    props.setCloseCreateFunc(false);
                }
            })

        }
    }
    return (
        <div className="DashboardProductInfo">
            <div className="create-box">
                <div className="create-box-title flex">
                    <h2 className="create-box-title-text ">
                        Thông tin tài xế
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
                <form onSubmit={onSubmit} encType="multipart/form-data" ref={createForm} className="db-form-input">
                    {/* Sender Infomation */}
                    <DashboardTextInput
                        textType={"text"}
                        title={"Họ và tên"}
                        placeholder={"Họ và tên tài xế"}
                        isRequire={true}
                        data={data}
                        setData={setData}
                        objectKey={"name"}
                    />

                    <DashboardTextInput
                        textType={"number"}
                        title={"Tuổi"}
                        placeholder={"Tuổi tài xế"}
                        isRequire={true}
                        data={data}
                        setData={setData}
                        objectKey={"age"}
                    />

                    <DashboardTextInput
                        textType={"text"}
                        title={"Số điện thoại"}
                        placeholder={"Số điện thoại tài xế"}
                        isRequire={true}
                        data={data}
                        setData={setData}
                        objectKey={"phone"}
                    />
                    <DashboardTextInput
                        textType={"number"}
                        title={"Số chứng minh nhân dân"}
                        placeholder={"Số chứng minh nhân dân tài xế"}
                        isRequire={true}
                        data={data}
                        setData={setData}
                        objectKey={"idenityCard"}
                    />
                    <div className="flex-center" style={{ marginTop: '40px' }}>
                        <button className="create-box-btn btn btn-outline-success">
                            Tạo tài xế
                        </button>
                    </div>


                </form>

            </div>
        </div >

    )
}