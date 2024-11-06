import { useLocation, useNavigate } from "react-router-dom";
import { HealthCheck } from "../api/requests/interface/Tests/health";
import { AppRoutes } from "./routerRouteManager";

const HandleUserLoggedInStatus = () => {
    const navigate = useNavigate();
    const location = useLocation();

    HealthCheck({
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

    return true;
};

export default HandleUserLoggedInStatus;