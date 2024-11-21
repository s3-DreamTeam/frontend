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
        //console.log("HEALTH: Authenticated? ", keycloak.authenticated);

        /*
        if (keycloak.authenticated) {
            console.log("HEALTH: Expired? ", keycloak.isTokenExpired(60));
            if (keycloak.isTokenExpired(60)) {
                console.warn("trying to renew the token...");
                keycloak.updateToken(61).finally(() => {
                    console.log('KEYCLOAK: got a new token?');
                }).catch(() => {
                    console.warn("KEYCLOAK: FAILED TO RENEW EXPIRED TOKEN :(");
                });
            }
        }
        */
    }

    return true;
};

export default HandleUserLoggedInStatus;