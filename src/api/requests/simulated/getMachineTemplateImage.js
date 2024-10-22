import store from "../../../store/store";
import { RandomErrorSimulator } from "../../../utils/randomErrorSimulator";
import { WaitSimulator } from "../../../utils/waitSimulator";

/**
 * # SimulatedGetMachineTemplateImage
 * See Interface version for details.
 */
export const SimulatedGetMachineTemplateImage = async ({
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
        const result = getTemplateImage(state, ID);
        onSuccess(result);
    } catch (err) {
        console.warn("SIM_GetSurfaceMachineTemplate failed");
        onError(err);
    } finally {
        onEnd();
    }
};

const getTemplateImage = (state, id) => {
    //console.log("getSurfaceMachineTemplate");
    //console.log(state.simulatedEndpointSlice.object.machineTemplates);
    const completeMachineTemplate = state.simulatedEndpointSlice.object.machineTemplates.find(template => template.id === id) || null; // Return the template with matching ID or null
    //console.log(completeMachineTemplate);
    if (completeMachineTemplate === null) {
        return null;
    }
    //console.warn(completeMachineTemplate);
    const image = completeMachineTemplate[`Machine's image`];
    //console.warn(image);
    return {
        "Image": image,
    };
};