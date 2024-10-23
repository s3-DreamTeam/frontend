import store from "../../../store/store";
import { GetAllIDsInInventoryStore } from "./getAllStoredIDs";

export const CleanInventoryIDs = (
    receivedIDs,
    storeInventoryGetter,
    addNewToStoreReducer,
    removeFromStoreReducer
) => {
    const currentIDList = new Set(GetAllIDsInInventoryStore(storeInventoryGetter));
    const listOfReceivedIds = new Set(receivedIDs);

    // Adding the new IDs to the inventory store
    listOfReceivedIds.forEach(newId => {
        if (!currentIDList.has(newId)) {
            //console.log("ID added to the store! ", newId);
            store.dispatch(addNewToStoreReducer(newId));
        }
    });

    // Removing the old IDs from the list
    currentIDList.forEach(currentId => {
        if (!listOfReceivedIds.has(currentId)) {
            //console.log("ID removed from the store! ", currentId);
            store.dispatch(removeFromStoreReducer(currentId));
        }
    });
};