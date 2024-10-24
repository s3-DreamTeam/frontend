import { RealNewProductTemplate } from "../../real/ProductTemplates/new";
import { SimulatedNewProductTemplate } from "../../simulated/ProductTemplates/new";

/**
 * # NewProductTemplate
 * Function that calls the backend, to create a new product template in it.
 * 
 * ---
 * @param {*} packet Object created by the prdduct template form's submition.
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
export const NewProductTemplate = async ({

    packet,

    onSuccess = () => { },
    onError = () => { },
    onEnd = () => { },
    onStart = () => { }
}) => {
    if (process.env.REACT_APP_SIMULATE_ENDPOINTS === 'yes') {
        SimulatedNewProductTemplate({
            packet: packet,
            onSuccess: onSuccess,
            onError: onError,
            onEnd: onEnd,
            onStart: onStart
        });
    } else {
        RealNewProductTemplate({
            packet: packet,
            onSuccess: onSuccess,
            onError: onError,
            onEnd: onEnd,
            onStart: onStart
        });
    }
}; 