import { addNewMachineTemplate } from "../../../../store/simulatedEndpointSlice";
import store from "../../../../store/store";
import { WaitSimulator } from "../../../../utils/waitSimulator";
import { RandomErrorSimulator } from "../../../../utils/randomErrorSimulator";

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
        await WaitSimulator();
        RandomErrorSimulator();
        store.dispatch(addNewMachineTemplate(machineTemplateObject));
        onSuccess();
    } catch (err) {
        console.warn("SIM_PostNewMachineTemplate failed");
        onError(err);
    } finally {
        onEnd();
    }
};