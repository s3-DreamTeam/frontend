import { RealGetAllProductTemplateIDs } from "../../real/ProductTemplates/getAllIDs";
import { SimulatedGetAllProductTemplateIDs } from "../../simulated/ProductTemplates/getAllIDs";

/**
 * # GetAllProductTemplateIDs
 * Function that calls the backend, to ask an array of all of the logged in user's
 * products template IDs.
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
export const GetAllProductTemplateIDs = async ({

    onSuccess = () => { },
    onError = () => { },
    onEnd = () => { },
    onStart = () => { }
}) => {
    if (process.env.REACT_APP_SIMULATE_ENDPOINTS === 'yes') {
        SimulatedGetAllProductTemplateIDs({
            onSuccess: onSuccess,
            onError: onError,
            onEnd: onEnd,
            onStart: onStart
        });
    } else {
        RealGetAllProductTemplateIDs({
            onSuccess: onSuccess,
            onError: onError,
            onEnd: onEnd,
            onStart: onStart
        });
    }
}; 