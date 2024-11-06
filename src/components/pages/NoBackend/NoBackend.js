import { ErrorRounded } from "@mui/icons-material";
import HandleUserLoggedInStatus from "../../../utils/verifyLoggedIn";
import FullPageCard from "../../fullPageCard";
import { useState } from "react";
import QuestionDialog from "../../Dialogs/QuestionDialog";
import { useDispatch } from "react-redux";
import { setSimulated } from "../../../store/simulatedEndpointSlice";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../../../utils/routerRouteManager";

const NoBackend = () => {
    const [shown, setShown] = useState(true);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    HandleUserLoggedInStatus();

    function setToSimulated() {
        dispatch(setSimulated(true));
        setShown(false);
        navigate(AppRoutes.Analytics);
    }

    return (
        <>
            <FullPageCard
                title="No Backend :("
                subtitle="Snacky couldn't perform a valid health check on the backend... Try refreshing? Maybe we're doing maintenance? Or perhaps Charles has refactored something again..."
                color="error"
                header={
                    <ErrorRounded
                        style={{
                            fontSize: 120,
                        }}
                        sx={{
                            animation: 'errorLock 2.5s ease-out infinite, errorShake 0.25s ease-out 2'
                        }}
                    />
                }
            />
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