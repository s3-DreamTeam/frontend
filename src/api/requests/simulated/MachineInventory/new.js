import { simAddNewMachineInInventory } from "../../../../store/simulatedEndpointSlice";
import store from "../../../../store/store";
import { WaitSimulator } from "../../../../utils/waitSimulator";
import { RandomErrorSimulator } from "../../../../utils/randomErrorSimulator";

/**
 * # SimulatedNewMachineInventory
 * Function that calls the backend, to create a new machine in it.
 * 
 * ---
 * See Interface version for details.
 */
export const SimulatedNewMachineInventory = async ({

    machineInventoryObject,

    onSuccess = () => { },
    onError = () => { },
    onEnd = () => { },
    onStart = () => { }
}) => {
    console.log("REQ: SIM_NewMachineInventory");
    console.log(machineInventoryObject);

    onStart();
    try {
        await WaitSimulator();
        RandomErrorSimulator();
        store.dispatch(simAddNewMachineInInventory(machineInventoryObject));
        onSuccess();
    } catch (err) {
        console.warn("SIM_PostNewMachineInventory failed");
        onError(err);
    } finally {
        onEnd();
    }
};