import { backendApi, BackendHeader } from "../../../backend";
import Endpoints from "../../../endpoints";

/**
 * # RealGetFullMachineTemplate
 * See interface version for details
 */
export const RealGetFullMachineTemplate = async ({
    ID,
    onSuccess = () => { },
    onError = () => { },
    onEnd = () => { },
    onStart = () => { }
}) => {
    console.log("REQ: FetchFullMachineTemplate - ID", ID);
    onStart();
    try {
        const header = BackendHeader();
        const response = await backendApi.post(
            Endpoints.MachineTemplate.Get.Full,
            ID,
            header
        );
        console.log("REQ: FetchFullMachineTemplate - GOTTEN", response.data);
        console.log("REQ: FetchFullMachineTemplate - EXPECTED", {
            "Machine's Image": "text",
            "Manufacturer": "text",
            "Model": "text",
            "Climate": "text",
            "Has serial number": true,
            "Color varies": true,
            "See through window": true,
            "Has internet connection": true,
            "Has Bluetooth": true,
            "Has physical connection": false,
            "Online store": false,
            "Debit cards": true,
            "Credit cards": true,
            "Cash": false,
            "id": 0
        });

        onSuccess(response.data);
    } catch (err) {
        onError(err);
    } finally {
        onEnd();
    }
};