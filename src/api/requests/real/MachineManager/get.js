import { backendApi, BackendHeader } from "../../../backend";
import Endpoints from "../../../endpoints";

/**
 * # RealMachineManagerGet
 * See interface version for details
 */
export const RealMachineManagerGet = async ({
    ID,
    onSuccess = () => { },
    onError = () => { },
    onEnd = () => { },
    onStart = () => { }
}) => {
    console.log("REQ: RealMachineManagerGet - ID", ID);
    onStart();
    try {
        const header = BackendHeader();
        const response = await backendApi.post(
            Endpoints.MachineInventory.Manage.Get,
            ID,
            header
        );
        console.log("REQ: RealMachineManagerGet - GOTTEN", response.data);
        onSuccess(response.data);
    } catch (err) {
        onError(err);
    } finally {
        onEnd();
    }
};