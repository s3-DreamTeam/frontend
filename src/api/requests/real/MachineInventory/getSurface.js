import { backendApi, BackendHeader } from "../../../backend";
import Endpoints from "../../../endpoints";

/**
 * # PostGetSurfaceMachineInventory
 * See interface version for details
 */
export const PostGetSurfaceMachineInventory = async ({
    ID,
    onSuccess = () => { },
    onError = () => { },
    onEnd = () => { },
    onStart = () => { }
}) => {
    console.log(Endpoints.MachineInventory.Get.Surface + ": REQ: PostGetSurfaceMachineInventory - SENT: ", ID);
    onStart();
    try {
        const header = BackendHeader();
        const response = await backendApi.post(
            Endpoints.MachineInventory.Get.Surface,
            ID,
            header
        );
        console.log(Endpoints.MachineInventory.Get.Surface + ": REQ: PostGetSurfaceMachineInventory: - GOTTEN: ", response.data);
        console.log(Endpoints.MachineInventory.Get.Surface + ": REQ: PostGetSurfaceMachineInventory: - EXPECTED: ", {
            "Name": "the name",
            "Location": "the location",
            "Lowest product count": 0,
            "TemplateID": 0,
            "id": 0
        });
        onSuccess(response.data);
    } catch (err) {
        console.log(Endpoints.MachineInventory.Get.Surface + ": REQ: PostGetSurfaceMachineInventory: - ERROR: ", err.message);
        onError(err);
    } finally {
        onEnd();
    }
};