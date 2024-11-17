import { simRemoveFromProductQuantity } from "../../../../store/simulatedEndpointSlice";
import store from "../../../../store/store";
import { RandomErrorSimulator } from "../../../../utils/randomErrorSimulator";
import { WaitSimulator } from "../../../../utils/waitSimulator";

export const SimulatedProductsLossToInventory = async ({

    packet,

    onSuccess = () => { },
    onError = () => { },
    onEnd = () => { },
    onStart = () => { }
}) => {
    console.log("REQ: SimulatedProductsLossToInventory");

    onStart();
    try {
        await WaitSimulator();
        RandomErrorSimulator();
        console.warn(packet);
        store.dispatch(simRemoveFromProductQuantity(packet));
        onSuccess();
    } catch (err) {
        console.warn("SimulatedProductsLossToInventory failed");
        onError(err);
    } finally {
        onEnd();
    }
};