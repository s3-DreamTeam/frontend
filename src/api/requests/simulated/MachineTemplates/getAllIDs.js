import store from "../../../../store/store";
import { RandomErrorSimulator } from "../../../../utils/randomErrorSimulator";
import { WaitSimulator } from "../../../../utils/waitSimulator";

/**
 * # SimulatedGetAllMAchineTemplateIDs
 * See Interface version for details.
 */
export const SimulatedGetAllMAchineTemplateIDs = async ({
    onSuccess = () => { },
    onError = () => { },
    onEnd = () => { },
    onStart = () => { }
}) => {
    console.log("REQ: SIM_GetAllMAchineTemplateIDs");

    onStart();
    try {
        await WaitSimulator();
        RandomErrorSimulator();
        const state = store.getState();
        const result = getAllIDsFromReduxStore(state);
        onSuccess(result);
    } catch (err) {
        console.warn("SIM_GetAllMachineTemplateIDs failed", err);
        onError(err);
    } finally {
        onEnd();
    }
};

const getAllIDsFromReduxStore = (state) => {
    const machineTemplates = state.simulatedEndpointSlice.object.machineTemplates;
    //console.log(machineTemplates);
    const IDs = machineTemplates
        .filter(obj => obj.id !== undefined) // Only include objects with an id
        .map(obj => obj.id);
    //console.log("IDS: ", IDs);
    return IDs;
};