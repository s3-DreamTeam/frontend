import { GetAllIDsInInventoryStore } from "./getAllStoredIDs";

export const GetNewIDsFromReceivedIDs = (receivedListOfTemplateIds, storeInventoryGetter) => {
    const currentIDList = new Set(GetAllIDsInInventoryStore(storeInventoryGetter));
    const newListOfTemplateIds = new Set(receivedListOfTemplateIds);

    const result = [];
    // Adding the new IDs to the store
    newListOfTemplateIds.forEach(newId => {
        if (!currentIDList.has(newId)) {
            result.push(newId);
        }
    });
    //console.log("well, the function says the new ids are: ", result);
    return result;
};