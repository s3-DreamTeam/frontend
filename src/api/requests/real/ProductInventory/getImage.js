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
    console.log(Endpoints.ProductInventory.Get.Image + ": REQ: RealGetProductInInventoryImage - SENT: ", ID);
    onStart();
    try {
        const header = BackendHeader();
        const response = await backendApi.post(
            Endpoints.ProductInventory.Get.Image,
            ID,
            header
        );
        console.log(Endpoints.ProductInventory.Get.Image + ": REQ: RealGetProductInInventoryImage - GOTTEN : ", response.data);
        onSuccess(response.data);
    } catch (err) {
        console.log(Endpoints.ProductInventory.Get.Image + ": REQ: RealGetProductInInventoryImage - ERROR : ", err.message);
        onError(err);
    } finally {
        onEnd();
    }
};