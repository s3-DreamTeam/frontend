import * as React from 'react';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { DialogTransition } from './Transition/dialogTransition';
import { CustomDialog } from './Foundation/customDialog';


export default function DeleteDialog({
    onClose,
    onConfirm,
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
                    color='warning'
                    fontWeight={600}
                >
                    {"Delete " + title + "?"}
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
                        color="inherit"
                        onClick={onConfirm}
                        sx={{
                            borderRadius: '1.5rem',
                            width: '25%'
                        }}
                    >
                        yes
                    </Button>
                    <Button
                        size="large"
                        variant="contained"
                        color="primary"
                        onClick={onClose}
                        sx={{
                            borderRadius: '1.5rem',
                            width: '25%'
                        }}
                    >
                        cancel
                    </Button>
                </DialogActions>
            </CustomDialog>
        </React.Fragment>
    );
}