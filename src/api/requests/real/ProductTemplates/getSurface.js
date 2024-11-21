import { backendApi, BackendHeader } from "../../../backend";
import Endpoints from "../../../endpoints";

/**
 * # RealGetSurfaceProductTemplate
 * See interface version for details
 */
export const RealGetSurfaceProductTemplate = async ({
    ID,
    onSuccess = () => { },
    onError = () => { },
    onEnd = () => { },
    onStart = () => { }
}) => {
    console.log(Endpoints.ProductTemplate.Get.Surface + ": REQ: RealGetSurfaceProductTemplate - SENT: ", ID);
    onStart();
    try {
        const header = BackendHeader();
        const response = await backendApi.post(
            Endpoints.ProductTemplate.Get.Surface,
            ID,
            header
        );
        console.log(Endpoints.ProductTemplate.Get.Surface + ": REQ: RealGetSurfaceProductTemplate - GOTTEN: ", response.data);
        console.log(Endpoints.ProductTemplate.Get.Surface + ": REQ: RealGetSurfaceProductTemplate - EXPECTED: ", {
            "Manufacturer": "text",
            "Model": "text",
            "id": 0
        });

        onSuccess(response.data);
    } catch (err) {
        console.log(Endpoints.ProductTemplate.Get.Surface + ": REQ: RealGetSurfaceProductTemplate - ERROR: ", err.message);
        onError(err);
    } finally {
        onEnd();
    }
};