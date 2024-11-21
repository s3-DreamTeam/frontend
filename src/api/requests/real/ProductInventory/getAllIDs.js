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
    console.log(Endpoints.ProductInventory.Get.AllID + ": REQ: RealGetAllProductInInventoryIDs");
    onStart();
    try {
        const header = BackendHeader();
        const response = await backendApi.get(Endpoints.ProductInventory.Get.AllID, header);
        console.log(Endpoints.ProductInventory.Get.AllID + ": REQ: RealGetAllProductInInventoryIDs - GOTTEN : ", response.data);
        onSuccess(response.data);
    } catch (err) {
        console.log(Endpoints.ProductInventory.Get.AllID + ": REQ: RealGetAllProductInInventoryIDs - ERROR : ", err.message);
        onError(err);
    } finally {
        onEnd();
    }
};