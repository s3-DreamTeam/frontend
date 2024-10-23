import { GetAllIDsInInventoryStore } from "./getAllStoredIDs";

export const GetNewIdsFromReceivedIDs = (receivedListOfTemplateIds) => {
    const currentIDList = new Set(GetAllIDsInInventoryStore());
    const newListOfTemplateIds = new Set(receivedListOfTemplateIds);

    const result = [];
    newListOfTemplateIds.forEach(newId => {
        if (!currentIDList.has(newId)) {
            result.push(newId);
        }
    });
    return result;
};