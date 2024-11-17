import { backendApi, BackendHeader } from "../../../backend";
import Endpoints from "../../../endpoints";

/**
 * # RealGetFullProductInInventory
 * See interface version for details
 */
export const RealGetFullProductInInventory = async ({
    ID,
    onSuccess = () => { },
    onError = () => { },
    onEnd = () => { },
    onStart = () => { }
}) => {
    console.log("REQ: RealGetFullProductInInventory");
    onStart();
    try {
        const header = BackendHeader();
        const response = await backendApi.post(
            Endpoints.ProductInventory.Get.Full,
            ID,
            header
        );
        onSuccess(response.data);
    } catch (err) {
        onError(err);
    } finally {
        onEnd();
    }
};