import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { useSnackbar } from 'notistack';
import { useDispatch } from 'react-redux';
import requestAPI from '../../../../apis';
import { useSelector } from 'react-redux';
import DashboardTextInput from './../Order/DashboardTextInput';
import { CallBackGetDriver } from '../../../../features/dashboard/driver/driverSlice';
export default function DashboardUserCreate(props) {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const createForm = useRef();
    const dispatch = useDispatch();
    const update = useSelector(state => state.order.orderUpdate)
    const [data, setData] = useState({
        name: "",
        age: "",
        phone: "",
        idenityCard: "",
    })

    //Handle Event and Request DataBase

    useEffect(() => {
        if (update) {
            setData(update)
        }
    }, [])
    const updateDriver = async (dataFormat) => {
        const data = await requestAPI(`/driver/${dataFormat?.id}`, 'PUT', dataFormat)
        return data
    }
    const onSubmit = (event) => {
        event.preventDefault()

        if (!data.name || !data.idenityCard || !data.age || !data.phone) {
            enqueueSnackbar('Không được bỏ trống các trường, vui lòng kiểm tra lại thông tin vừa nhập', {
                persist: false,
                variant: 'warning',
                preventDuplicate: true,
                autoHideDuration: 3000,
            })
        } else {
            updateDriver(data).then(res => {
                if (res.data) {
                    dispatch(CallBackGetDriver());
                }
            })
            enqueueSnackbar('Cập nhật tài xế thành công', {
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
                        Thông tin tài xế
                    </h2>
                    <div
                        className="btn btn-outline-danger"
                        onClick={() => {
                            props.setCloseEditFunc(false);
                        }}
                    >
                        <FontAwesomeIcon icon={faTimes} />
                    </div>
                </div>
                <form onSubmit={onSubmit} encType="multipart/form-data" ref={createForm}>
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
                            Cập nhật tài xế
                        </button>
                    </div>


                </form>

            </div>
        </div >

    )
}