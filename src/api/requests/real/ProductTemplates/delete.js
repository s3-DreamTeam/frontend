import { backendApi, BackendHeader } from "../../../backend";
import Endpoints from "../../../endpoints";

/**
 * # RealDeleteProductTemplate
 * See interface version for details
 */
export const RealDeleteProductTemplate = async ({
    ID,
    onSuccess = () => { },
    onError = () => { },
    onEnd = () => { },
    onStart = () => { }
}) => {
    console.log("REQ: RealDeleteProductTemplate");
    onStart();
    try {
        const header = BackendHeader();
        const response = await backendApi.post(
            Endpoints.ProductTemplate.Delete,
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