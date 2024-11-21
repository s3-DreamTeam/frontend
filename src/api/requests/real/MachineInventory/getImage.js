import { backendApi, BackendHeader } from "../../../backend";
import Endpoints from "../../../endpoints";

/**
 * # PostGetMachineInventoryImage
 * See interface version for details
 */
export const PostGetMachineInventoryImage = async ({
    ID,
    onSuccess = () => { },
    onError = () => { },
    onEnd = () => { },
    onStart = () => { }
}) => {
    console.log(Endpoints.MachineInventory.Get.Image + ": REQ: PostGetMachineInventoryImage - SENT: ", ID);
    onStart();
    try {
        const header = BackendHeader();
        const response = await backendApi.post(
            Endpoints.MachineInventory.Get.Image,
            ID,
            header
        );
        console.log(Endpoints.MachineInventory.Get.Image + ": REQ: PostGetMachineInventoryImage - GOTTEN: ", response.data);
        onSuccess(response.data);
    } catch (err) {
        console.log(Endpoints.MachineInventory.Get.Image + ": REQ: PostGetMachineInventoryImage - ERROR: ", err.message);
        onError(err);
    } finally {
        onEnd();
    }
};