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
    console.log(Endpoints.MachineTemplate.Get.AllID + ": REQ: FetchAllMachineTemplateIDs");
    onStart();
    try {
        const header = BackendHeader();
        const response = await backendApi.get(Endpoints.MachineTemplate.Get.AllID, header);
        console.log(Endpoints.MachineTemplate.Get.AllID + ": REQ: FetchAllMachineTemplateIDs - GOTTEN: ", response.data);
        onSuccess(response.data);
    } catch (err) {
        console.log(Endpoints.MachineTemplate.Get.AllID + ": REQ: FetchAllMachineTemplateIDs - ERROR: ", err.message);
        onError(err);
    } finally {
        onEnd();
    }
};