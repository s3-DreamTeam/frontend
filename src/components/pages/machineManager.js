import { Container, Stack, CircularProgress, Box, Typography, Button, IconButton } from "@mui/material";
import ComponentCard from "../componentCard";
import EmptyPage from "../emptyPage";
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

    function retry() {
        setLoading(true);
        setError(null);
        setMachines([]);
        setRetry(!retryState);
    }

    useEffect(() => {
        const fetchMachines = async () => {
            try {
                const response = await axios.get('http://localhost:8888/api/getallusagers'); // Replace with your API endpoint
                setMachines(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchMachines();
    }, [retryState]);

    return (
        <PageLayout
            title="Machine Manager"
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
                            spacing={'1rem'}
                            direction={'row'}
                            sx={{ flexWrap: 'wrap' }}
                        >
                            {machines.map(machine => (
                                <ComponentCard
                                    key={machine.id} // Assuming each machine has a unique ID
                                    title={machine.name} // Adjust based on the structure of your machine data
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