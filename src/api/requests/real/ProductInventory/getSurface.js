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
    console.log(Endpoints.ProductInventory.Get.Surface + ": REQ: RealGetSurfaceProductInInventory - SENT: ", ID);
    onStart();
    try {
        const header = BackendHeader();
        const response = await backendApi.post(
            Endpoints.ProductInventory.Get.Surface,
            ID,
            header
        );
        console.log(Endpoints.ProductInventory.Get.Surface + ": REQ: RealGetSurfaceProductInInventory - GOTTEN : ", response.data);
        console.log(Endpoints.ProductInventory.Get.Surface + ": REQ: RealGetSurfaceProductInInventory - EXPECTED : ", {
            "Variant": "text",
            "TemplateID": 0,
            "Quantity": 0,
            "id": 0
        });

        onSuccess(response.data);
    } catch (err) {
        console.log(Endpoints.ProductInventory.Get.Surface + ": REQ: RealGetSurfaceProductInInventory - ERROR : ", err.message);
        onError(err);
    } finally {
        onEnd();
    }
};