import store from "../../../../store/store";
import { RandomErrorSimulator } from "../../../../utils/randomErrorSimulator";
import { WaitSimulator } from "../../../../utils/waitSimulator";
import { getMachineInventory } from "../MachineManager/get";

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
        const result = await getInventory(state, ID);
        onSuccess(result);
    } catch (err) {
        console.warn("SimulatedGetFullMachineInventory failed");
        onError(err);
    } finally {
        onEnd();
    }
};

const getInventory = async (state, id) => {
    let completeMachineInventory = state.simulatedEndpointSlice.object.machineInventory.find(machines => machines.id === id) || null; // Return the machine with matching ID or null

    // Calculate the Quantity left in the machine:
    const inventory = await getMachineInventory(state, id);
    let lowestQuantity = 0;
    if (inventory !== null && inventory !== undefined) {
        for (const slot of inventory) {
            if (slot.ProductID !== null) {
                if (-Number(slot.Quantity) < lowestQuantity) {
                    lowestQuantity = -Number(slot.Quantity);
                }
            }
        }
    }
    if (lowestQuantity < 0) {
        lowestQuantity = -lowestQuantity;
    }

    console.log("Lowest quantity for this machine is ", lowestQuantity);

    return { ...completeMachineInventory, "Lowest product count": lowestQuantity };
};