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
    console.log(Endpoints.MachineInventory.Manage.Add + ": REQ: RealMachineManagerAdd - SENT : ", packet);
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
        console.warn(Endpoints.MachineInventory.Manage.Add + ": REQ: RealMachineManagerAdd - ERROR : ", err.message);
        onError(err);
    } finally {
        onEnd();
    }
};