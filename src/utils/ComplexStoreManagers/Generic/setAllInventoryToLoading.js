const { default: store } = require("../../../store/store");

export async function setAllInventoryToLoading(ids, setToLoadingReducer) {
    ids.forEach(id => {
        store.dispatch(setToLoadingReducer(id));
    });
}