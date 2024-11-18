import { backendApi, BackendHeader } from "../../../backend";
import Endpoints from "../../../endpoints";

/**
 * # RealGetFullMachineTemplate
 * See interface version for details
 */
export const RealGetFullMachineTemplate = async ({
    ID,
    onSuccess = () => { },
    onError = () => { },
    onEnd = () => { },
    onStart = () => { }
}) => {
    console.log("REQ: FetchFullMachineTemplate - ID", ID);
    onStart();
    try {
        const header = BackendHeader();
        const response = await backendApi.post(
            Endpoints.MachineTemplate.Get.Full,
            ID,
            header
        );
        console.log("REQ: FetchFullMachineTemplate - GOTTEN", response.data);
        onSuccess(response.data);
    } catch (err) {
        onError(err);
    } finally {
        onEnd();
    }
};