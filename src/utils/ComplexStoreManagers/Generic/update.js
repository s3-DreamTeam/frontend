import store from "../../../store/store";
import { CleanInventoryIDs } from "./cleanIDs";
import { GetNewIDsFromReceivedIDs } from "./getNewIDsFromReceivedIDs";
import { setEmptyToLoading } from "./setEmptyIDsToLoading";


/**
 * # UpdateUserInventory
 * Quietly loads all changes made to a specific inventory, into their redux store.
 * @param {*} param0 
 */
export const UpdateUserInventory = async ({
    onStart = () => { },
    onEnd = () => { },
    onSuccess = () => { },
    onError = () => { },

    storeInventoryGetter,

    addNewToStoreReducer,
    removeFromStoreReducer,
    setToLoadingReducer,
    setToLoadedReducer,
    setImageToLoadingReducer,
    setImageToLoadedReducer,
    resetErrorsReducer,
    setErrorsReducer,
    setDataReducer,

    apiGetAllIDs,
    apiGetSurface,
    apiGetImage,

}) => {
    function GotAllTheIds(ids) {
        //console.warn(ids);
        const newIds = GetNewIDsFromReceivedIDs(ids, storeInventoryGetter);
        CleanInventoryIDs(ids, storeInventoryGetter, addNewToStoreReducer, removeFromStoreReducer);
        setEmptyToLoading(ids, setToLoadingReducer, storeInventoryGetter);
        SurfaceFetches(newIds);
    }

    function SurfaceFetches(ids) {
        ids.forEach(id => {
            apiGetSurface({
                ID: id,
                onStart: () => {
                    // Set it to loading
                    store.dispatch(setToLoadingReducer(id));
                    store.dispatch(setImageToLoadingReducer(id));
                    store.dispatch(resetErrorsReducer(id));
                },
                onEnd: () => {
                    store.dispatch(setToLoadedReducer(id));
                },
                onError: (e) => {
                    console.warn("Failed to get surface data of machine template with ID: " + id);
                    store.dispatch(setErrorsReducer({ id: id, error: String(e) }));
                    onError(e);
                },
                onSuccess: (surfaceData) => {
                    store.dispatch(setDataReducer({
                        id: id,
                        data: surfaceData
                    }));
                    //console.log("got ", surfaceData, " for id ", id);

                    apiGetImage({
                        ID: id,
                        onStart: () => {
                            store.dispatch(setImageToLoadingReducer(id));
                        },
                        onEnd: () => {
                            store.dispatch(setImageToLoadedReducer(id));
                        },
                        onError: (e) => {
                            console.warn("Failed to get the image data of machine template with ID: " + id);
                            store.dispatch(setErrorsReducer({ id: id, error: String(e) }));
                            onError(e);
                        },
                        onSuccess: (image) => {
                            store.dispatch(setDataReducer({
                                id: id,
                                data: image
                            }));
                        }
                    });
                }
            });
        });
    }

    apiGetAllIDs({
        onSuccess: GotAllTheIds,
        onError: onError,
        onStart: onStart,
        onEnd: onEnd
    });
};