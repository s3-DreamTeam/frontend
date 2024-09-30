import { CloseRounded, RefreshRounded } from "@mui/icons-material";
import { Alert, IconButton, Snackbar } from "@mui/material";
import { useState } from "react";


const ProcessStatusSnackBar = ({
    status,
    attributes,
    onRetry,
    onCancel,
    onClose = () => { },
}) => {
    const [oldStatus, setStatus] = useState('hidden');
    const [isShown, setShownState] = useState(false);

    let propsToUse = {};
    let severity = '';
    let variant = 'standard';

    switch (status) {
        default:
            break;

        case ('loading'):
            propsToUse = attributes.loading;
            severity = "info";
            break;

        case ('error'):
            propsToUse = attributes.error;
            variant = 'filled';
            severity = "error";
            break;

        case ('success'):
            propsToUse = attributes.success;
            variant = 'filled';
            severity = "success";
            break;
    }

    if (status !== oldStatus) {
        setStatus(status);
        setShownState(true);
    }

    function handleClose(event, reason) {
        if (reason === 'clickaway' && !propsToUse.canClickAway) {
            return;
        }
        onClose(event, reason);
        setShownState(false);
    }

    return (
        <Snackbar
            open={isShown}
            onClose={handleClose}
            message={propsToUse.message}
            anchorOrigin={{ horizontal: "right", vertical: 'bottom' }}
            autoHideDuration={propsToUse.autoHideDuration}
            sx={{
                animation: status === 'error' ? 'errorShake 0.25s ease-out 1' : null
            }}
        >
            <Alert
                className={status === 'loading' ? "loading-snackbar" : null}
                onClose={handleClose}
                severity={severity}
                variant={variant}
                action={
                    <div
                        style={{
                            marginTop: '-1px'
                        }}
                    >
                        {propsToUse.canRetry ? (
                            <IconButton
                                size="small"
                                color="inherit"
                                onClick={onRetry}
                            >
                                <RefreshRounded fontSize="small" />
                            </IconButton>
                        ) : null}
                        {propsToUse.hasCloseButton ? (
                            <IconButton
                                size="small"
                                onClick={handleClose}
                                color="inherit"
                            >
                                <CloseRounded fontSize="small" />
                            </IconButton>
                        ) : null}
                    </div>
                }
            >
                {propsToUse.message}
            </Alert>
        </Snackbar>
    );
};

export default ProcessStatusSnackBar;