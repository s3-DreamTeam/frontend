import store from "../../../../store/store";
import { RandomErrorSimulator } from "../../../../utils/randomErrorSimulator";
import { WaitSimulator } from "../../../../utils/waitSimulator";

/**
 * # SimulatedGetAllProductInInventoryIDs
 * See Interface version for details.
 */
export const SimulatedGetAllProductInInventoryIDs = async ({
    onSuccess = () => { },
    onError = () => { },
    onEnd = () => { },
    onStart = () => { }
}) => {
    console.log("REQ: SIM_GetAllProductInInventoryIDs");

    onStart();
    try {
        await WaitSimulator();
        RandomErrorSimulator();
        const state = store.getState();
        const result = getAllIDsFromReduxStore(state);
        onSuccess(result);
    } catch (err) {
        console.warn("SIM_GetAllProductInInventoryIDs failed", err);
        onError(err);
    } finally {
        onEnd();
    }
};

const getAllIDsFromReduxStore = (state) => {
    const productInInventory = state.simulatedEndpointSlice.object.productInventory;
    //console.log(productInInventory);
    const IDs = productInInventory
        .filter(obj => obj.id !== undefined) // Only include objects with an id
        .map(obj => obj.id);
    //console.log("IDS: ", IDs);
    return IDs;
};