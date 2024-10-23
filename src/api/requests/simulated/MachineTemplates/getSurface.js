import store from "../../../../store/store";
import { RandomErrorSimulator } from "../../../../utils/randomErrorSimulator";
import { WaitSimulator } from "../../../../utils/waitSimulator";

/**
 * # SimulatedGetSurfaceMachineTemplate
 * See Interface version for details.
 */
export const SimulatedGetSurfaceMachineTemplate = async ({
    ID,
    onSuccess = () => { },
    onError = () => { },
    onEnd = () => { },
    onStart = () => { }
}) => {
    console.log("REQ: SIM_GetSurfaceMachineTemplate");

    onStart();
    try {
        await WaitSimulator();
        RandomErrorSimulator();
        const state = store.getState();
        const result = getSurfaceMachineTemplate(state, ID);
        onSuccess(result);
    } catch (err) {
        console.warn("SIM_GetSurfaceMachineTemplate failed");
        onError(err);
    } finally {
        onEnd();
    }
};

const getSurfaceMachineTemplate = (state, id) => {
    //console.log("getSurfaceMachineTemplate");
    //console.log(state.simulatedEndpointSlice.object.machineTemplates);
    const completeMachineTemplate = state.simulatedEndpointSlice.object.machineTemplates.find(template => template.id === id) || null; // Return the template with matching ID or null
    //console.log(completeMachineTemplate);
    if (completeMachineTemplate === null) {
        return null;
    }

    return {
        "Manufacturer": completeMachineTemplate.Manufacturer,
        "Model": completeMachineTemplate.Model,
        "id": completeMachineTemplate.id
    };
};