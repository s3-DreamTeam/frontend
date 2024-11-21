import { backendApi, BackendHeader } from "../../../backend";
import Endpoints from "../../../endpoints";

/**
 * # RealNewProductTemplate
 * See interface version for details
 */
export const RealNewProductTemplate = async ({

    packet,

    onSuccess = () => { },
    onError = () => { },
    onEnd = () => { },
    onStart = () => { }
}) => {
    console.log(Endpoints.ProductTemplate.New + ": REQ: RealNewProductTemplate - SENT: ", packet);
    onStart();
    try {
        //await sleep(5000);
        const header = BackendHeader();
        await backendApi.post(
            Endpoints.ProductTemplate.New,
            packet,
            header
        );
        onSuccess();
    } catch (err) {
        console.log(Endpoints.ProductTemplate.New + ": REQ: RealNewProductTemplate - ERROR: ", err.message);
        onError(err);
    } finally {
        onEnd();
    }
};