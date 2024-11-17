import { setProductManagerPageID } from "../../store/productManagerSlice";
import store from "../../store/store";

export default function SetupProductInventoryPage(productID) {
    console.log("PUTTING ID IN STORE: ", productID);
    store.dispatch(setProductManagerPageID(productID));
}