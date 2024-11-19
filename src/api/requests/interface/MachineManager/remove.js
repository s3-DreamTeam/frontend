import { RealMachineManagerRemove } from "../../real/MachineManager/remove";
import { SimulatedMachineManagerRemove } from "../../simulated/MachineManager/remove";
import { isSimulated } from "../isSimulated";

/**
 * # MachineManagerRemove
 * Function that calls the backend, to ask to remove a quantity of product from the inventory of a machine.
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
export const MachineManagerRemove = async ({
    packet,
    onSuccess = () => { },
    onError = () => { },
    onEnd = () => { },
    onStart = () => { }
}) => {
    if (isSimulated()) {
        SimulatedMachineManagerRemove({
            packet: packet,
            onSuccess: onSuccess,
            onError: onError,
            onEnd: onEnd,
            onStart: onStart
        });
    } else {
        RealMachineManagerRemove({
            packet: packet,
            onSuccess: onSuccess,
            onError: onError,
            onEnd: onEnd,
            onStart: onStart
        });
    }
}; 