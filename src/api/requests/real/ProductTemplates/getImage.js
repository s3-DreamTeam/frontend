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
    console.log(Endpoints.ProductTemplate.Get.Image + ": REQ: RealGetProductTemplateImage - SENT: ", ID);
    onStart();
    try {
        const header = BackendHeader();
        const response = await backendApi.post(
            Endpoints.ProductTemplate.Get.Image,
            ID,
            header
        );
        console.log(Endpoints.ProductTemplate.Get.Image + ": REQ: RealGetProductTemplateImage - GOTTEN: ", response.data);
        onSuccess(response.data);
    } catch (err) {
        console.log(Endpoints.ProductTemplate.Get.Image + ": REQ: RealGetProductTemplateImage - ERROR: ", err.message);
        onError(err);
    } finally {
        onEnd();
    }
};