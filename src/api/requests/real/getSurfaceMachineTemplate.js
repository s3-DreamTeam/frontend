import { backendApi, BackendHeader } from "../../backend";
import Endpoints from "../../endpoints";

/**
 * # PostNewMachineTemplate
 * See interface version for details
 */
export const PostGetSurfaceMachineTemplate = async ({
    ID,
    onSuccess = () => { },
    onError = () => { },
    onEnd = () => { },
    onStart = () => { }
}) => {
    console.log("REQ: PostGetSurfaceMachineTemplate");
    onStart();
    try {
        const header = BackendHeader();
        const response = await backendApi.post(
            Endpoints.GetSurfaceMachineTemplate,
            ID,
            header
        );
        onSuccess(response);
    } catch (err) {
        onError(err);
    } finally {
        onEnd();
    }
};