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
    console.log(Endpoints.ProductTemplate.Get.AllID + ": REQ: RealGetAllProductTemplateIDs");
    onStart();
    try {
        const header = BackendHeader();
        const response = await backendApi.get(Endpoints.ProductTemplate.Get.AllID, header);
        console.log(Endpoints.ProductTemplate.Get.AllID + ": REQ: RealGetAllProductTemplateIDs - GOTTEN : ", response.data);
        onSuccess(response.data);
    } catch (err) {
        console.log(Endpoints.ProductTemplate.Get.AllID + ": REQ: RealGetAllProductTemplateIDs - ERROR : ", err.message);
        onError(err);
    } finally {
        onEnd();
    }
};