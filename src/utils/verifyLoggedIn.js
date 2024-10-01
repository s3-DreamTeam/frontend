import { useNavigate } from "react-router-dom";
import { useKeycloak } from "../api/keycloakConfig";
import { AppRoutes } from "./routerRouteManager";


const HandleUserLoggedInStatus = () => {
    /*
    const { keycloak, authenticated } = useKeycloak();
    const navigate = useNavigate();

    if (!authenticated) {
        console.log('navigating?');
        navigate(AppRoutes.NotLoggedIn);
    }
        */
    return true;
};

export default HandleUserLoggedInStatus;