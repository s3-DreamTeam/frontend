import PageLayout from "../../pageLayout/pageLayout";
import { useEffect, useState } from "react";
import { FetchAllUsers, PostNewUser } from "../../../api/requests";
import { useSelector } from "react-redux";
import ProcessStatusSnackBar from "../../processStatusSnackbar";
import WholePageLoading from "../../wholePageLoading";
import MachinesManagerMainLayout from "./machineManagerMainLayout";
import MachineManagerFetchError from "./machineManagerFetchError";
import HandleUserLoggedInStatus from "../../../utils/verifyLoggedIn";

const MachineManager = () => {

    HandleUserLoggedInStatus();

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
                disableRefresh={machinesLoading}
                disableSort={allFetchedUsers.length === 0}
                disableList={allFetchedUsers.length === 0}
                disableFilter={allFetchedUsers.length === 0}
                onRefresh={retryUserFetch}
                onAdd={addNewUser}
                isRefreshing={machinesLoading}
                childrens={
                    machinesLoading
                        ? (<WholePageLoading />)
                        : (machinesError
                            ? (<MachineManagerFetchError errorName={machinesError} onRetryClick={retryUserFetch} />)
                            : (<MachinesManagerMainLayout machines={allFetchedUsers} />))
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