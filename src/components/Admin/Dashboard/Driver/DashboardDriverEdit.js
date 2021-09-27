import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { useSnackbar } from 'notistack';
import { useDispatch } from 'react-redux';
import requestAPI from '../../../../apis';
import { useSelector } from 'react-redux';
import DashboardTextInput from './../Order/DashboardTextInput';
import { CallBackGetNews } from '../../../../features/dashboard/news/newsSlice.js';
import DashboardSelectInput from './../Order/DashboardSelectInput';
export default function DashboardUserCreate(props) {
    const { enqueueSnackbar, } = useSnackbar();
    const createForm = useRef();
    const dispatch = useDispatch();
    const update = useSelector(state => state.news.newsUpdate)
    const [sltDriver, setSltDriver] = useState(false);
    const [drivers, setDrivers] = useState([]);
    const [data, setData] = useState({
        nameJob: "",
        salaryBefore: 0,
        salaryAfter: 0,
        degree: "",
        address: "",
        position: "",
        quantity: 0,
        require: "",
        thumbnails: "",
    })
    //Handle Event and Request DataBase

    useEffect(() => {
        console.log(update);
        getDrivers();
        if (update) {
            setData(update)
        }
    }, [update])
    const getDrivers = async () => {
        const data = await requestAPI('/drivers/all', 'GET')
            .then(res => {
                if (res) {
                    setDrivers(res.data?.data)
                }
            })
            .catch(err => console.log(err))
        return data
    }
    const handleClose = () => {
        setSltDriver(false);
    };
    const handleOpenSltDriver = () => {
        setSltDriver(true);
    };
    const updateNews = async (dataFormat) => {
        const data = await requestAPI(`/job/${dataFormat?.id}`, 'PUT', dataFormat)
        return data
    }
    const onSubmit = (event) => {
        event.preventDefault()

        if (!data.nameJob || !data.salaryBefore || !data.salaryAfter || !data.degree || !data.address
            || !data.position || !data.require || !data.thumbnails) {
            enqueueSnackbar('Không được bỏ trống các trường, vui lòng kiểm tra lại thông tin vừa nhập', {
                persist: false,
                variant: 'warning',
                preventDuplicate: true,
                autoHideDuration: 3000,
            })
        } else {
            updateNews(data).then(res => {
                if (res.data) {
                    dispatch(CallBackGetNews());
                    enqueueSnackbar('Cập nhật tin tuyển dụng thành công', {
                        persist: false,
                        variant: 'success',
                        preventDuplicate: true,
                        autoHideDuration: 3000,
                    })
                    props.setCloseEditFunc(false);
                }
            })
            enqueueSnackbar('Cập nhật tin tuyển dụng thành công', {
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
                        Thông tin đơn giao hàng
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
                <form onSubmit={onSubmit} encType="multipart/form-data" ref={createForm} className="db-form-input">
                    {/* Sender Infomation */}

                    <DashboardTextInput
                        textType={"text"}
                        title={"Tên công việc"}
                        placeholder={"Công việc cần tuyển dụng"}
                        isRequire={true}
                        data={data}
                        setData={setData}
                        objectKey={"nameJob"}
                    />

                    <DashboardSelectInput
                        title={"Tài xế"}
                        data={data}
                        setData={setData}
                        handleClose={handleClose}
                        sltOpen={sltDriver}
                        handleOpenSlt={handleOpenSltDriver}
                        subTitle={"Chọn tài xế :"}
                        listSelect={drivers}
                        objectKey={"driverId"}
                        objectNameKey={null}
                    />
                    <div className="flex-center" style={{ marginTop: '40px' }}>
                        <button className="create-box-btn btn btn-outline-success">
                            Cập nhật đơn giao hàng
                        </button>
                    </div>


                </form>

            </div>
        </div >

    )
}