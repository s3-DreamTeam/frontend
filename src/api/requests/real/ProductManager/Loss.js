import { backendApi, BackendHeader } from "../../../backend";
import Endpoints from "../../../endpoints";

/**
 * # RealProductsLossToInventory
 * See interface version for details
 */
export const RealProductsLossToInventory = async ({

    packet,

    onSuccess = () => { },
    onError = () => { },
    onEnd = () => { },
    onStart = () => { }
}) => {
    console.log(Endpoints.ProductInventory.Manage.Loss + ": REQ: RealProductsLossToInventory - SENDING: ", packet);
    onStart();
    try {
        //await sleep(5000);
        const header = BackendHeader();
        await backendApi.post(
            Endpoints.ProductInventory.Manage.Loss,
            packet,
            header
        );
        onSuccess();
    } catch (err) {
        console.log(Endpoints.ProductInventory.Manage.Loss + ": REQ: RealProductsLossToInventory - ERROR: ", err.message);
        onError(err);
    } finally {
        onEnd();
    }
};