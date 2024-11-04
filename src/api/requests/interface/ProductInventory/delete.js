import { RealDeleteProductFromInventory } from "../../real/ProductInventory/delete";
import { SimulatedDeleteProductFromInventory } from "../../simulated/ProductInventory/delete";
import { isSimulated } from "../isSimulated";


/**
 * # DeleteProductFromInventory
 * Function that calls the backend with an ID...
 * Basically telling it to fuck this one in particular.
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
export const DeleteProductFromInventory = async ({
    ID,
    onSuccess = () => { },
    onError = () => { },
    onEnd = () => { },
    onStart = () => { }
}) => {
    if (isSimulated()) {
        SimulatedDeleteProductFromInventory({
            ID: ID,
            onSuccess: onSuccess,
            onError: onError,
            onEnd: onEnd,
            onStart: onStart
        });
    } else {
        RealDeleteProductFromInventory({
            ID: ID,
            onSuccess: onSuccess,
            onError: onError,
            onEnd: onEnd,
            onStart: onStart
        });
    }
}; 