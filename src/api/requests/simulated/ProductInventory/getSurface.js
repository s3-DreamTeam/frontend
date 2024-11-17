import store from "../../../../store/store";
import { RandomErrorSimulator } from "../../../../utils/randomErrorSimulator";
import { WaitSimulator } from "../../../../utils/waitSimulator";

/**
 * # SimulatedGetSurfaceProductInInventory
 * See Interface version for details.
 */
export const SimulatedGetSurfaceProductInInventory = async ({
    ID,
    onSuccess = () => { },
    onError = () => { },
    onEnd = () => { },
    onStart = () => { }
}) => {
    console.log("REQ: SIM_GetSurfaceProductInInventory");

    onStart();
    try {
        await WaitSimulator();
        RandomErrorSimulator();
        const state = store.getState();
        const result = getSurfaceProduct(state, ID);
        onSuccess(result);
    } catch (err) {
        console.warn("SIM_GetSurfaceProductInInventory failed");
        onError(err);
    } finally {
        onEnd();
    }
};

const getSurfaceProduct = (state, id) => {
    const completeProductInInventory = state.simulatedEndpointSlice.object.productInventory.find(product => product.id === id) || null; // Return the product with matching ID or null
    if (completeProductInInventory === null) {
        return null;
    }

    return {
        "Variant": completeProductInInventory.Variant,
        "TemplateID": completeProductInInventory.TemplateID,
        "Quantity": completeProductInInventory.Quantity,
        "id": completeProductInInventory.id
    };
};

