import { sleep } from "../../../utils/sleep";
import { addNewMachineTemplate } from "../../../store/simulatedEndpointSlice";
import store from "../../../store/store";

/**
 * # SimulatedNewMachineTemplate
 * Function that calls the backend, to create a new user in it.
 * 
 * ---
 * See Interface version for details.
 */
export const SimulatedNewMachineTemplate = async ({

    machineTemplateObject,

    onSuccess = () => { },
    onError = () => { },
    onEnd = () => { },
    onStart = () => { }
}) => {
    console.log("REQ: SIM_PostNewMachineTemplate");

    onStart();
    try {
        await sleep(2000);
        store.dispatch(addNewMachineTemplate(machineTemplateObject));
        onSuccess();
    } catch (err) {
        onError(err);
    } finally {
        onEnd();
    }
};