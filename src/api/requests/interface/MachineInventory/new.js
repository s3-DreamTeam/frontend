import { PostNewMachineInventory } from "../../real/MachineInventory/new";
import { SimulatedNewMachineInventory } from "../../simulated/MachineInventory/new";
import { isSimulated } from "../isSimulated";

/**
 * # NewMachineInInventory
 * Function that calls the backend, to add a new machine to your inventory.
 * 
 * ---
 * @param {*} packet Object created by the inventory of machines form's submition.
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
export const NewMachineInInventory = async ({

    packet,

    onSuccess = () => { },
    onError = () => { },
    onEnd = () => { },
    onStart = () => { }
}) => {
    if (isSimulated()) {
        SimulatedNewMachineInventory({
            machineInventoryObject: packet,
            onSuccess: onSuccess,
            onError: onError,
            onEnd: onEnd,
            onStart: onStart
        });
    } else {
        PostNewMachineInventory({
            machineInventoryObject: packet,
            onSuccess: onSuccess,
            onError: onError,
            onEnd: onEnd,
            onStart: onStart
        });
    }
}; 