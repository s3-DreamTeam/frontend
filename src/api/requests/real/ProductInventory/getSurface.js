import { backendApi, BackendHeader } from "../../../backend";
import Endpoints from "../../../endpoints";

/**
 * # RealGetSurfaceProductInInventory
 * See interface version for details
 */
export const RealGetSurfaceProductInInventory = async ({
    ID,
    onSuccess = () => { },
    onError = () => { },
    onEnd = () => { },
    onStart = () => { }
}) => {
    console.log("REQ: RealGetSurfaceProductInInventory");
    onStart();
    try {
        const header = BackendHeader();
        const response = await backendApi.post(
            Endpoints.ProductInventory.Get.Surface,
            ID,
            header
        );
        console.log("REQ: RealGetSurfaceProductInInventory - GOTTEN : ", response.data);
        onSuccess(response.data);
    } catch (err) {
        onError(err);
    } finally {
        onEnd();
    }
};