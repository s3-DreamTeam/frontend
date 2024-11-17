import { simAddToProductQuantity } from "../../../../store/simulatedEndpointSlice";
import store from "../../../../store/store";
import { RandomErrorSimulator } from "../../../../utils/randomErrorSimulator";
import { WaitSimulator } from "../../../../utils/waitSimulator";

export const SimulatedNewProductsAddedToInventory = async ({

    packet,

    onSuccess = () => { },
    onError = () => { },
    onEnd = () => { },
    onStart = () => { }
}) => {
    console.log("REQ: SimulatedNewProductsAddedToInventory");

    onStart();
    try {
        await WaitSimulator();
        RandomErrorSimulator();
        console.warn(packet);
        store.dispatch(simAddToProductQuantity(packet));
        onSuccess();
    } catch (err) {
        console.warn("SimulatedNewProductsAddedToInventory failed");
        onError(err);
    } finally {
        onEnd();
    }
};