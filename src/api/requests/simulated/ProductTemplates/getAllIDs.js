import store from "../../../../store/store";
import { RandomErrorSimulator } from "../../../../utils/randomErrorSimulator";
import { WaitSimulator } from "../../../../utils/waitSimulator";

/**
 * # SimulatedGetAllProductTemplateIDs
 * See Interface version for details.
 */
export const SimulatedGetAllProductTemplateIDs = async ({
    onSuccess = () => { },
    onError = () => { },
    onEnd = () => { },
    onStart = () => { }
}) => {
    console.log("REQ: SIM_GetAllProductTemplateIDs");

    onStart();
    try {
        await WaitSimulator();
        RandomErrorSimulator();
        const state = store.getState();
        const result = getAllIDsFromReduxStore(state);
        onSuccess(result);
    } catch (err) {
        console.warn("SIM_GetAllProductTemplateIDs failed", err);
        onError(err);
    } finally {
        onEnd();
    }
};

const getAllIDsFromReduxStore = (state) => {
    const productTemplates = state.simulatedEndpointSlice.object.productTemplates;
    //console.log(machineTemplates);
    const IDs = productTemplates
        .filter(obj => obj.id !== undefined) // Only include objects with an id
        .map(obj => obj.id);
    //console.log("IDS: ", IDs);
    return IDs;
};