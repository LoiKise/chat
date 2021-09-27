import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Transition from './DashboardTransition';
export default function DashboardDialogConfirm({ open, handleCloseDialogDelete, handleDelete }) {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const confirmDelete = () => {
        handleDelete();
        handleCloseDialogDelete();
    }
    return (
        <div>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={() => handleCloseDialogDelete()}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">
                    {'Nhắc nhở'}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Bạn chắc chắn muốn xóa các lựa chọn này ?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleCloseDialogDelete}>
                        Hủy bỏ
                    </Button>
                    <Button onClick={() => confirmDelete()} autoFocus>
                        Đồng ý
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
