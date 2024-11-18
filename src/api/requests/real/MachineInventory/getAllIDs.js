import { backendApi, BackendHeader } from "../../../backend";
import Endpoints from "../../../endpoints";

/**
 * # FetchAllMachineInventoryIDs
 * See interface version for details
 */
export const FetchAllMachineInventoryIDs = async ({
    onSuccess = () => { },
    onError = () => { },
    onEnd = () => { },
    onStart = () => { }
}) => {
    console.log("REQ: FetchAllMachineInventoryIDs");
    onStart();
    try {
        const header = BackendHeader();
        const response = await backendApi.get(Endpoints.MachineInventory.Get.AllID, header);
        console.log("FetchAllMachineInventoryIDs - GOTTEN: ", response.data);
        onSuccess(response.data);
    } catch (err) {
        onError(err);
    } finally {
        onEnd();
    }
};