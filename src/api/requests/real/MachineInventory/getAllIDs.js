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
    console.log(Endpoints.MachineInventory.Get.AllID + ": REQ: FetchAllMachineInventoryIDs");
    onStart();
    try {
        const header = BackendHeader();
        const response = await backendApi.get(Endpoints.MachineInventory.Get.AllID, header);
        console.log(Endpoints.MachineInventory.Get.AllID + ": REQ: FetchAllMachineInventoryIDs - GOTTEN: ", response.data);
        console.log(Endpoints.MachineInventory.Get.AllID + ": REQ: FetchAllMachineInventoryIDs - EXPECTED: ", [0, 1, 2, 3]);
        onSuccess(response.data);
    } catch (err) {
        console.log(Endpoints.MachineInventory.Get.AllID + ": REQ: FetchAllMachineInventoryIDs - GOTTEN: ", err.message);
        onError(err);
    } finally {
        onEnd();
    }
};