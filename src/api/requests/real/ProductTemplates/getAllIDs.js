import { backendApi, BackendHeader } from "../../../backend";
import Endpoints from "../../../endpoints";

/**
 * # RealGetAllProductTemplateIDs
 * See interface version for details
 */
export const RealGetAllProductTemplateIDs = async ({
    onSuccess = () => { },
    onError = () => { },
    onEnd = () => { },
    onStart = () => { }
}) => {
    console.log("REQ: RealGetAllProductTemplateIDs");
    onStart();
    try {
        const header = BackendHeader();
        const response = await backendApi.get(Endpoints.ProductTemplate.Get.AllID);
        console.log(response);
        onSuccess(response.data);
    } catch (err) {
        onError(err);
    } finally {
        onEnd();
    }
};