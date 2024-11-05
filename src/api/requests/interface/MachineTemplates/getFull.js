import { RealGetFullMachineTemplate } from "../../real/MachineTemplates/getFull";
import { PostGetMachineTemplateImage } from "../../real/MachineTemplates/getImage";
import { SimulatedGetFullMachineTemplate } from "../../simulated/MachineTemplates/getFull";
import { SimulatedGetMachineTemplateImage } from "../../simulated/MachineTemplates/getImage";
import { isSimulated } from "../isSimulated";

/**
 * # GetFullMachineTemplate
 * Function that calls the backend, to ask to get the entire template of a machine template.
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
export const GetFullMachineTemplate = async ({
    ID,
    onSuccess = () => { },
    onError = () => { },
    onEnd = () => { },
    onStart = () => { }
}) => {
    if (isSimulated()) {
        SimulatedGetFullMachineTemplate({
            ID: ID,
            onSuccess: onSuccess,
            onError: onError,
            onEnd: onEnd,
            onStart: onStart
        });
    } else {
        RealGetFullMachineTemplate({
            ID: ID,
            onSuccess: onSuccess,
            onError: onError,
            onEnd: onEnd,
            onStart: onStart
        });
    }
}; 