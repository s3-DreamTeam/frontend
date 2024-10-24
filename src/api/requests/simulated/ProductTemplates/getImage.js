import store from "../../../../store/store";
import { RandomErrorSimulator } from "../../../../utils/randomErrorSimulator";
import { WaitSimulator } from "../../../../utils/waitSimulator";

/**
 * # SimulatedGetProductTemplateImage
 * See Interface version for details.
 */
export const SimulatedGetProductTemplateImage = async ({
    ID,
    onSuccess = () => { },
    onError = () => { },
    onEnd = () => { },
    onStart = () => { }
}) => {
    console.log("REQ: SIM_GetProductTemplateImage");

    onStart();
    try {
        await WaitSimulator();
        RandomErrorSimulator();
        const state = store.getState();
        const result = getTemplateImage(state, ID);
        onSuccess(result);
    } catch (err) {
        console.warn("SIM_GetProductTemplateImage failed");
        onError(err);
    } finally {
        onEnd();
    }
};

const getTemplateImage = (state, id) => {
    //console.log("getSurfaceMachineTemplate");
    //console.log(state.simulatedEndpointSlice.object.machineTemplates);
    const completeProductTemplate = state.simulatedEndpointSlice.object.productTemplates.find(template => template.id === id) || null; // Return the template with matching ID or null
    console.log(completeProductTemplate);
    if (completeProductTemplate === null) {
        return null;
    }
    //console.warn(completeMachineTemplate);
    const image = completeProductTemplate[`Product's Image`];
    //console.warn(image);
    return {
        "Image": image,
    };
};