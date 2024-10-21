import * as React from 'react';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { DialogTransition } from './Transition/dialogTransition';
import { CustomDialog } from './Foundation/customDialog';

export default function SuccessDialog({
    onClose,
    title = null,
    message = null,
    open
}) {

    return (
        <React.Fragment>
            <CustomDialog
                open={open}
                TransitionComponent={DialogTransition}
                keepMounted
                onClose={onClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle
                    fontWeight={600}
                    color='success'
                >
                    {title}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText
                        id="alert-dialog-slide-description"
                        color='textPrimary'
                    >
                        {message}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        size="large"
                        variant="contained"
                        color="success"
                        onClick={onClose}
                        sx={{
                            borderRadius: '1.5rem',
                            width: '25%'
                        }}
                    >
                        Ok
                    </Button>
                </DialogActions>
            </CustomDialog>
        </React.Fragment>
    );
}