import { backendApi, BackendHeader } from "../../../backend";
import Endpoints from "../../../endpoints";

/**
 * # RealGetAllProductInInventoryIDs
 * See interface version for details
 */
export const RealGetAllProductInInventoryIDs = async ({
    onSuccess = () => { },
    onError = () => { },
    onEnd = () => { },
    onStart = () => { }
}) => {
    console.log("REQ: RealGetAllProductInInventoryIDs");
    onStart();
    try {
        const header = BackendHeader();
        const response = await backendApi.get(Endpoints.ProductInventory.Get.AllID, header);
        console.log("REQ: RealGetAllProductInInventoryIDs - GOTTEN : ", response.data);
        onSuccess(response.data);
    } catch (err) {
        onError(err);
    } finally {
        onEnd();
    }
};