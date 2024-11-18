import { backendApi, BackendHeader } from "../../../backend";
import Endpoints from "../../../endpoints";

/**
 * # FetchAllMachineTemplateIDs
 * See interface version for details
 */
export const FetchAllMachineTemplateIDs = async ({
    onSuccess = () => { },
    onError = () => { },
    onEnd = () => { },
    onStart = () => { }
}) => {
    console.log("REQ: FetchAllMachineTemplateIDs");
    onStart();
    try {
        const header = BackendHeader();
        const response = await backendApi.get(Endpoints.MachineTemplate.Get.AllID, header);
        console.log("FetchAllMachineTemplateIDs - MACHINE IDS: ", response.data);
        onSuccess(response.data);
    } catch (err) {
        onError(err);
    } finally {
        onEnd();
    }
};