import { addNewMachineTemplateID, removeMachineTemplateByID } from "../../../store/machineTemplateSlice";
import store from "../../../store/store";

export const cleanUserMachineTemplatesIDs = (receivednewListOfTemplateIds) => {
    const currentIDList = new Set(GetAllIDsInStore());
    const newListOfTemplateIds = new Set(receivednewListOfTemplateIds);

    console.log(
        "current Ids ", currentIDList,
        "received Ids ", newListOfTemplateIds
    );

    console.log(currentIDList, newListOfTemplateIds);

    // Adding the new IDs to the store
    newListOfTemplateIds.forEach(newId => {
        if (!currentIDList.has(newId)) {
            console.log("ID added to the store! ", newId);
            store.dispatch(addNewMachineTemplateID(newId));
        }
    });

    // Removing the old IDs from the list
    currentIDList.forEach(currentId => {
        if (!newListOfTemplateIds.has(currentId)) {
            console.log("ID removed from the store! ", currentId);
            store.dispatch(removeMachineTemplateByID(currentId));
        }
    });
};

function GetAllIDsInStore() {
    const state = store.getState();
    const machineTemplates = state.machineTemplateSlice.machineTemplates;

    console.log(machineTemplates);

    if (machineTemplates && typeof obj === 'object') {
    }
    console.log("Do we have any keys?");
    return Object.keys(machineTemplates).map(Number); // Convert keys to numbers
}