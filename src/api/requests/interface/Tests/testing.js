import MachineTemplate from "../../../../utils/machineTemplateObject";
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
        const response = await backendApi.post(Endpoints.Test, {
            "Machine's Image": null,
            "Manufacturer": "Manufactuer",
            "Model": "Model",
            "Climate": "cooled",
            "Has serial numbers": false,
            "Color varies": true,
            "See through window": false,
            "Has internet connection": true,
            "Has Bluetooth": true,
            "Has physical connection": false,
            "Online store": false,
            "Debit cards": true,
            "Credit cards": true,
            "Cash": false,
        }, header);
        console.log("REQ: FetchBackendTest - SUCCESS");
        console.log("REQ: FetchBackendTest - GOTTEN: ", response.data);
        onSuccess(response.data);
    } catch (err) {
        console.warn("REQ: FetchBackendTest - FAILED", err);
        onError(err);
    } finally {
        onEnd();
    }
};