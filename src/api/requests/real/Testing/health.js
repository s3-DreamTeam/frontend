import { backendApi, BackendHeader } from "../../../backend";
import Endpoints from "../../../endpoints";

/**
 * # RealHealthCheck
 * Gets a string that the backend wants to display for testing purposes.
 * @param {*} param0 
 */
export const RealHealthCheck = async ({
    onSuccess = () => { },
    onError = () => { },
    onEnd = () => { },
    onStart = () => { }
}) => {
    console.log("REQ: RealHealthCheck");
    onStart();
    try {
        const header = BackendHeader();
        await backendApi.get(Endpoints.Health, header);
        console.log("REQ: RealHealthCheck - SUCCESS");
        onSuccess();
    } catch (err) {
        console.warn("REQ: RealHealthCheck - FAILED", err);
        onError(err);
    } finally {
        onEnd();
    }
};