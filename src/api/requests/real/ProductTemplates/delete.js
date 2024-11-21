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
    console.log(Endpoints.ProductTemplate.Delete + ": REQ: RealDeleteProductTemplate - SENT: ", ID);
    onStart();
    try {
        const header = BackendHeader();
        const response = await backendApi.post(
            Endpoints.ProductTemplate.Delete,
            ID,
            header
        );
        console.log(Endpoints.ProductTemplate.Delete + ": REQ: RealDeleteProductTemplate - GOTTEN : ", response.data);
        onSuccess(response.data);
    } catch (err) {
        console.log(Endpoints.ProductTemplate.Delete + ": REQ: RealDeleteProductTemplate - ERROR : ", err.message);
        onError(err);
    } finally {
        onEnd();
    }
};