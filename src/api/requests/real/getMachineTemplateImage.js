import { backendApi, BackendHeader } from "../../backend";
import Endpoints from "../../endpoints";

/**
 * # PostGetMachineTemplateImage
 * See interface version for details
 */
export const PostGetMachineTemplateImage = async ({
    ID,
    onSuccess = () => { },
    onError = () => { },
    onEnd = () => { },
    onStart = () => { }
}) => {
    console.log("REQ: PostGetMachineTemplateImage");
    onStart();
    try {
        const header = BackendHeader();
        const response = await backendApi.post(
            Endpoints.GetMachineTemplateImage,
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