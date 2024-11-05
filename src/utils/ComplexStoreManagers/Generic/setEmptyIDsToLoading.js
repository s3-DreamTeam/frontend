import store from "../../../store/store";

export async function setEmptyToLoading(ids, setToLoadingReducer, storeInventoryGetter) {
    const itemsInStore = storeInventoryGetter();
    ids.forEach(id => {
        if (itemsInStore[id].isLoading === null) {
            store.dispatch(setToLoadingReducer(id));
        }
    });
}