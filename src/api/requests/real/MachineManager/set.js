import { backendApi, BackendHeader } from "../../../backend";
import Endpoints from "../../../endpoints";

/**
 * # RealMachineManagerRemove
 * See interface version for details
 */
export const RealMachineManagerSet = async ({

    packet,

    onSuccess = () => { },
    onError = () => { },
    onEnd = () => { },
    onStart = () => { }
}) => {
    console.log("REQ: RealMachineManagerSet, POST, SENDING : ", packet);
    onStart();
    try {
        //await sleep(5000);
        const header = BackendHeader();
        await backendApi.post(
            Endpoints.MachineInventory.Manage.Set,
            packet,
            header
        );
        onSuccess();
    } catch (err) {
        onError(err);
    } finally {
        onEnd();
    }
};