import { backendApi, BackendHeader } from "../../../backend";
import Endpoints from "../../../endpoints";

/**
 * # PostDeleteMachineTemplate
 * See interface version for details
 */
export const PostDeleteMachineTemplate = async ({
    ID,
    onSuccess = () => { },
    onError = () => { },
    onEnd = () => { },
    onStart = () => { }
}) => {
    console.log(Endpoints.MachineTemplate.Delete + " REQ: PostDeleteMachineTemplate - SENT: ", ID);
    onStart();
    try {
        const header = BackendHeader();
        const response = await backendApi.post(
            Endpoints.MachineTemplate.Delete,
            ID,
            header
        );
        console.log(Endpoints.MachineTemplate.Delete + ": REQ: PostDeleteMachineTemplate - GOTTEN : ", response.data);
        onSuccess(response.data);
    } catch (err) {
        console.log(Endpoints.MachineTemplate.Delete + ": REQ: PostDeleteMachineTemplate - ERROR : ", err.message);
        onError(err);
    } finally {
        onEnd();
    }
};