import { FetchAllMachineTemplateIDs } from "../real/getAllMachineTemplateIDs";
import { SimulatedGetAllMAchineTemplateIDs } from "../simulated/getAllMachineTemplateIDs";

/**
 * # GetAllMachineTemplateIDs
 * Function that calls the backend, to ask an array of all of the logged in user's
 * machines template IDs.
 * 
 * Used to check saved IDs and fetch the missing ones.
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
export const GetAllMachineTemplateIDs = async ({

    onSuccess = () => { },
    onError = () => { },
    onEnd = () => { },
    onStart = () => { }
}) => {
    if (process.env.REACT_APP_SIMULATE_ENDPOINTS === 'yes') {
        SimulatedGetAllMAchineTemplateIDs({
            onSuccess: onSuccess,
            onError: onError,
            onEnd: onEnd,
            onStart: onStart
        });
    } else {
        FetchAllMachineTemplateIDs({
            onSuccess: onSuccess,
            onError: onError,
            onEnd: onEnd,
            onStart: onStart
        });
    }
}; 