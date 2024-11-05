import store from "../../../../store/store";
import { RandomErrorSimulator } from "../../../../utils/randomErrorSimulator";
import { WaitSimulator } from "../../../../utils/waitSimulator";

/**
 * # SimulatedFullGetProductTemplate
 * See Interface version for details.
 */
export const SimulatedFullGetProductTemplate = async ({
    ID,
    onSuccess = () => { },
    onError = () => { },
    onEnd = () => { },
    onStart = () => { }
}) => {
    console.log("REQ: SimulatedFullGetProductTemplate");

    onStart();
    try {
        await WaitSimulator();
        RandomErrorSimulator();
        const state = store.getState();
        const result = getTemplate(state, ID);
        onSuccess(result);
    } catch (err) {
        console.warn("SimulatedFullGetProductTemplate failed");
        onError(err);
    } finally {
        onEnd();
    }
};

const getTemplate = (state, id) => {
    const completeProductTemplate = state.simulatedEndpointSlice.object.productTemplates.find(template => template.id === id) || null; // Return the template with matching ID or null
    return completeProductTemplate;
};