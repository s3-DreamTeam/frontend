import { backendApi, BackendHeader } from "../../../backend";
import Endpoints from "../../../endpoints";

/**
 * # RealNewProductInInventory
 * See interface version for details
 */
export const RealNewProductInInventory = async ({

    packet,

    onSuccess = () => { },
    onError = () => { },
    onEnd = () => { },
    onStart = () => { }
}) => {
    console.log(Endpoints.ProductInventory.New + ": REQ: RealNewProductInInventory - SENT: ", packet);
    onStart();
    try {
        //await sleep(5000);
        const header = BackendHeader();
        await backendApi.post(
            Endpoints.ProductInventory.New,
            packet,
            header
        );
        onSuccess();
    } catch (err) {
        console.log(Endpoints.ProductInventory.New + ": REQ: RealNewProductInInventory - ERROR: ", err);
        onError(err);
    } finally {
        onEnd();
    }
};