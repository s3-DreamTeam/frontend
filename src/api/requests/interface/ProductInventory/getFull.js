import { RealGetFullProductInInventory } from "../../real/ProductInventory/getFull";
import { SimulatedGetFullProductInInventory } from "../../simulated/ProductInventory/getFull";
import { isSimulated } from "../isSimulated";

/**
 * # GetFullProductInInventory
 * Function that calls the backend, to ask to get the full object of a product in the inventory
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
export const GetFullProductInInventory = async ({
    ID,
    onSuccess = () => { },
    onError = () => { },
    onEnd = () => { },
    onStart = () => { }
}) => {
    if (isSimulated()) {
        SimulatedGetFullProductInInventory({
            ID: ID,
            onSuccess: onSuccess,
            onError: onError,
            onEnd: onEnd,
            onStart: onStart
        });
    } else {
        RealGetFullProductInInventory({
            ID: ID,
            onSuccess: onSuccess,
            onError: onError,
            onEnd: onEnd,
            onStart: onStart
        });
    }
}; 