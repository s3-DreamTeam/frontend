import { simCreateMachineInventory } from "../../../../store/simulatedEndpointSlice";
import store from "../../../../store/store";
import { RandomErrorSimulator } from "../../../../utils/randomErrorSimulator";
import { sleep } from "../../../../utils/sleep";
import { WaitSimulator } from "../../../../utils/waitSimulator";

/**
 * # SimulatedMachineManagerGet
 * See Interface version for details.
 */
export const SimulatedMachineManagerGet = async ({
    ID,
    onSuccess = () => { },
    onError = () => { },
    onEnd = () => { },
    onStart = () => { }
}) => {
    console.log("REQ: SimulatedMachineManagerGet - ID: ", ID);

    onStart();
    try {
        await WaitSimulator();
        RandomErrorSimulator();
        const state = store.getState();
        const result = await getMachineInventory(state, ID);
        onSuccess(result);
    } catch (err) {
        console.warn("SimulatedMachineManagerGet failed");
        onError(err);
    } finally {
        onEnd();
    }
};

export const getMachineInventory = async (state, id) => {
    const completeMachine = state.simulatedEndpointSlice.object.machineInventory.find(inventory => inventory.id === id) || null; // Return the machine with matching ID or null

    if (completeMachine === null) {
        console.warn("REQ: SimulatedMachineManagerGet - COULDN'T FIND THE MACHINE IN THE REDUX STORE");
        return null;
    }

    // Get the inventory from it, bozo.
    const inventory = completeMachine.Inventory;
    console.log("REQ: SimulatedMachineManagerGet - Inventory: ", inventory);

    // Check if its there at all.
    if (inventory === null || inventory === undefined) {
        console.warn("REQ: SimulatedMachineManagerGet - NO INVENTORY FOUND. TRYING TO CREATE IT...");
        // Oh... I gotta create it...
        await store.dispatch(simCreateMachineInventory(id));

        // I fucking hopes this bullshit works...
        const newState = store.getState();
        const completeMachineAfterInventory = newState.simulatedEndpointSlice.object.machineInventory.find(inventory => inventory.id === id) || null; // Return the machine with matching ID or null
        console.log("REQ: SimulatedMachineManagerGet - Machine after: ", completeMachineAfterInventory);
        const inventoryAfterAddition = completeMachineAfterInventory["Inventory"];

        return inventoryAfterAddition;
    } else {
        return inventory;
    }


};