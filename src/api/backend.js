import axios from "axios";
import { keycloakInstance } from "./keycloak";

/**
 * URL to the server with which the front end communicates.
 * Removes the need of copy pasting entire URLs for stuff.
 * Don't put '/' at the end.
 */
export const backendApi = axios.create(
    {
        baseURL: process.env.REACT_APP_SERVER_URL,
        timeout: process.env.REACT_APP_SERVER_TIMEOUT,
        headers: {
            //'Content-Type': 'application/json',
            //'Accept': 'application/json',
            'Content-Type': 'text/xml',
            'Accept': 'text/xml',
        }
    }
);

/**
 * # BackendHeader
 * Function that returns the header, which must be included, in all axios requests made towards the backend.
 * It will dynamically get the JWT bearer token from the current Keycloak instance, create a valid axios
 * config with it as the header, and return it to you.
 * 
 * ## Important
 * - Must have initialized Keycloak instance
 * - Uses environnement variables to define wether the token should be there or not.
 * - Token is null if Keycloak has errors.
 * - Must be called to store a value as const, then put it in the request to ensure order of operations
 */
export function BackendHeader() {
    let axiosConfig = {};
    console.log("You should be building");

    if (process.env.REACT_APP_SHOW_PAGES_EVEN_WITH_NO_AUTH === 'yes') {
        return {};
    }

    try {
        const jwtBearerToken = keycloakInstance().token;

        axiosConfig = {
            headers: {
                'Authorization': `Bearer ${jwtBearerToken}`
            }
        };
    } catch (e) {
        console.warn("-----------------------------");
        console.warn("AXIOS BACKEND HEADER FAILURE:");
        console.warn("-----------------------------");
        console.error(e);
    }

    return axiosConfig;
}