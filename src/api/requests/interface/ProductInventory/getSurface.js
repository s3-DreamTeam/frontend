import { RealGetSurfaceProductInInventory } from "../../real/ProductInventory/getSurface";
import { SimulatedGetSurfaceProductInInventory } from "../../simulated/ProductInventory/getSurface";
import { isSimulated } from "../isSimulated";

/**
 * # GetSurfaceProductInInventory
 * Function that calls the backend, to ask to get the bare minimum information
 * about a specific product template. That means... their manufacturer and their names.
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
export const GetSurfaceProductInInventory = async ({
    ID,
    onSuccess = () => { },
    onError = () => { },
    onEnd = () => { },
    onStart = () => { }
}) => {
    if (isSimulated()) {
        SimulatedGetSurfaceProductInInventory({
            ID: ID,
            onSuccess: onSuccess,
            onError: onError,
            onEnd: onEnd,
            onStart: onStart
        });
    } else {
        RealGetSurfaceProductInInventory({
            ID: ID,
            onSuccess: onSuccess,
            onError: onError,
            onEnd: onEnd,
            onStart: onStart
        });
    }
}; 