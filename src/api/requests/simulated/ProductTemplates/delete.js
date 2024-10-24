import { simRemoveProductTemplate } from "../../../../store/simulatedEndpointSlice";
import store from "../../../../store/store";
import { RandomErrorSimulator } from "../../../../utils/randomErrorSimulator";
import { WaitSimulator } from "../../../../utils/waitSimulator";

/**
 * # SimulatedDeleteProductTemplate
 * See Interface version for details.
 */
export const SimulatedDeleteProductTemplate = async ({
    ID,
    onSuccess = () => { },
    onError = () => { },
    onEnd = () => { },
    onStart = () => { }
}) => {
    console.log("REQ: SIM_DeleteProductTemplate: ", ID);

    onStart();
    try {
        await WaitSimulator();
        RandomErrorSimulator();
        store.dispatch(simRemoveProductTemplate(ID));
        onSuccess(null);
    } catch (err) {
        console.warn("SIM_DeleteProductTemplate failed");
        onError(err);
    } finally {
        onEnd();
    }
};