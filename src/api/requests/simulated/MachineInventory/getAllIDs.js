import store from "../../../../store/store";
import { RandomErrorSimulator } from "../../../../utils/randomErrorSimulator";
import { WaitSimulator } from "../../../../utils/waitSimulator";

/**
 * # SimulatedGetAllMachineInventoryIDs
 * See Interface version for details.
 */
export const SimulatedGetAllMachineInventoryIDs = async ({
    onSuccess = () => { },
    onError = () => { },
    onEnd = () => { },
    onStart = () => { }
}) => {
    console.log("REQ: SIM_GetAllMachineInventoryIDs");

    onStart();
    try {
        await WaitSimulator();
        RandomErrorSimulator();
        const state = store.getState();
        const result = getAllIDsFromReduxStore(state);
        onSuccess(result);
    } catch (err) {
        console.warn("SIM_GetAllMachineInventoryIDs failed", err);
        onError(err);
    } finally {
        onEnd();
    }
};

const getAllIDsFromReduxStore = (state) => {
    const machineInventory = state.simulatedEndpointSlice.object.machineInventory;
    //console.log(machineInventory);
    const IDs = machineInventory
        .filter(obj => obj.id !== undefined) // Only include objects with an id
        .map(obj => obj.id);
    //console.log("IDS: ", IDs);
    return IDs;
};