import { backendApi, BackendHeader } from "../../../backend";
import Endpoints from "../../../endpoints";

/**
 * # PostDeleteMachineFromInventory
 * See interface version for details
 */
export const PostDeleteMachineFromInventory = async ({
    ID,
    onSuccess = () => { },
    onError = () => { },
    onEnd = () => { },
    onStart = () => { }
}) => {
    console.log(Endpoints.MachineInventory.Delete + ": REQ: PostDeleteMachineFromInventory - SENT: ", ID);
    onStart();
    try {
        const header = BackendHeader();
        const response = await backendApi.post(
            Endpoints.MachineInventory.Delete,
            ID,
            header
        );
        console.log(Endpoints.MachineInventory.Delete + ": REQ: PostDeleteMachineFromInventory - GOTTEN: ", response.data);
        onSuccess(response.data);
    } catch (err) {
        console.log(Endpoints.MachineInventory.Delete + ": REQ: PostDeleteMachineFromInventory - ERROR: ", err.message);
        onError(err);
    } finally {
        onEnd();
    }
};