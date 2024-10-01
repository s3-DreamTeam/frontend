import { useSelector } from "react-redux";
import KeycloakErrorPage from "./pages/Keycloak Pages/keycloakErrorPage";
import KeycloakLoadingPage from "./pages/Keycloak Pages/keycloakLoadingPage";

const KeycloakPages = () => {
    const isInit = useSelector((state) => state.keycloak.isInit);
    const error = useSelector((state) => state.keycloak.error);

    return (
        <>
            {error
                ? <KeycloakErrorPage message={error} />
                : <KeycloakLoadingPage />
            }
        </>
    );
};

export default KeycloakPages;