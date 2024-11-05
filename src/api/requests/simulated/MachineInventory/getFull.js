import store from "../../../../store/store";
import { RandomErrorSimulator } from "../../../../utils/randomErrorSimulator";
import { WaitSimulator } from "../../../../utils/waitSimulator";

/**
 * # SimulatedGetFullMachineInventory
 * See Interface version for details.
 */
export const SimulatedGetFullMachineInventory = async ({
    ID,
    onSuccess = () => { },
    onError = () => { },
    onEnd = () => { },
    onStart = () => { }
}) => {
    console.log("REQ: SimulatedGetFullMachineInventory");

    onStart();
    try {
        await WaitSimulator();
        RandomErrorSimulator();
        const state = store.getState();
        const result = getInventory(state, ID);
        onSuccess(result);
    } catch (err) {
        console.warn("SimulatedGetFullMachineInventory failed");
        onError(err);
    } finally {
        onEnd();
    }
};

const getInventory = (state, id) => {
    const completeMachineInventory = state.simulatedEndpointSlice.object.machineInventory.find(machines => machines.id === id) || null; // Return the machine with matching ID or null
    return completeMachineInventory;
};