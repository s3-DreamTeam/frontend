import store from "../../../../store/store";
import { RandomErrorSimulator } from "../../../../utils/randomErrorSimulator";
import { WaitSimulator } from "../../../../utils/waitSimulator";

/**
 * # SimulatedGetSurfaceMachineInventory
 * See Interface version for details.
 */
export const SimulatedGetSurfaceMachineInventory = async ({
    ID,
    onSuccess = () => { },
    onError = () => { },
    onEnd = () => { },
    onStart = () => { }
}) => {
    console.log("REQ: SIM_GetSurfaceMachineInventory");

    onStart();
    try {
        await WaitSimulator();
        RandomErrorSimulator();
        const state = store.getState();
        const result = getSurfaceMachineInventory(state, ID);
        onSuccess(result);
    } catch (err) {
        console.warn("SIM_GetSurfaceMachineInventory failed");
        onError(err);
    } finally {
        onEnd();
    }
};

const getSurfaceMachineInventory = (state, id) => {
    //console.log("getSurfaceMachineInventory");
    //console.log(state.simulatedEndpointSlice.object.machineInventory);
    const completeMachineInventory = state.simulatedEndpointSlice.object.machineInventory.find(inventory => inventory.id === id) || null; // Return the machine with matching ID or null
    //console.log(completeMachineInventory);
    if (completeMachineInventory === null) {
        return null;
    }

    return {
        "Name": completeMachineInventory.Name,
        "Location": completeMachineInventory.Location,
        "TemplateID": completeMachineInventory.TemplateID,
        "Lowest product count": 0,
        "id": completeMachineInventory.id
    };
};