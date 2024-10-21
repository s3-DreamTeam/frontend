import { backendApi, BackendHeader } from "../backend";
import Endpoints from "../endpoints";

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * # PostNewUser
 * Function that calls the backend, to create a new user in it.
 * 
 * ---
 * @param {*} email The email of the new user
 * @param {*} name The name of the new user
 * @param {*} lastName The last name of the new user
 * @param {*} profilePic The base64 encoded profile picture for that user
 * @param {*} balance The starting balance the user will have
 * @param {*} status The status associated with that user
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
export const PostNewMachineTemplate = async ({

    machineTemplateObject,

    onSuccess = () => { },
    onError = () => { },
    onEnd = () => { },
    onStart = () => { }
}) => {
    console.log("REQ: PostNewMachineTemplate");
    onStart();
    try {
        //await sleep(5000);
        const header = BackendHeader();
        await backendApi.post(
            Endpoints.CreateNewMachineTemplate,
            {
                machineTemplateObject
            },
            header
        );
        onSuccess();
    } catch (err) {
        onError(err);
    } finally {
        onEnd();
    }
};