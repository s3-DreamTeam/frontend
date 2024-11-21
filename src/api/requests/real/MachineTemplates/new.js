import { backendApi, BackendHeader } from "../../../backend";
import Endpoints from "../../../endpoints";

/**
 * # PostNewMachineTemplate
 * See interface version for details
 */
export const PostNewMachineTemplate = async ({

    machineTemplateObject,

    onSuccess = () => { },
    onError = () => { },
    onEnd = () => { },
    onStart = () => { }
}) => {
    console.log(Endpoints.MachineTemplate.New + ": REQ: PostNewMachineTemplate - SENT: ", machineTemplateObject);
    onStart();
    try {
        //await sleep(5000);
        const header = BackendHeader();
        await backendApi.post(
            Endpoints.MachineTemplate.New,
            machineTemplateObject,
            header
        );
        onSuccess();
    } catch (err) {
        console.log(Endpoints.MachineTemplate.New + ": REQ: PostNewMachineTemplate - ERROR: ", err.message);
        onError(err);
    } finally {
        onEnd();
    }
};