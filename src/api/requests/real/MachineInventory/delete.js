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
    console.log("REQ: PostDeleteMachineFromInventory");
    onStart();
    try {
        const header = BackendHeader();
        const response = await backendApi.post(
            Endpoints.MachineInventory.Delete,
            ID,
            header
        );
        onSuccess(response.data);
    } catch (err) {
        onError(err);
    } finally {
        onEnd();
    }
};