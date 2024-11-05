import { backendApi, BackendHeader } from "../../../backend";
import Endpoints from "../../../endpoints";

/**
 * # FetchBackendTest
 * Gets a string that the backend wants to display for testing purposes.
 * @param {*} param0 
 */
export const FetchBackendTest = async ({
    onSuccess = () => { },
    onError = () => { },
    onEnd = () => { },
    onStart = () => { }
}) => {
    console.log("REQ: FetchBackendTest");
    onStart();
    try {
        const header = BackendHeader();
        const response = await backendApi.get(Endpoints.Test);
        console.log("REQ: FetchBackendTest - SUCCESS");
        console.log(response);
        onSuccess(response.data);
    } catch (err) {
        console.warn("REQ: FetchBackendTest - FAILED", err);
        onError(err);
    } finally {
        onEnd();
    }
};