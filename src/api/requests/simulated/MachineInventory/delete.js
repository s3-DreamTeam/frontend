import { simRemoveMachineFromInventory } from "../../../../store/simulatedEndpointSlice";
import store from "../../../../store/store";
import { RandomErrorSimulator } from "../../../../utils/randomErrorSimulator";
import { WaitSimulator } from "../../../../utils/waitSimulator";

/**
 * # SimulatedDeleteMachineInventory
 * See Interface version for details.
 */
export const SimulatedDeleteMachineInventory = async ({
    ID,
    onSuccess = () => { },
    onError = () => { },
    onEnd = () => { },
    onStart = () => { }
}) => {
    console.log("REQ: SIM_DeleteMachineInventory: ", ID);

    onStart();
    try {
        await WaitSimulator();
        RandomErrorSimulator();
        store.dispatch(simRemoveMachineFromInventory(ID));
        onSuccess(null);
    } catch (err) {
        console.warn("SIM_DeleteMachineInventory failed");
        onError(err);
    } finally {
        onEnd();
    }
};