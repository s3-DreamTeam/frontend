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
    console.log(Endpoints.MachineInventory.Manage.Reset + ": REQ: RealMachineManagerReset - SENT : ", packet);
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
        console.log(Endpoints.MachineInventory.Manage.Reset + ": REQ: RealMachineManagerReset - ERROR : ", err.message);
        onError(err);
    } finally {
        onEnd();
    }
};