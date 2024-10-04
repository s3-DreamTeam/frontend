import { BackendHeader, backendApi } from './backend';
import Endpoints from './endpoints';
import { setAllFetchedUsers } from '../store/allFetchedUsersSlice';

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * # FetchAllUsers
 * Function that calls the backend, to fetch all the users.
 * It stores all the users in the appropriate redux store
 * with its own slices n shit
 * 
 * ## Warning
 * Erases the contents of the store uppon a successful request.
 * 
 * ---
 * @param {*} onSuccess
 * Callback executed when the request is successful.
 * @param {*} onError
 * Callback executed when the requests fails for any reasons. Err given as a parameter.
 * @param {*} onEnd
 * Callback executed when the request ends, regardless of how it ended.
 * @param {*} onStart
 * Callback executed right before the request.
 */
export const FetchAllUsers = async ({
    onSuccess = null,
    onError = null,
    onEnd = null,
    onStart = null
}) => {
    console.log("REQ: FetchAllUsers");
    onStart();
    try {
        await sleep(0);
        const header = BackendHeader();
        const response = await backendApi.get(Endpoints.FetchAllUsers, { headers: header });
        onSuccess(response.data);
        setAllFetchedUsers(response.data);
    } catch (err) {
        onError(err);
    } finally {
        onEnd();
    }
};


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
export const PostNewUser = async ({

    email = "Default",
    name = "Default",
    lastName = "Default",
    profilePic = "None",
    balance = 0,
    status = 0,

    onSuccess = null,
    onError = null,
    onEnd = null,
    onStart = null
}) => {
    console.log("REQ: PostNewUser");
    onStart();
    try {
        const header = BackendHeader();
        await sleep(0);
        await backendApi.post(Endpoints.PostNewUser, {
            email: email,
            nom: lastName,
            prenom: name,
            profilPic: profilePic,
            solde: balance,
            statusId: status
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