import { CloseRounded, RefreshRounded } from "@mui/icons-material";
import { Alert, Button, IconButton, LinearProgress, Snackbar } from "@mui/material";
import { useEffect, useState } from "react";


const ProcessStatusSnackBar = ({
    status,
    attributes,
    onRetry,
    onCancel,
    onClose = () => { },
}) => {
    const [oldStatus, setStatus] = useState('hidden');
    const [isShown, setShownState] = useState(false);
    const [progress, setProgress] = useState(100);

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

    useEffect(() => {
        if (isShown) {
            setProgress(100); // Reset progress when shown
            const duration = (propsToUse.autoHideDuration) || 1;
            const increment = 100 / (duration / 10);

            const timer = setInterval(() => {
                setProgress((prev) => {
                    if (prev <= 0) {
                        clearInterval(timer); // Stop when complete
                        return 0;
                    }
                    return prev - increment; // Update progress
                });
            }, 10); // Update every 10ms

            // Clean up on unmount or when the snackbar closes
            return () => {
                clearInterval(timer);
            };
        }
    }, [isShown, propsToUse.autoHideDuration]);


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
                sx={{
                    position: 'relative'
                }}
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
                {propsToUse.autoHideDuration === null
                    ? null
                    :
                    <div>
                        <div
                            style={{
                                position: 'absolute',
                                bottom: 0,
                                right: 0,
                                left: 0,
                                transformOrigin: 'center center',
                                content: '',
                            }}
                        >
                            <LinearProgress
                                variant="determinate"
                                color={severity}
                                value={progress}
                                sx={{
                                    "& .MuiLinearProgress-bar": {
                                        transition: "none"
                                    }
                                }}
                            />
                        </div>
                    </div>
                }
                {propsToUse.message}
            </Alert>
        </Snackbar>
    );
};

export default ProcessStatusSnackBar;