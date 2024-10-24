import { RealGetProductTemplateImage } from "../../real/ProductTemplates/getImage";
import { SimulatedGetProductTemplateImage } from "../../simulated/ProductTemplates/getImage";

/**
 * # GetProductTemplateImage
 * Function that calls the backend, to ask to get the image of a product template.
 * Since images are heavy, like your mother, we deciced to separate the calls of surface levels
 * to async get images later.
 * 
 * Btw, if you have a thousand images... We're loading em all in your ram.
 * Good luck!
 * No, I'm not optimizing it.
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
export const GetProductTemplateImage = async ({
    ID,
    onSuccess = () => { },
    onError = () => { },
    onEnd = () => { },
    onStart = () => { }
}) => {
    if (process.env.REACT_APP_SIMULATE_ENDPOINTS === 'yes') {
        SimulatedGetProductTemplateImage({
            ID: ID,
            onSuccess: onSuccess,
            onError: onError,
            onEnd: onEnd,
            onStart: onStart
        });
    } else {
        RealGetProductTemplateImage({
            ID: ID,
            onSuccess: onSuccess,
            onError: onError,
            onEnd: onEnd,
            onStart: onStart
        });
    }
}; 