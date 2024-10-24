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
    console.log("REQ: RealGetSurfaceProductTemplate");
    onStart();
    try {
        const header = BackendHeader();
        const response = await backendApi.post(
            Endpoints.ProductTemplate.Get.Surface,
            ID,
            header
        );
        onSuccess(response);
    } catch (err) {
        onError(err);
    } finally {
        onEnd();
    }
};