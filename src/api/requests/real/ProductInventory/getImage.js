import { backendApi, BackendHeader } from "../../../backend";
import Endpoints from "../../../endpoints";

/**
 * # RealGetProductInInventoryImage
 * See interface version for details
 */
export const RealGetProductInInventoryImage = async ({
    ID,
    onSuccess = () => { },
    onError = () => { },
    onEnd = () => { },
    onStart = () => { }
}) => {
    console.log("REQ: RealGetProductInInventoryImage");
    onStart();
    try {
        const header = BackendHeader();
        const response = await backendApi.post(
            Endpoints.ProductInventory.Get.Image,
            ID,
            header
        );
        console.log("REQ: RealGetProductInInventoryImage - GOTTEN : ", response.data);
        onSuccess(response.data);
    } catch (err) {
        onError(err);
    } finally {
        onEnd();
    }
};