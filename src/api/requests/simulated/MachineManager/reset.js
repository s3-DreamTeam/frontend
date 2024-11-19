import { simResetMachineInventorySlot } from "../../../../store/simulatedEndpointSlice";
import store from "../../../../store/store";
import { RandomErrorSimulator } from "../../../../utils/randomErrorSimulator";
import { WaitSimulator } from "../../../../utils/waitSimulator";

/**
 * # SimulatedMachineManagerReset
 * See Interface version for details.
 */
export const SimulatedMachineManagerReset = async ({
    packet,
    onSuccess = () => { },
    onError = () => { },
    onEnd = () => { },
    onStart = () => { }
}) => {
    console.log("REQ: SimulatedMachineManagerReset - packet: ", packet);

    onStart();
    try {
        await WaitSimulator();
        RandomErrorSimulator();
        store.dispatch(simResetMachineInventorySlot(packet));
        onSuccess(null);
    } catch (err) {
        console.warn("SimulatedMachineManagerReset failed");
        onError(err);
    } finally {
        onEnd();
    }
};