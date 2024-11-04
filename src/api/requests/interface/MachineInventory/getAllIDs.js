import { FetchAllMachineInventoryIDs } from "../../real/MachineInventory/getAllIDs";
import { SimulatedGetAllMachineInventoryIDs } from "../../simulated/MachineInventory/getAllIDs";
import { isSimulated } from "../isSimulated";

/**
 * # GetAllMachinesInInventoryIDs
 * Function that calls the backend, to ask an array of all of the logged in user's
 * machines IDs in his inventory.
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
export const GetAllMachinesInInventoryIDs = async ({
    onSuccess = () => { },
    onError = () => { },
    onEnd = () => { },
    onStart = () => { }
}) => {
    if (isSimulated()) {
        SimulatedGetAllMachineInventoryIDs({
            onSuccess: onSuccess,
            onError: onError,
            onEnd: onEnd,
            onStart: onStart
        });
    } else {
        FetchAllMachineInventoryIDs({
            onSuccess: onSuccess,
            onError: onError,
            onEnd: onEnd,
            onStart: onStart
        });
    }
}; 