import { RealMachineManagerSet } from "../../real/MachineManager/set";
import { SimulatedMachineManagerSet } from "../../simulated/MachineManager/set";
import { isSimulated } from "../isSimulated";

/**
 * # MachineManagerSet
 * Function that calls the backend, to ask to set the product inside a slot of the inventory of a machine.
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
export const MachineManagerSet = async ({
    packet,
    onSuccess = () => { },
    onError = () => { },
    onEnd = () => { },
    onStart = () => { }
}) => {
    if (isSimulated()) {
        SimulatedMachineManagerSet({
            packet: packet,
            onSuccess: onSuccess,
            onError: onError,
            onEnd: onEnd,
            onStart: onStart
        });
    } else {
        RealMachineManagerSet({
            packet: packet,
            onSuccess: onSuccess,
            onError: onError,
            onEnd: onEnd,
            onStart: onStart
        });
    }
}; 