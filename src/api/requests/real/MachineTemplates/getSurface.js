import { backendApi, BackendHeader } from "../../../backend";
import Endpoints from "../../../endpoints";

/**
 * # PostNewMachineTemplate
 * See interface version for details
 */
export const PostGetSurfaceMachineTemplate = async ({
    ID,
    onSuccess = () => { },
    onError = () => { },
    onEnd = () => { },
    onStart = () => { }
}) => {
    console.log(Endpoints.MachineTemplate.Get.Surface + ": REQ: PostGetSurfaceMachineTemplate - ID IS ", ID);
    onStart();
    try {
        const header = BackendHeader();
        const response = await backendApi.post(
            Endpoints.MachineTemplate.Get.Surface,
            ID,
            header
        );
        console.log(Endpoints.MachineTemplate.Get.Surface + ": REQ: PostGetSurfaceMachineTemplate - GOTTEN: ", response.data);
        console.log(Endpoints.MachineTemplate.Get.Surface + ": REQ: PostGetSurfaceMachineTemplate - EXPECTED: ", {
            "Manufacturer": "text",
            "Model": "text",
            "id": 0
        });

        onSuccess(response.data);
    } catch (err) {
        console.log(Endpoints.MachineTemplate.Get.Surface + ": REQ: PostGetSurfaceMachineTemplate - ERROR: ", err.message);
        onError(err);
    } finally {
        onEnd();
    }
};