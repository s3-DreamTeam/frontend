import store from "../../../../store/store";
import { RandomErrorSimulator } from "../../../../utils/randomErrorSimulator";
import { WaitSimulator } from "../../../../utils/waitSimulator";

/**
 * # SimulatedGetMachineInventoryImage
 * See Interface version for details.
 */
export const SimulatedGetMachineInventoryImage = async ({
    ID,
    onSuccess = () => { },
    onError = () => { },
    onEnd = () => { },
    onStart = () => { }
}) => {
    console.log("REQ: SIM_GetMachineInventoryImage");

    onStart();
    try {
        await WaitSimulator();
        RandomErrorSimulator();
        const state = store.getState();
        const result = getInventoryImage(state, ID);
        onSuccess(result);
    } catch (err) {
        console.warn("SIM_GetMachineInventoryImage failed");
        onError(err);
    } finally {
        onEnd();
    }
};

const getInventoryImage = (state, id) => {
    //console.log("getSurfaceMachineInventory");
    //console.log(state.simulatedEndpointSlice.object.machineInventory);
    const completeMachineInventory = state.simulatedEndpointSlice.object.machineInventory.find(machines => machines.id === id) || null; // Return the machine with matching ID or null
    //console.log(completeMachineInventory);
    if (completeMachineInventory === null) {
        return null;
    }
    //console.warn(completeMachineInventory);
    const image = completeMachineInventory[`Machine's Image`];
    //console.warn(image);
    return {
        "Image": image,
    };
};