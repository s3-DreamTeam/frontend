import { PostGetSurfaceMachineTemplate } from "../../real/MachineTemplates/getSurface";
import { SimulatedGetSurfaceMachineTemplate } from "../../simulated/MachineTemplates/getSurface";

/**
 * # GetSurfaceMachineTemplate
 * Function that calls the backend, to ask to get the bare minimum information
 * about a specific machine template. That means... their manufacturer and their names.
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
export const GetSurfaceMachineTemplate = async ({
    ID,
    onSuccess = () => { },
    onError = () => { },
    onEnd = () => { },
    onStart = () => { }
}) => {
    if (process.env.REACT_APP_SIMULATE_ENDPOINTS === 'yes') {
        SimulatedGetSurfaceMachineTemplate({
            ID: ID,
            onSuccess: onSuccess,
            onError: onError,
            onEnd: onEnd,
            onStart: onStart
        });
    } else {
        PostGetSurfaceMachineTemplate({
            ID: ID,
            onSuccess: onSuccess,
            onError: onError,
            onEnd: onEnd,
            onStart: onStart
        });
    }
}; 