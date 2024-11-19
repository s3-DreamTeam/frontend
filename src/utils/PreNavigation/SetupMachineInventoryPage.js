import { setMachineManagerPageID } from "../../store/machineManagerSlice";
import store from "../../store/store";

export default function SetupMachineInventoryPage(productID) {
    console.log("PUTTING ID IN STORE: ", productID);
    store.dispatch(setMachineManagerPageID(productID));
}