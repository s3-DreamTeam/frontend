import { Stack, CircularProgress, IconButton } from "@mui/material";
import ComponentCard from "../componentCard";
import PageLayout from "../pageLayout/pageLayout";
import { useEffect, useState } from "react";
import axios from "axios";
import ErrorPage from "../errorPage";
import { RefreshRounded } from "@mui/icons-material";
import { FetchAllUsers, PostNewUser } from "../../api/requests";
import { useSelector } from "react-redux";

const MachineManager = () => {

    const allFetchedUsers = useSelector((state) => state.allFetchedUsers.value);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    function onRequestStart() {
        setLoading(true);
        setError(null);
    }

    function onRequestEnd() {
        setLoading(false);
    }

    function onRequestError(err) {
        setError(err.message);
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

            onError: onRequestError,
            onEnd: onRequestEnd,
            onStart: onRequestStart,
        });
    }

    // Calls the fetch function only on load.
    useEffect(() => {
        retryUserFetch();
    }, []);

    return (
        <PageLayout
            title="Machine Manager"
            onRefresh={retryUserFetch}
            onAdd={addNewUser}
            childrens={
                loading
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
                    : (error
                        ? (<ErrorPage
                            header="Error"
                            subtitle={error}
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
    );
};

/*
    <EmptyPage
        header="You have no machines"
        subtitle='Ensure you created templates before adding new machines to your inventory.'
    />
*/

export default MachineManager;