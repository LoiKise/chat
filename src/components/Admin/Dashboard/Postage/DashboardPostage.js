import React, { useState, useEffect, useCallback } from 'react'
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import { Button, Input } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import requestAPI from '../../../../apis';
import { useSnackbar } from 'notistack';
import { useHistory } from 'react-router-dom';
import CustomNoRowsOverlay from '../Order/CustomNoRowsOverlay';
export const DashboardPostage = () => {
    const [displayImage, setDisplayImage] = useState('');
    const { enqueueSnackbar } = useSnackbar();
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(true)
    // Get Image 
    const getPostage = useCallback(
        async () => {
            const data = await requestAPI('/pricelist', 'GET')
                .then(res => {
                    if (res) {
                        setDisplayImage(res.data[0]?.priceList)
                    }
                })
                .catch(err => {
                    if (err) {
                        if (err.response.status === 403 || err.response.status === 401) {
                            history.push('/dashboard')
                            enqueueSnackbar('Đã phát hiện lỗi truy cập, vui lòng đăng nhập lại', {
                                persist: false,
                                variant: 'error',
                                preventDuplicate: true,
                                autoHideDuration: 3000,
                            })
                        }
                    }
                })
            return data
        }, [enqueueSnackbar, history])
    useEffect(() => {
        getPostage();
    }, [getPostage])

    // Upload Image Post
    const handleChangeImage = async (e) => {
        setLoading(true);
        const files = e.target.files[0]
        const data = new FormData()
        data.append('file', files)
        data.append('upload_preset', 'mbookImage')
        axios.post('https://api.cloudinary.com/v1_1/remalw/upload', data)
            .then(res => {
                setLoading(false);
                setStatus(false);
                setDisplayImage(res.data.url)
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
                // setImgLoading(false);
            })

    };
    const uploadPostage = () => {
        requestAPI('/pricelist', 'POST', { priceList: displayImage })
            .then(res => {
                if (res) {
                    setStatus(true);
                    enqueueSnackbar('Cập nhật bảng giá thành công', {
                        persist: false,
                        variant: 'success',
                        preventDuplicate: true,
                        autoHideDuration: 3000,
                    })
                }
            })
            .catch(err => {
                if (err.response?.status === 403 || err.response?.status === 401) {
                    history.push('/dashboard')
                    enqueueSnackbar('Đã phát hiện lỗi truy cập, vui lòng đăng nhập lại', {
                        persist: false,
                        variant: 'error',
                        preventDuplicate: true,
                        autoHideDuration: 3000,
                    })
                }
                if (err.response?.status === 500) {
                    enqueueSnackbar('Hình ảnh không hợp lệ', {
                        persist: false,
                        variant: 'error',
                        preventDuplicate: true,
                        autoHideDuration: 3000,
                    })
                }
            })
    }
    return (
        <div className="topfive flex-col dashboard-product" style={{ width: '100%' }}>
            <div className={`headerbox flex-center pink`} style={{ margin: '0 30px' }}>
                <FontAwesomeIcon icon={faMoneyBill} className="icon" />
            </div>
            <div className="top-location-container">
                <div className="headerbox-header">
                    <p>Bảng giá</p>
                </div>
                <div className="topfive-content flex-col flex-center">
                    <div className="dashboard-addnew-search pb-3">
                        <label htmlFor="icon-button-file">
                            <Input accept="image/*" id="icon-button-file" type="file"
                                onChange={handleChangeImage}
                                style={{ display: 'none' }} />
                            <Button variant="contained" component="span">
                                Tải bảng giá mới
                            </Button>
                        </label>
                        <Button
                            disabled={status}
                            variant="contained"
                            component="span"
                            className="ml-2"
                            color="success"
                            onClick={() => uploadPostage()}>
                            Cập nhật
                        </Button>
                    </div>
                    <div style={{ width: '460px', height: '460px' }}>
                        {

                            displayImage ?
                                <div className="dashboard-upload-image" style={{ backgroundImage: `url(${displayImage})` }} /> :
                                <CustomNoRowsOverlay />
                        }
                    </div>


                </div>
            </div>
        </div>
    )
}
