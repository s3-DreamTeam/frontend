import store from "../../../../store/store";
import { RandomErrorSimulator } from "../../../../utils/randomErrorSimulator";
import { WaitSimulator } from "../../../../utils/waitSimulator";

/**
 * # SimulatedGetSurfaceProductTemplate
 * See Interface version for details.
 */
export const SimulatedGetSurfaceProductTemplate = async ({
    ID,
    onSuccess = () => { },
    onError = () => { },
    onEnd = () => { },
    onStart = () => { }
}) => {
    console.log("REQ: SIM_GetSurfaceProductTemplate");

    onStart();
    try {
        await WaitSimulator();
        RandomErrorSimulator();
        const state = store.getState();
        const result = getSurfaceTemplate(state, ID);
        onSuccess(result);
    } catch (err) {
        console.warn("SIM_GetSurfaceProductTemplate failed");
        onError(err);
    } finally {
        onEnd();
    }
};

const getSurfaceTemplate = (state, id) => {
    //console.log("getSurfaceMachineTemplate");
    //console.log(state.simulatedEndpointSlice.object.machineTemplates);
    const completeProductTemplate = state.simulatedEndpointSlice.object.productTemplates.find(template => template.id === id) || null; // Return the template with matching ID or null
    //console.log(completeMachineTemplate);
    if (completeProductTemplate === null) {
        return null;
    }

    return {
        "Manufacturer": completeProductTemplate.Manufacturer,
        "Model": completeProductTemplate.Model,
        "id": completeProductTemplate.id
    };
};