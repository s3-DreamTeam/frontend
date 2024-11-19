import { simAddMachineInventorySlotQuantity } from "../../../../store/simulatedEndpointSlice";
import store from "../../../../store/store";
import { RandomErrorSimulator } from "../../../../utils/randomErrorSimulator";
import { WaitSimulator } from "../../../../utils/waitSimulator";

/**
 * # SimulatedMachineManagerAdd
 * See Interface version for details.
 */
export const SimulatedMachineManagerAdd = async ({
    packet,
    onSuccess = () => { },
    onError = () => { },
    onEnd = () => { },
    onStart = () => { }
}) => {
    console.log("REQ: SimulatedMachineManagerAdd - packet: ", packet);

    onStart();
    try {
        await WaitSimulator();
        RandomErrorSimulator();
        store.dispatch(simAddMachineInventorySlotQuantity(packet));
        onSuccess(null);
    } catch (err) {
        console.warn("SimulatedMachineManagerAdd failed");
        onError(err);
    } finally {
        onEnd();
    }
};