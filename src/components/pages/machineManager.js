import { Stack, CircularProgress, IconButton } from "@mui/material";
import ComponentCard from "../componentCard";
import PageLayout from "../pageLayout/pageLayout";
import { useEffect, useState } from "react";
import ErrorPage from "../errorPage";
import { RefreshRounded } from "@mui/icons-material";
import { FetchAllUsers, PostNewUser } from "../../api/requests";
import { useSelector } from "react-redux";
import ProcessStatusSnackBar from "../processStatusSnackbar";

const MachineManager = () => {

    const allFetchedUsers = useSelector((state) => state.allFetchedUsers.value);
    const [machinesLoading, setMachinesLoading] = useState(true);
    const [machinesError, setMachinesError] = useState(null);
    const [addLoading, setAddLoading] = useState(false);
    const [addError, setAddError] = useState(null);

    const AddUserProcessSnackbarProps = {
        success: {
            message: "Created a new user!",
            canClickAway: true,
            hasCloseButton: true,
            canRetry: false,
            autoHideDuration: 2000
        },
        error: {
            message: addError,
            canClickAway: false,
            hasCloseButton: true,
            canRetry: true,
            autoHideDuration: null
        },
        loading: {
            message: 'Creating new user...',
            canClickAway: false,
            hasCloseButton: false,
            canRetry: false,
            autoHideDuration: null
        },
    };

    function onRequestStart() {
        setMachinesLoading(true);
        setMachinesError(null);
    }

    function onRequestEnd() {
        setMachinesLoading(false);
    }

    function onRequestError(err) {
        setMachinesError(err.message);
    }

    function retryUserFetch() {
        FetchAllUsers({
            onError: onRequestError,
            onEnd: onRequestEnd,
            onStart: onRequestStart,
        });
    }

    function addNewUser() {
        PostNewUser({
            email: 'itWorked!',
            name: 'itWorked!',
            lastName: 'itWorked!',

            onError: (err) => {
                setAddError(err.message);
            },
            onEnd: () => {
                setAddLoading(false);
            },
            onStart: () => {
                setAddLoading(true);
                setAddError(null);
            },
        });
    }

    // Calls the fetch function only on load.
    useEffect(() => {
        retryUserFetch();
    }, []);

    return (
        <>
            <PageLayout
                title="Machine Manager"
                onRefresh={retryUserFetch}
                onAdd={addNewUser}
                childrens={
                    machinesLoading
                        ? (
                            <Stack
                                direction='column'
                                justifyContent='center'
                                alignItems='center'
                                sx={{
                                    height: '100%'
                                }}
                            >
                                <CircularProgress
                                    size={80}
                                />
                            </Stack >
                        )
                        : (machinesError
                            ? (<ErrorPage
                                header="Fetch Error"
                                subtitle={machinesError}
                                actionButton={
                                    <IconButton
                                        size="small"
                                        onClick={retryUserFetch}
                                    >
                                        <RefreshRounded fontSize="large" />
                                    </IconButton>
                                }
                            />)
                            : (<Stack
                                spacing={'2rem'}
                                direction={'row'}
                                justifyContent={'space-evenly'}
                                useFlexGap
                                sx={{ flexWrap: 'wrap', padding: '0rem 2rem 2rem 2rem' }}
                            >
                                {allFetchedUsers.map((nom, index) => (
                                    <ComponentCard
                                        key={index}
                                        title={nom}
                                    />
                                ))}
                            </Stack>
                            ))
                }
            >
            </PageLayout>
            <ProcessStatusSnackBar
                status={addLoading ? 'loading' : (addError != null ? 'error' : 'hidden')}
                attributes={AddUserProcessSnackbarProps}
                onRetry={addNewUser}
            />
        </>
    );
};

/*
    <EmptyPage
        header="You have no machines"
        subtitle='Ensure you created templates before adding new machines to your inventory.'
    />
*/

export default MachineManager;