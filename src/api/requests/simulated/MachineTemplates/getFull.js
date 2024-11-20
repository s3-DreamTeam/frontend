import store from "../../../../store/store";
import { RandomErrorSimulator } from "../../../../utils/randomErrorSimulator";
import { WaitSimulator } from "../../../../utils/waitSimulator";

/**
 * # SimulatedGetFullMachineTemplate
 * See Interface version for details.
 */
export const SimulatedGetFullMachineTemplate = async ({
    ID,
    onSuccess = () => { },
    onError = () => { },
    onEnd = () => { },
    onStart = () => { }
}) => {
    console.log("REQ: SimulatedGetFullMachineTemplate", ID);

    onStart();
    try {
        await WaitSimulator();
        RandomErrorSimulator();
        const state = store.getState();
        const result = getTemplate(state, ID);
        console.log("REQ: SimulatedGetFullMachineTemplate - GOT", result);
        onSuccess(result);
    } catch (err) {
        console.warn("SimulatedGetFullMachineTemplate failed");
        onError(err);
    } finally {
        onEnd();
    }
};

const getTemplate = (state, id) => {
    const completeMachineTemplate = state.simulatedEndpointSlice.object.machineTemplates.find(template => template.id === id) || null; // Return the template with matching ID or null
    return completeMachineTemplate;
};