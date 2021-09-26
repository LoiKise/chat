import { Dialog, DialogContent, DialogTitle, Stack, Step, StepLabel, Stepper } from '@mui/material'
import React from 'react'
import { DialogContentText, Typography } from '@material-ui/core';
import Transition from './DashboardTransition';
import moment from 'moment'
export default function DashboardDialog({ open, onClose, steps, titleLabel, orderView }) {
    console.log({ orderView });
    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={() => onClose()}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle >{titleLabel}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    <Stack sx={{ width: '100%', maxWidth: 400 }} spacing={4}>
                        <Stepper alternativeLabel activeStep={orderView?.deliveryHistory?.length} style={{ display: 'flex' }}>
                            {orderView?.deliveryHistory?.map((item, key) => (
                                <Step key={key}>
                                    <StepLabel sx={{ mt: 1, mr: 1 }}>{item?.status}</StepLabel>
                                    <Typography sx={{ mt: 1, mr: 1, fontSize: '14px' }}>{moment(item?.createdAt).format("DD-MM-YYYY HH:mm:ss")}</Typography>
                                </Step>
                            ))}
                        </Stepper>
                    </Stack>
                </DialogContentText>
            </DialogContent>

        </Dialog>
    )
}
