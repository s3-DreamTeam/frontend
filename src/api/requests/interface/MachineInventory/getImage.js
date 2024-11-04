import { PostGetMachineInventoryImage } from "../../real/MachineInventory/getImage";
import { SimulatedGetMachineInventoryImage } from "../../simulated/MachineInventory/getImage";
import { isSimulated } from "../isSimulated";

/**
 * # GetImageOfMachineInInventory
 * Function that calls the backend, to ask to get the image of a machine in the user's inventory.
 * Since images are heavy, like your mother, we deciced to separate the calls of surface levels
 * to async get images later.
 * 
 * Btw, if you have a thousand images... We're loading em all in your ram.
 * Good luck!
 * No, I'm not optimizing it.
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
export const GetImageOfMachineInInventory = async ({
    ID,
    onSuccess = () => { },
    onError = () => { },
    onEnd = () => { },
    onStart = () => { }
}) => {
    if (isSimulated()) {
        SimulatedGetMachineInventoryImage({
            ID: ID,
            onSuccess: onSuccess,
            onError: onError,
            onEnd: onEnd,
            onStart: onStart
        });
    } else {
        PostGetMachineInventoryImage({
            ID: ID,
            onSuccess: onSuccess,
            onError: onError,
            onEnd: onEnd,
            onStart: onStart
        });
    }
}; 