import { backendApi, BackendHeader } from "../../../backend";
import Endpoints from "../../../endpoints";

/**
 * # RealMachineManagerAdd
 * See interface version for details
 */
export const RealMachineManagerAdd = async ({

    packet,

    onSuccess = () => { },
    onError = () => { },
    onEnd = () => { },
    onStart = () => { }
}) => {
    console.log("REQ: RealMachineManagerAdd, POST, SENDING : ", packet);
    onStart();
    try {
        //await sleep(5000);
        const header = BackendHeader();
        await backendApi.post(
            Endpoints.MachineInventory.Manage.Add,
            packet,
            header
        );
        onSuccess();
    } catch (err) {
        console.warn("REQ: RealMachineManagerAdd, ERROR : ", err.message);
        onError(err);
    } finally {
        onEnd();
    }
};