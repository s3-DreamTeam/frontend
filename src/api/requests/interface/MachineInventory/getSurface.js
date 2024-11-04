import { PostGetSurfaceMachineInventory } from "../../real/MachineInventory/getSurface";
import { SimulatedGetSurfaceMachineInventory } from "../../simulated/MachineInventory/getSurface";
import { isSimulated } from "../isSimulated";

/**
 * # GetSurfaceMachineInInventory
 * Function that calls the backend, to ask to get the bare minimum information
 * about a specific machine in the user's inventory. 
 * That means... their manufacturer and their names and whatever else.
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
export const GetSurfaceMachineInInventory = async ({
    ID,
    onSuccess = () => { },
    onError = () => { },
    onEnd = () => { },
    onStart = () => { }
}) => {
    if (isSimulated()) {
        SimulatedGetSurfaceMachineInventory({
            ID: ID,
            onSuccess: onSuccess,
            onError: onError,
            onEnd: onEnd,
            onStart: onStart
        });
    } else {
        PostGetSurfaceMachineInventory({
            ID: ID,
            onSuccess: onSuccess,
            onError: onError,
            onEnd: onEnd,
            onStart: onStart
        });
    }
}; 