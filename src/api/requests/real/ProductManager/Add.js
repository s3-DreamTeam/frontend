import { backendApi, BackendHeader } from "../../../backend";
import Endpoints from "../../../endpoints";

/**
 * # RealNewProductInInventory
 * See interface version for details
 */
export const RealNewProductsAddedToInventory = async ({

    packet,

    onSuccess = () => { },
    onError = () => { },
    onEnd = () => { },
    onStart = () => { }
}) => {
    console.log("REQ: RealNewProductsAddedToInventory - SENDING: ", packet);
    onStart();
    try {
        //await sleep(5000);
        const header = BackendHeader();
        await backendApi.post(
            Endpoints.ProductInventory.Manage.Add,
            packet,
            header
        );
        onSuccess();
    } catch (err) {
        console.log("REQ: RealNewProductsAddedToInventory - ERROR: ", err.message);
        onError(err);
    } finally {
        onEnd();
    }
};