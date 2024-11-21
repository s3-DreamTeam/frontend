import { useSelector } from "react-redux";
import KeycloakErrorPage from "./pages/Keycloak Pages/keycloakErrorPage";
import KeycloakLoadingPage from "./pages/Keycloak Pages/keycloakLoadingPage";
import NotLoggedInPage from "./pages/Keycloak Pages/notLoggedInPage";
import { useEffect, useState } from "react";

const KeycloakPages = () => {
    const [init, setInit] = useState(true);
    const isInit = useSelector((state) => state.keycloak.isInit);
    const error = useSelector((state) => state.keycloak.error);

    // Trying to get rid of ghost renders.
    useEffect(() => {
        setInit(true);
    }, []);

    return (
        <>
            {error && init
                ? <KeycloakErrorPage message={error} />
                : (isInit && init
                    ? <NotLoggedInPage />
                    : <KeycloakLoadingPage />
                )
            }
        </>
    );
};

export default KeycloakPages;