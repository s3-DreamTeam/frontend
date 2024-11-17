import { backendApi, BackendHeader } from "../../../backend";
import Endpoints from "../../../endpoints";

/**
 * # RealGetFullProductTemplate
 * See interface version for details
 */
export const RealGetFullProductTemplate = async ({
    ID,
    onSuccess = () => { },
    onError = () => { },
    onEnd = () => { },
    onStart = () => { }
}) => {
    console.log("REQ: RealGetFullProductTemplate");
    onStart();
    try {
        const header = BackendHeader();
        const response = await backendApi.post(
            Endpoints.ProductTemplate.Get.Full,
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