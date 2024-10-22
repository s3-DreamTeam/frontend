import { addNewMachineTemplateID, removeMachineTemplateByID } from "../../../store/machineTemplateSlice";
import store from "../../../store/store";

export const cleanUserMachineTemplatesIDs = (newListOfTemplateIds) => {
    const currentIDList = new Set(GetAllIDsInStore());

    console.log(
        "current Ids ", currentIDList,
        "received Ids ", newListOfTemplateIds
    );

    console.log(currentIDList);

    // Adding the new IDs to the store
    newListOfTemplateIds.forEach(newId => {
        if (!currentIDList.has(newId)) {
            store.dispatch(addNewMachineTemplateID(newId));
        }
    });

    // Removing the old IDs from the list
    currentIDList.forEach(currentId => {
        if (!newListOfTemplateIds.array.includes(currentId)) {
            store.dispatch(removeMachineTemplateByID(currentId));
        }
    });
};

function GetAllIDsInStore() {
    const state = store.getState();
    const machineTemplates = state.machineTemplateSlice.machineTemplates;

    console.log(machineTemplates);

    if (machineTemplates && typeof obj === 'object') {
        return Object.keys(machineTemplates).map(Number); // Convert keys to numbers
    }
    return [];
}