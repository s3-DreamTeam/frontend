import { simResetMachineInventorySlot, simSetMachineInventorySlot } from "../../../../store/simulatedEndpointSlice";
import store from "../../../../store/store";
import { RandomErrorSimulator } from "../../../../utils/randomErrorSimulator";
import { WaitSimulator } from "../../../../utils/waitSimulator";

/**
 * # SimulatedMachineManagerSet
 * See Interface version for details.
 */
export const SimulatedMachineManagerSet = async ({
    packet,
    onSuccess = () => { },
    onError = () => { },
    onEnd = () => { },
    onStart = () => { }
}) => {
    console.log("REQ: SimulatedMachineManagerSet - packet: ", packet);

    onStart();
    try {
        await WaitSimulator();
        RandomErrorSimulator();
        store.dispatch(simSetMachineInventorySlot(packet));
        onSuccess(null);
    } catch (err) {
        console.warn("SimulatedMachineManagerSet failed");
        onError(err);
    } finally {
        onEnd();
    }
};