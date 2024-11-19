import { simRemoveMachineInventorySlotQuantity } from "../../../../store/simulatedEndpointSlice";
import store from "../../../../store/store";
import { RandomErrorSimulator } from "../../../../utils/randomErrorSimulator";
import { WaitSimulator } from "../../../../utils/waitSimulator";

/**
 * # SimulatedMachineManagerRemove
 * See Interface version for details.
 */
export const SimulatedMachineManagerRemove = async ({
    packet,
    onSuccess = () => { },
    onError = () => { },
    onEnd = () => { },
    onStart = () => { }
}) => {
    console.log("REQ: SimulatedMachineManagerRemove - packet: ", packet);

    onStart();
    try {
        await WaitSimulator();
        RandomErrorSimulator();
        store.dispatch(simRemoveMachineInventorySlotQuantity(packet));
        onSuccess(null);
    } catch (err) {
        console.warn("SimulatedMachineManagerRemove failed");
        onError(err);
    } finally {
        onEnd();
    }
};