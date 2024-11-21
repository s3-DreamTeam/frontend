import { MonitorHeartRounded } from "@mui/icons-material";
import HandleUserLoggedInStatus from "../../../utils/verifyLoggedIn";
import FullPageCard from "../../fullPageCard";
import { useEffect, useState } from "react";
import QuestionDialog from "../../Dialogs/QuestionDialog";
import { useDispatch } from "react-redux";
import { setSimulated } from "../../../store/simulatedEndpointSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { AppRoutes } from "../../../utils/routerRouteManager";
import { Button, LinearProgress } from "@mui/material";
import { HealthCheck } from "../../../api/requests/interface/Tests/health";

const NoBackend = () => {
    const [shown, setShown] = useState(true);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const dispatch = useDispatch();
    HandleUserLoggedInStatus();

    function setToSimulated() {
        dispatch(setSimulated(true));
        setShown(false);
        navigate(AppRoutes.Home);
    }

    function retryClicked() {
        setLoading(true);
        HealthCheck({
            onEnd: () => {
                setLoading(false);
            },
            onError: () => {
                if (location.pathname !== AppRoutes.NoBackend) {
                    navigate(AppRoutes.NoBackend);
                }
            },
            onSuccess: () => {
                if (location.pathname === AppRoutes.NoBackend) {
                    navigate(AppRoutes.Analytics);
                }
            }
        });
    }

    return (
        <>
            <FullPageCard
                title="No Backend :("
                subtitle="Snacky couldn't perform a valid health check on the backend... Try refreshing? Maybe we're doing maintenance? Or perhaps Charles has refactored something again..."
                color="error"
                header={
                    <MonitorHeartRounded
                        style={{
                            fontSize: 120,
                        }}
                        sx={{
                            animation: 'errorLock 2.5s ease-out infinite, errorShake 0.25s ease-out 2'
                        }}
                    />
                }
            >
                {loading
                    ? <LinearProgress
                        sx={{
                            width: '25%',
                            margin: '2rem'
                        }}
                    />
                    : <div
                        style={{
                            display: 'flex',
                            width: '50%',
                            justifyContent: 'center'
                        }}
                    >
                        <Button
                            size="large"
                            variant="contained"
                            color="primary"
                            onClick={setToSimulated}
                            sx={{
                                borderRadius: '1.5rem',
                                width: 'auto',
                                minWidth: '6rem',
                                margin: '2rem'
                            }}
                        >
                            simulate
                        </Button>
                        <Button
                            size="large"
                            variant="contained"
                            color="inherit"
                            onClick={retryClicked}
                            sx={{
                                borderRadius: '1.5rem',
                                width: 'auto',
                                minWidth: '6rem',
                                margin: '2rem'
                            }}
                        >
                            retry
                        </Button>
                    </div>}
            </FullPageCard>
            <QuestionDialog
                onClose={() => setShown(false)}
                onConfirm={setToSimulated}
                title="Simulate instead?"
                message="Since the backend is having issues, do you wish to simulate the behaviour of the application through the web browser? Your data won't be saved if you refresh or quit the page."
                open={shown}
            />
        </>
    );
};

export default NoBackend;