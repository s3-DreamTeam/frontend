import { RealDeleteProductTemplate } from "../../real/ProductTemplates/delete";
import { SimulatedDeleteProductTemplate } from "../../simulated/ProductTemplates/delete";


/**
 * # DeleteProductTemplate
 * Function that calls the backend with an ID...
 * Basically telling it to fuck this one in particular.
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
export const DeleteProductTemplate = async ({
    ID,
    onSuccess = () => { },
    onError = () => { },
    onEnd = () => { },
    onStart = () => { }
}) => {
    if (process.env.REACT_APP_SIMULATE_ENDPOINTS === 'yes') {
        SimulatedDeleteProductTemplate({
            ID: ID,
            onSuccess: onSuccess,
            onError: onError,
            onEnd: onEnd,
            onStart: onStart
        });
    } else {
        RealDeleteProductTemplate({
            ID: ID,
            onSuccess: onSuccess,
            onError: onError,
            onEnd: onEnd,
            onStart: onStart
        });
    }
}; 