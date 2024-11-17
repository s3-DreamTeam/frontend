import store from "../../../../store/store";
import { RandomErrorSimulator } from "../../../../utils/randomErrorSimulator";
import { WaitSimulator } from "../../../../utils/waitSimulator";

/**
 * # SimulatedGetFullProductInInventory
 * See Interface version for details.
 */
export const SimulatedGetFullProductInInventory = async ({
    ID,
    onSuccess = () => { },
    onError = () => { },
    onEnd = () => { },
    onStart = () => { }
}) => {
    console.log("REQ: SimulatedGetFullProductInInventory", ID);

    onStart();
    try {
        await WaitSimulator();
        RandomErrorSimulator();
        const state = store.getState();
        const result = getInventory(state, ID);
        console.log("SimulatedGetFullProductInInventory => ", result);
        onSuccess(result);
    } catch (err) {
        console.warn("SimulatedGetFullProductInInventory failed");
        onError(err);
    } finally {
        onEnd();
    }
};

const getInventory = (state, id) => {
    const completeProductInInventory = state.simulatedEndpointSlice.object.productInventory.find(product => product.id === id) || null; // Return the product with matching ID or null
    return completeProductInInventory;
};