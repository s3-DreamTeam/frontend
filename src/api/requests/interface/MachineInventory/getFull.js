import { RealGetFullMachineInventory } from "../../real/MachineInventory/getFull";
import { SimulatedGetFullMachineInventory } from "../../simulated/MachineInventory/getFull";
import { isSimulated } from "../isSimulated";

/**
 * # GetFullMachineInInventory
 * Function that calls the backend, to ask to get the entire object of a machine in the inventory.
 * Gets everything.
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
export const GetFullMachineInInventory = async ({
    ID,
    onSuccess = () => { },
    onError = () => { },
    onEnd = () => { },
    onStart = () => { }
}) => {
    if (isSimulated()) {
        SimulatedGetFullMachineInventory({
            ID: ID,
            onSuccess: onSuccess,
            onError: onError,
            onEnd: onEnd,
            onStart: onStart
        });
    } else {
        RealGetFullMachineInventory({
            ID: ID,
            onSuccess: onSuccess,
            onError: onError,
            onEnd: onEnd,
            onStart: onStart
        });
    }
}; 