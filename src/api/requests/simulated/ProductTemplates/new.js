import { addNewMachineTemplate, simAddNewProductTemplate } from "../../../../store/simulatedEndpointSlice";
import store from "../../../../store/store";
import { WaitSimulator } from "../../../../utils/waitSimulator";
import { RandomErrorSimulator } from "../../../../utils/randomErrorSimulator";

/**
 * # SimulatedNewMachineTemplate
 * Function that calls the backend, to create a new product template in it.
 * 
 * ---
 * See Interface version for details.
 */
export const SimulatedNewProductTemplate = async ({

    packet,

    onSuccess = () => { },
    onError = () => { },
    onEnd = () => { },
    onStart = () => { }
}) => {
    console.log("REQ: SIM_PostNewProductTemplate");

    onStart();
    try {
        await WaitSimulator();
        RandomErrorSimulator();
        store.dispatch(simAddNewProductTemplate(packet));
        onSuccess();
    } catch (err) {
        console.warn("SIM_PostNewMachineTemplate failed");
        onError(err);
    } finally {
        onEnd();
    }
};