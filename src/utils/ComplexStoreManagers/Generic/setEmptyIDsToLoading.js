import store from "../../../store/store";

export async function setEmptyToLoading(ids, setToLoadingReducer, storeInventoryGetter) {
    const machineTemplates = storeInventoryGetter();
    ids.forEach(id => {
        if (machineTemplates[id].isLoading === null) {
            store.dispatch(setToLoadingReducer(id));
        }
    });
}