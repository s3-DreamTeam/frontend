import Keycloak from "keycloak-js";
import { createContext, useContext, useEffect, useState, useMemo } from "react";

const initOptions = {
    realm: "usager",
    "auth-server-url": "http://localhost:8180/",
    "ssl-required": "external",
    clientId: "frontend",
    "public-client": true,
    "confidential-port": 0,
};

const KeycloakContext = createContext();

let keycloakInstance; // Singleton Keycloak instance

const KeycloakProvider = ({ children }) => {
    const [keycloak, setKeycloak] = useState(null);
    const [authenticated, setAuthenticated] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!keycloakInstance) {
            keycloakInstance = new Keycloak(initOptions); // Create instance only once
        }

        const initKeycloak = async () => {
            try {
                const authenticated = await keycloakInstance.init({ onLoad: 'login-required' });
                setKeycloak(keycloakInstance);
                setAuthenticated(authenticated);
            } catch (error) {
                console.error('Keycloak initialization failed:', error);
                setError(error);
            }
        };

        initKeycloak();

        return () => {
            // Cleanup if necessary
            // You may want to clear the Keycloak instance or perform any necessary cleanup here
        };
    }, []); // Empty dependency array ensures this effect runs only once

    // Memoize the context value
    const contextValue = useMemo(() => ({ keycloak, authenticated, error }), [keycloak, authenticated, error]);

    return (
        <KeycloakContext.Provider value={contextValue}>
            {children}
        </KeycloakContext.Provider>
    );
};

export const useKeycloak = () => useContext(KeycloakContext);


/*
export const keycloak = new Keycloak(initOptions);

export const InitKeycloak = () => {

    const Token = useSelector((state) => state.authenticated.token);
    const Error = useSelector((state) => state.authenticated.error);

    if (Error) return;
    if (Token) return;

    return keycloak.init({ onLoad: 'login-required' });
};

export const getKeycloak = () => keycloak;
*/