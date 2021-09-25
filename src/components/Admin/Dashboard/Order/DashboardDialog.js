import { Dialog, DialogContent, DialogTitle, Stack, Step, StepLabel, Stepper } from '@mui/material'
import React from 'react'
import { DialogContentText, Typography } from '@material-ui/core';
import Transition from './DashboardTransition';

export default function DashboardDialog({ open, onClose, steps, titleLabel }) {
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
                        <Stepper alternativeLabel activeStep={1} style={{ display: 'flex' }}>
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

        </Dialog>
    )
}
