import { backendApi, BackendHeader } from "../../../backend";
import Endpoints from "../../../endpoints";

/**
 * # RealMachineManagerReset
 * See interface version for details
 */
export const RealMachineManagerReset = async ({

    packet,

    onSuccess = () => { },
    onError = () => { },
    onEnd = () => { },
    onStart = () => { }
}) => {
    console.log("REQ: RealMachineManagerReset, POST, SENDING : ", packet);
    onStart();
    try {
        //await sleep(5000);
        const header = BackendHeader();
        await backendApi.post(
            Endpoints.MachineInventory.Manage.Reset,
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