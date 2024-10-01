import { useSelector } from "react-redux";
import KeycloakErrorPage from "./pages/Keycloak Pages/keycloakErrorPage";
import KeycloakLoadingPage from "./pages/Keycloak Pages/keycloakLoadingPage";
import NotLoggedInPage from "./pages/Keycloak Pages/notLoggedInPage";

const KeycloakPages = () => {
    const isInit = useSelector((state) => state.keycloak.isInit);
    const error = useSelector((state) => state.keycloak.error);

    console.log(error);

    return (
        <>
            {error
                ? <KeycloakErrorPage message={error} />
                : (isInit
                    ? <NotLoggedInPage />
                    : <KeycloakLoadingPage />
                )
            }
        </>
    );
};

export default KeycloakPages;