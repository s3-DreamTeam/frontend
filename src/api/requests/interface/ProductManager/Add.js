import { RealNewProductsAddedToInventory } from "../../real/ProductManager/Add";
import { SimulatedNewProductsAddedToInventory } from "../../simulated/ProductManager/Add";
import { isSimulated } from "../isSimulated";

/**
 * # NewProductsAddedToInventory
 * Function that calls the backend, to add to the quantity of a product in the user's inventory.
 * 
 * ---
 * @param {*} packet Object created by the product form's submition.
 * 
 * ---
 * @param {*} onSuccess
 * Callback executed when the request is successful.
 * @param {*} onError
 * Callback executed when the requests fails for any reasons. Err given as a parameter.
 * @param {*} onEnd
 * Callback executed when the requests ends, regardless of how it ended.
 * @param {*} onStart
 * Callback executed right before the request.
 */
export const NewProductsAddedToInventory = async ({

    packet,

    onSuccess = () => { },
    onError = () => { },
    onEnd = () => { },
    onStart = () => { }
}) => {
    if (isSimulated()) {
        SimulatedNewProductsAddedToInventory({
            packet: packet,
            onSuccess: onSuccess,
            onError: onError,
            onEnd: onEnd,
            onStart: onStart
        });
    } else {
        RealNewProductsAddedToInventory({
            packet: packet,
            onSuccess: onSuccess,
            onError: onError,
            onEnd: onEnd,
            onStart: onStart
        });
    }
}; 