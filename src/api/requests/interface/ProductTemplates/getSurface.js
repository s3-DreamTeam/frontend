import { RealGetSurfaceProductTemplate } from "../../real/ProductTemplates/getSurface";
import { SimulatedGetSurfaceProductTemplate } from "../../simulated/ProductTemplates/getSurface";

/**
 * # GetSurfaceProductTemplate
 * Function that calls the backend, to ask to get the bare minimum information
 * about a specific product template. That means... their manufacturer and their names.
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
export const GetSurfaceProductTemplate = async ({
    ID,
    onSuccess = () => { },
    onError = () => { },
    onEnd = () => { },
    onStart = () => { }
}) => {
    if (process.env.REACT_APP_SIMULATE_ENDPOINTS === 'yes') {
        SimulatedGetSurfaceProductTemplate({
            ID: ID,
            onSuccess: onSuccess,
            onError: onError,
            onEnd: onEnd,
            onStart: onStart
        });
    } else {
        RealGetSurfaceProductTemplate({
            ID: ID,
            onSuccess: onSuccess,
            onError: onError,
            onEnd: onEnd,
            onStart: onStart
        });
    }
}; 