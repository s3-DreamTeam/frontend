import { RealGetAllProductInInventoryIDs } from "../../real/ProductInventory/getAllIDs";
import { SimulatedGetAllProductInInventoryIDs } from "../../simulated/ProductInventory/getAllIDs";
import { isSimulated } from "../isSimulated";

/**
 * # GetAllProductInventoryIDs
 * Function that calls the backend, to ask an array of all of the logged in user's
 * products in their inventory's IDs.
 * 
 * Used to check saved IDs and fetch the missing ones.
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
export const GetAllProductInventoryIDs = async ({

    onSuccess = () => { },
    onError = () => { },
    onEnd = () => { },
    onStart = () => { }
}) => {
    if (isSimulated()) {
        SimulatedGetAllProductInInventoryIDs({
            onSuccess: onSuccess,
            onError: onError,
            onEnd: onEnd,
            onStart: onStart
        });
    } else {
        RealGetAllProductInInventoryIDs({
            onSuccess: onSuccess,
            onError: onError,
            onEnd: onEnd,
            onStart: onStart
        });
    }
}; 