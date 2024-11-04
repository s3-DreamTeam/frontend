import { simAddNewProductInInventory } from "../../../../store/simulatedEndpointSlice";
import store from "../../../../store/store";
import { WaitSimulator } from "../../../../utils/waitSimulator";
import { RandomErrorSimulator } from "../../../../utils/randomErrorSimulator";

/**
 * # SimulatedNewProductInInventory
 * See Interface version for details.
 */
export const SimulatedNewProductInInventory = async ({

    packet,

    onSuccess = () => { },
    onError = () => { },
    onEnd = () => { },
    onStart = () => { }
}) => {
    console.log("REQ: SIM_NewProductInInventory");

    onStart();
    try {
        await WaitSimulator();
        RandomErrorSimulator();
        store.dispatch(simAddNewProductInInventory(packet));
        onSuccess();
    } catch (err) {
        console.warn("SIM_NewProductInInventory failed");
        onError(err);
    } finally {
        onEnd();
    }
};