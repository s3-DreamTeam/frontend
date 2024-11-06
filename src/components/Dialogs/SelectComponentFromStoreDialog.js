import * as React from 'react';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { DialogTransition } from './Transition/dialogTransition';
import { CustomDialog } from './Foundation/customDialog';
import { CircularProgress, Stack, Typography } from '@mui/material';
import ErrorDialog from './ErrorDialog';


export default function SelectComponentFromStoreDialog({
    onClose,
    onConfirm,
    title = "Nothing :(",
    message = "It would appear as if you have nothing to choose from",
    components,
    ComponentCard,
    open,
    loading = false,
}) {
    let noComponents = !components;
    if (components !== null) {
        if (Object.keys(components).length === 0) {
            noComponents = true;
        }
    }

    if (noComponents && !loading) {
        return (
            <ErrorDialog
                onClose={onClose}
                title={title}
                message={message}
                open={open}
            />
        );
    }

    function handleComponentClick(e) {
        onConfirm(e);
    }

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
                    color='transparent'
                    sx={{
                        zIndex: (theme) => theme.zIndex.drawer + 1,
                        backdropFilter: 'blur(30px)',
                        backgroundColor: '#00000000'
                    }}
                >
                    <Typography
                        variant="h4"
                        align="center"
                        color='textPrimary'
                        backgroundColor="#00000000"
                    >
                        {loading ? "Loading..." : "Choose a template"}
                    </Typography>
                </DialogTitle>
                <DialogContent>
                    {loading
                        ? (
                            <div
                                style={{ padding: '3rem' }}
                            >
                                <CircularProgress />
                            </div>
                        )
                        : (<Stack
                            spacing={'2rem'}
                            direction={'row'}
                            justifyContent={'space-evenly'}
                            useFlexGap
                            sx={{ flexWrap: 'wrap', padding: '0rem 2rem 2rem 2rem' }}
                        >
                            {Object.entries(components).map(([id, value]) => (
                                <ComponentCard
                                    key={id}
                                    object={value}
                                    onClick={handleComponentClick}
                                    onLongClick={() => { }}
                                    size="small"
                                />
                            ))}
                        </Stack>)}

                </DialogContent>
            </CustomDialog>
        </React.Fragment>
    );
}