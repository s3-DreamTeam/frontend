import store from "../../../../store/store";
import { RandomErrorSimulator } from "../../../../utils/randomErrorSimulator";
import { WaitSimulator } from "../../../../utils/waitSimulator";
import { getMachineInventory } from "../MachineManager/get";

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
        const result = await getSurfaceMachineInventory(state, ID);
        console.log("REQ: SIM_GetSurfaceMachineInventory - Gotten: ", result);
        onSuccess(result);
    } catch (err) {
        console.warn("SIM_GetSurfaceMachineInventory failed");
        onError(err);
    } finally {
        onEnd();
    }
};

const getSurfaceMachineInventory = async (state, id) => {
    //console.log("getSurfaceMachineInventory");
    //console.log(state.simulatedEndpointSlice.object.machineInventory);
    let completeMachineInventory = state.simulatedEndpointSlice.object.machineInventory.find(inventory => inventory.id === id) || null; // Return the machine with matching ID or null
    //console.log(completeMachineInventory);
    if (completeMachineInventory === null) {
        return null;
    }

    // Calculate the Quantity left in the machine:
    const inventory = await getMachineInventory(state, id);
    let lowestQuantity = 0;
    if (inventory !== null && inventory !== undefined) {
        console.log("Inventory exists!", inventory);
        for (const slot of inventory) {
            console.warn(-Number(slot.Quantity), " < ", lowestQuantity);
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

    console.warn("Lowest quantity for this machine is ", lowestQuantity);

    return {
        "Name": completeMachineInventory.Name,
        "Location": completeMachineInventory.Location,
        "TemplateID": completeMachineInventory.TemplateID,
        "Lowest product count": lowestQuantity,
        "id": completeMachineInventory.id
    };
};