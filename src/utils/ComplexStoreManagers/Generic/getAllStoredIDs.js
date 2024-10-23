export function GetAllIDsInInventoryStore(storeInventoryGetter) {
    const machineTemplates = storeInventoryGetter();
    return Object.keys(machineTemplates).map(Number); // Convert keys to numbers
}