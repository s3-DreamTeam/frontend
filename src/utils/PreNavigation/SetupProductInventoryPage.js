import { setProductManagerPageGoBackEndpoint, setProductManagerPageID } from "../../store/productManagerSlice";
import store from "../../store/store";

export default function SetupProductInventoryPage(productID, goBackEndpoint) {
    console.log("PUTTING ID IN STORE: ", productID);
    store.dispatch(setProductManagerPageID(productID));
    store.dispatch(setProductManagerPageGoBackEndpoint(goBackEndpoint));
}