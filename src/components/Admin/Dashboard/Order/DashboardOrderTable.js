import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DataGrid } from '@mui/x-data-grid';
import CustomPagination from './CustomPagination';
import CustomNoRowsOverlay from './CustomNoRowsOverlay';
import CustomToolbar from './DashboardConfigToolBar';
import { useSelector, useDispatch } from 'react-redux';
import requestAPI from '../../../../apis';
import { useSnackbar } from 'notistack';
import { CallBackGetOrder, closeStatusView } from '../../../../features/dashboard/order/orderSlice';
import DashboardOrderControl from './DashboardOrderControl';
import CustomLoadingOverlay from './CustomLoadingOverlay';
import DashboardDialog from './DashboardDialog';

export default function DashboardOrderTable(props) {
    const orderUpdate = useSelector(state => state.order.callbackGet)
    const statusView = useSelector(state => state.order.statusOrderView)
    // const orderView = useSelector(state => state.order.orderView)
    const [order, setOrder] = useState([])
    const [constOrder, setConstOrder] = useState([])
    const [selection, setSelection] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const { enqueueSnackbar } = useSnackbar();
    const dispatch = useDispatch();
    useEffect(() => {
        setIsLoading(true)
        getOrders();
    }, [orderUpdate])
    const getOrders = async () => {
        const data = await requestAPI('/orders', 'GET')
            .then(res => {
                if (res) {
                    setOrder(res.data?.data)
                    setConstOrder(res.data?.data)
                    setIsLoading(false)
                }
            })
            .catch(err => console.log(err))
        return data
    }
    const deleteOnClick = () => {
        if (selection.length > 0) {
            RemoveOrder({ idList: selection }).then(res => {
                if (res) {
                    dispatch(CallBackGetOrder());
                    enqueueSnackbar('Xóa hóa đơn thành công', {
                        persist: false,
                        variant: 'success',
                        preventDuplicate: true,
                        autoHideDuration: 3000,
                    })
                }
            }).catch(err => console.log(err))
        } else {
            enqueueSnackbar('Vui lòng chọn hóa đơn muốn xóa', {
                persist: false,
                variant: 'error',
                preventDuplicate: true,
                autoHideDuration: 3000,
            })
        }
    }
    const RemoveOrder = async (list) => {
        const data = await requestAPI(`/order/delete`, 'DELETE', list)
        return data
    }
    const searchOnSubmit = (event) => {
        event.preventDefault()
    }
    const searchOnChange = (event) => {
        const searchInput = event.target.value
        const search = []
        if (searchInput !== '') {
            for (let i in constOrder) {
                if ((constOrder[i].customerPhone).includes(searchInput)) {
                    search.push(constOrder[i])
                }
            }
            setOrder(search)
        } else {
            setOrder(constOrder)
        }

    }

    const steps = ['Lưu Kho', 'Đang Vận Chuyển', 'Đã Giao', 'Đã Hủy'];
    // function ColorlibStepIcon(props) {
    //     const { active, completed, className } = props;

    //     const icons = {
    //         1: <SettingsIcon />,
    //         2: <GroupAddIcon />,
    //         3: <VideoLabelIcon />,
    //     };

    //     return (
    //         <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
    //             {icons[String(props.icon)]}
    //         </ColorlibStepIconRoot>
    //     );
    // }
    // function QontoStepIcon(props) {
    //     const { active, completed, className } = props;

    //     return (
    //         <QontoStepIconRoot ownerState={{ active }} className={className}>
    //             {completed ? (
    //                 <Check className="QontoStepIcon-completedIcon" />
    //             ) : (
    //                 <div className="QontoStepIcon-circle" />
    //             )}
    //         </QontoStepIconRoot>
    //     );
    // }
    const closeDialog = () => {
        dispatch(closeStatusView())
    }
    return (
        <div className="topfive flex-col" style={{ width: '100%' }}>
            <div className={`headerbox flex-center ${props.color}`}>
                <FontAwesomeIcon icon={props.icon} className="icon" />
            </div>
            <div className="top-location-container">
                <div className="headerbox-header">
                    <p>{props.title}</p>
                </div>
                <div className="topfive-content flex-col">
                    <DashboardOrderControl
                        addController={props.setOpenCreateFunc}
                        deleteController={deleteOnClick}
                        searchOnChange={searchOnChange}
                        searchController={searchOnSubmit}
                    />
                    <div style={{ height: 400, width: "100%" }}>
                        <DataGrid
                            components={{
                                Toolbar: CustomToolbar,
                                Pagination: CustomPagination,
                                NoRowsOverlay: CustomNoRowsOverlay,
                                LoadingOverlay: CustomLoadingOverlay
                            }}
                            loading={isLoading}
                            columns={props.table}
                            rows={order}
                            pagination
                            pageSize={5}
                            rowsPerPageOptions={[5]}
                            onSelectionModelChange={(newSelectionModel) => {
                                setSelection(newSelectionModel)
                            }}
                            checkboxSelection
                        />
                        <DashboardDialog
                            open={statusView}
                            onClose={closeDialog}
                            steps={steps}
                            titleLabel={"Lịch sử đơn hàng"}
                        />
                        {/* <Dialog
                            open={statusView}
                            TransitionComponent={Transition}
                            keepMounted
                            onClose={() => closeDialog()}
                            aria-describedby="alert-dialog-slide-description"
                        >
                            <DialogTitle classes={"Mui-headerDialog"}></DialogTitle>
                            <DialogContent>
                                <DialogContentText id="alert-dialog-slide-description">
                                    <Stack sx={{ width: '100%', maxWidth: 400 }} spacing={4}>
                                        <Stepper alternativeLabel activeStep={1} style={{ display: 'flex', flexDirection: 'column' }}>
                                            {steps.map((label) => (
                                                <Step key={label}>
                                                    <StepLabel sx={{ mt: 1, mr: 1 }}>{label}</StepLabel>
                                                    <Typography sx={{ mt: 1, mr: 1, fontSize: '14px' }}>{'21-09-2021'}</Typography>
                                                </Step>
                                            ))}
                                        </Stepper>
                                    </Stack>
                                </DialogContentText>
                            </DialogContent>

                        </Dialog> */}
                    </div>

                </div>
            </div>
        </div>
    )
}