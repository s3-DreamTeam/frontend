import { Stack, CircularProgress, IconButton } from "@mui/material";
import ComponentCard from "../componentCard";
import PageLayout from "../pageLayout/pageLayout";
import { useEffect, useState } from "react";
import axios from "axios";
import ErrorPage from "../errorPage";
import { RefreshRounded } from "@mui/icons-material";

const MachineManager = () => {
    const [machines, setMachines] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [retryState, setRetry] = useState(false);
    const [newUserState, setNewUserState] = useState(false);

    console.log(machines);

    function retry() {
        setLoading(true);
        setError(null);
        setMachines([]);
        setRetry(!retryState);
    }

    function add() {
        setLoading(true);
        setError(null);
        setNewUserState(!newUserState);
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    useEffect(() => {
        const fetchMachines = async () => {
            setMachines([]);
            try {
                await sleep(1000);
                const response = await axios.get('http://localhost:8888/api/getallusagers');
                setMachines(response.data);
                console.log(response.data);
                console.log(response);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
            console.log(machines);
        };

        fetchMachines();
    }, [retryState]);

    useEffect(() => {
        const fetchMachines = async () => {
            try {
                await sleep(1000);
                await axios.put('http://localhost:8888/api/insertUsager');
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchMachines();
    }, [newUserState]);

    return (
        <PageLayout
            title="Machine Manager"
            onRefresh={retry}
            onAdd={add}
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
                                    onClick={retry}
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
                            {machines.map((nom, index) => (
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