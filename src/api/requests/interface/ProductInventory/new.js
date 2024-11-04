import { RealNewProductInInventory } from "../../real/ProductInventory/new";
import { SimulatedNewProductInInventory } from "../../simulated/ProductInventory/new";
import { isSimulated } from "../isSimulated";

/**
 * # NewProductInInventory
 * Function that calls the backend, to add a new product in the user's inventory.
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
export const NewProductInInventory = async ({

    packet,

    onSuccess = () => { },
    onError = () => { },
    onEnd = () => { },
    onStart = () => { }
}) => {
    if (isSimulated()) {
        SimulatedNewProductInInventory({
            packet: packet,
            onSuccess: onSuccess,
            onError: onError,
            onEnd: onEnd,
            onStart: onStart
        });
    } else {
        RealNewProductInInventory({
            packet: packet,
            onSuccess: onSuccess,
            onError: onError,
            onEnd: onEnd,
            onStart: onStart
        });
    }
}; 