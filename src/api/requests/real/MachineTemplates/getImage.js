import { backendApi, BackendHeader } from "../../../backend";
import Endpoints from "../../../endpoints";

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
    console.log(Endpoints.MachineTemplate.Get.Image + ": REQ: PostGetMachineTemplateImage");
    onStart();
    try {
        const header = BackendHeader();
        const response = await backendApi.post(
            Endpoints.MachineTemplate.Get.Image,
            ID,
            header
        );
        console.log(Endpoints.MachineTemplate.Get.Image + ": REQ: PostGetMachineTemplateImage - GOTTEM: ", response.data);
        onSuccess(response.data);
    } catch (err) {
        console.log(Endpoints.MachineTemplate.Get.Image + ": REQ: PostGetMachineTemplateImage - ERROR: ", err.message);
        onError(err);
    } finally {
        onEnd();
    }
};