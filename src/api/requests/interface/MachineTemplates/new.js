import { PostNewMachineTemplate } from "../../real/MachineTemplates/new";
import { SimulatedNewMachineTemplate } from "../../simulated/MachineTemplates/new";

/**
 * # NewMachineTemplate
 * Function that calls the backend, to create a new machine template in it.
 * 
 * ---
 * @param {*} machineTemplateObject Object created by the machine template form's submition.
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
export const NewMachineTemplate = async ({

    machineTemplateObject,

    onSuccess = () => { },
    onError = () => { },
    onEnd = () => { },
    onStart = () => { }
}) => {
    if (process.env.REACT_APP_SIMULATE_ENDPOINTS === 'yes') {
        SimulatedNewMachineTemplate({
            machineTemplateObject: machineTemplateObject,
            onSuccess: onSuccess,
            onError: onError,
            onEnd: onEnd,
            onStart: onStart
        });
    } else {
        PostNewMachineTemplate({
            machineTemplateObject: machineTemplateObject,
            onSuccess: onSuccess,
            onError: onError,
            onEnd: onEnd,
            onStart: onStart
        });
    }
}; 