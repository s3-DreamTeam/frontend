import { backendApi, BackendHeader } from "../../../backend";
import Endpoints from "../../../endpoints";

/**
 * # PostNewMachineInventory
 * See interface version for details
 */
export const PostNewMachineInventory = async ({

    machineInventoryObject,

    onSuccess = () => { },
    onError = () => { },
    onEnd = () => { },
    onStart = () => { }
}) => {
    console.log(Endpoints.MachineInventory.New + ": REQ: PostNewMachineInventory - SENT: ", machineInventoryObject);
    onStart();
    try {
        //await sleep(5000);
        const header = BackendHeader();
        await backendApi.post(
            Endpoints.MachineInventory.New,
            machineInventoryObject,
            header
        );
        onSuccess();
    } catch (err) {
        console.log(Endpoints.MachineInventory.New + ": REQ: PostNewMachineInventory - ERROR: ", err.message);
        onError(err);
    } finally {
        onEnd();
    }
};