import { backendApi, BackendHeader } from "../../../backend";
import Endpoints from "../../../endpoints";

/**
 * # PostGetMachineInventoryImage
 * See interface version for details
 */
export const RealGetFullMachineInventory = async ({
    ID,
    onSuccess = () => { },
    onError = () => { },
    onEnd = () => { },
    onStart = () => { }
}) => {
    console.log("REQ: RealGetFullMachineInventory");
    onStart();
    try {
        const header = BackendHeader();
        const response = await backendApi.post(
            Endpoints.MachineInventory.Get.Full,
            ID,
            header
        );
        console.log("RealGetFullMachineInventory - GOTTEN: ", response.data);
        console.log("RealGetFullMachineInventory - EXPECTED: ", {
            "Machine's Image": "text",
            "Name": "the name",
            "Location": "the location",
            "Serial ID": "0000000",
            "MAchine's Color": "#FF0000",
            "Activated": true,
            "Min temperature": "-20",
            "Max temperature": "20",
            "Set temperature": "0",
            "Network SSID": "SSID",
            "Network Password": "*****",
            "Bluetooth SSID": "SSID",
            "Bluetooth Password": "*****",
            "Physical Connector": "USB",
            "Online Store URL": "https",
            "Debit Providers": "providers",
            "Credit Providers": "providers",
            "Accepted Currencies": "CAD",
            "TemplateID": 0
        });

        onSuccess(response.data);
    } catch (err) {
        onError(err);
    } finally {
        onEnd();
    }
};