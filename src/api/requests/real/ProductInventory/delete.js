import { backendApi, BackendHeader } from "../../../backend";
import Endpoints from "../../../endpoints";

/**
 * # RealDeleteProductFromInventory
 * See interface version for details
 */
export const RealDeleteProductFromInventory = async ({
    ID,
    onSuccess = () => { },
    onError = () => { },
    onEnd = () => { },
    onStart = () => { }
}) => {
    console.log(Endpoints.ProductInventory.Delete + ": REQ: RealDeleteProductFromInventory");
    onStart();
    try {
        const header = BackendHeader();
        const response = await backendApi.post(
            Endpoints.ProductInventory.Delete,
            ID,
            header
        );
        console.log(Endpoints.ProductInventory.Delete + ": REQ: RealDeleteProductFromInventory - GOTTEN : ", response.data);
        onSuccess(response.data);
    } catch (err) {
        console.log(Endpoints.ProductInventory.Delete + ": REQ: RealDeleteProductFromInventory - ERROR : ", err.message);
        onError(err);
    } finally {
        onEnd();
    }
};