import store from "../../../../store/store";
import { RandomErrorSimulator } from "../../../../utils/randomErrorSimulator";
import { WaitSimulator } from "../../../../utils/waitSimulator";

/**
 * # SimulatedGetProductInInventoryImage
 * See Interface version for details.
 */
export const SimulatedGetProductInInventoryImage = async ({
    ID,
    onSuccess = () => { },
    onError = () => { },
    onEnd = () => { },
    onStart = () => { }
}) => {
    console.log("REQ: SIM_GetProductInInventoryImage");

    onStart();
    try {
        await WaitSimulator();
        RandomErrorSimulator();
        const state = store.getState();
        const result = getInventoryImage(state, ID);
        onSuccess(result);
    } catch (err) {
        console.warn("SIM_GetProductInInventoryImage failed");
        onError(err);
    } finally {
        onEnd();
    }
};

const getInventoryImage = (state, id) => {
    const completeProductInInventory = state.simulatedEndpointSlice.object.productInventory.find(product => product.id === id) || null; // Return the product with matching ID or null
    if (completeProductInInventory === null) {
        return null;
    }
    const image = completeProductInInventory[`Product's Image`];
    return {
        "Image": image,
    };
};