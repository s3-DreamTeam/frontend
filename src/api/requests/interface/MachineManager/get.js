import { RealMachineManagerGet } from "../../real/MachineManager/get";
import { SimulatedMachineManagerGet } from "../../simulated/MachineManager/get";
import { isSimulated } from "../isSimulated";

/**
 * # MachineManagerGet
 * Function that calls the backend, to ask to get the inventory of a machine.
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
export const MachineManagerGet = async ({
    ID,
    onSuccess = () => { },
    onError = () => { },
    onEnd = () => { },
    onStart = () => { }
}) => {
    if (isSimulated()) {
        SimulatedMachineManagerGet({
            ID: ID,
            onSuccess: onSuccess,
            onError: onError,
            onEnd: onEnd,
            onStart: onStart
        });
    } else {
        RealMachineManagerGet({
            ID: ID,
            onSuccess: onSuccess,
            onError: onError,
            onEnd: onEnd,
            onStart: onStart
        });
    }
}; 