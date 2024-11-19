import { RealMachineManagerAdd } from "../../real/MachineManager/add";
import { SimulatedMachineManagerAdd } from "../../simulated/MachineManager/add";
import { isSimulated } from "../isSimulated";

/**
 * # MachineManagerAdd
 * Function that calls the backend, to ask to add product quantity to a slot of a machine
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
export const MachineManagerAdd = async ({
    packet,
    onSuccess = () => { },
    onError = () => { },
    onEnd = () => { },
    onStart = () => { }
}) => {
    if (isSimulated()) {
        SimulatedMachineManagerAdd({
            packet: packet,
            onSuccess: onSuccess,
            onError: onError,
            onEnd: onEnd,
            onStart: onStart
        });
    } else {
        RealMachineManagerAdd({
            packet: packet,
            onSuccess: onSuccess,
            onError: onError,
            onEnd: onEnd,
            onStart: onStart
        });
    }
}; 