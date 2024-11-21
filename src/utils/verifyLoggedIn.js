import { useLocation, useNavigate } from "react-router-dom";
import { HealthCheck } from "../api/requests/interface/Tests/health";
import { AppRoutes } from "./routerRouteManager";
import { keycloakInstance } from "../api/keycloak";

let technicalDebtAvoidSpam_Loading = false;

const HandleUserLoggedInStatus = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const keycloak = keycloakInstance();

    if (technicalDebtAvoidSpam_Loading === false) {
        HealthCheck({
            onStart: () => {
                technicalDebtAvoidSpam_Loading = true;
            },
            onEnd: () => {
                technicalDebtAvoidSpam_Loading = false;
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

        // - Trying to check if your token is valid - //
        console.log("HEALTH: Authenticated? ", keycloak.authenticated);
        console.log("HEALTH: Expired? ", keycloak.isTokenExpired(60));
    }

    return true;
};

export default HandleUserLoggedInStatus;