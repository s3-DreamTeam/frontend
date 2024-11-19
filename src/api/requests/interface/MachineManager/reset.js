import { RealMachineManagerReset } from "../../real/MachineManager/reset";
import { SimulatedMachineManagerReset } from "../../simulated/MachineManager/reset";
import { isSimulated } from "../isSimulated";

/**
 * # MachineManagerReset
 * Function that calls the backend, to ask to reset a slot of the inventory of a machine.
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
export const MachineManagerReset = async ({
    packet,
    onSuccess = () => { },
    onError = () => { },
    onEnd = () => { },
    onStart = () => { }
}) => {
    if (isSimulated()) {
        SimulatedMachineManagerReset({
            packet: packet,
            onSuccess: onSuccess,
            onError: onError,
            onEnd: onEnd,
            onStart: onStart
        });
    } else {
        RealMachineManagerReset({
            packet: packet,
            onSuccess: onSuccess,
            onError: onError,
            onEnd: onEnd,
            onStart: onStart
        });
    }
}; 