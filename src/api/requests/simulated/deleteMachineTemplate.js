import { simRemoveMachineTemplate } from "../../../store/simulatedEndpointSlice";
import store from "../../../store/store";
import { RandomErrorSimulator } from "../../../utils/randomErrorSimulator";
import { WaitSimulator } from "../../../utils/waitSimulator";

/**
 * # SimulatedDeleteMachineTemplate
 * See Interface version for details.
 */
export const SimulatedDeleteMachineTemplate = async ({
    ID,
    onSuccess = () => { },
    onError = () => { },
    onEnd = () => { },
    onStart = () => { }
}) => {
    console.log("REQ: SIM_DeleteMachineTemplate: ", ID);

    onStart();
    try {
        await WaitSimulator();
        RandomErrorSimulator();
        store.dispatch(simRemoveMachineTemplate(ID));
        onSuccess(null);
    } catch (err) {
        console.warn("SIM_GetSurfaceMachineTemplate failed");
        onError(err);
    } finally {
        onEnd();
    }
};