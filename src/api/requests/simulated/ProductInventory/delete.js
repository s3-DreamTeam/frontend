import { simRemoveProductFromInventory } from "../../../../store/simulatedEndpointSlice";
import store from "../../../../store/store";
import { RandomErrorSimulator } from "../../../../utils/randomErrorSimulator";
import { WaitSimulator } from "../../../../utils/waitSimulator";

/**
 * # SimulatedDeleteProductFromInventory
 * See Interface version for details.
 */
export const SimulatedDeleteProductFromInventory = async ({
    ID,
    onSuccess = () => { },
    onError = () => { },
    onEnd = () => { },
    onStart = () => { }
}) => {
    console.log("REQ: SIM_DeleteProductFromInventory: ", ID);

    onStart();
    try {
        await WaitSimulator();
        RandomErrorSimulator();
        store.dispatch(simRemoveProductFromInventory(ID));
        onSuccess(null);
    } catch (err) {
        console.warn("SIM_DeleteProductFromInventory failed");
        onError(err);
    } finally {
        onEnd();
    }
};