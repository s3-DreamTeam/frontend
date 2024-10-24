import { backendApi, BackendHeader } from "../../../backend";
import Endpoints from "../../../endpoints";

/**
 * # RealGetProductTemplateImage
 * See interface version for details
 */
export const RealGetProductTemplateImage = async ({
    ID,
    onSuccess = () => { },
    onError = () => { },
    onEnd = () => { },
    onStart = () => { }
}) => {
    console.log("REQ: RealGetProductTemplateImage");
    onStart();
    try {
        const header = BackendHeader();
        const response = await backendApi.post(
            Endpoints.ProductTemplate.Get.Image,
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