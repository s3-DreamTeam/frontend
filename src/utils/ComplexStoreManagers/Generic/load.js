import store from "../../../store/store";
import { CleanInventoryIDs } from "./cleanIDs";
import { setAllInventoryToLoading } from "./setAllInventoryToLoading";

export const UserInventoryLoader = async ({
    onStart = () => { },
    onEnd = () => { },
    onSuccess = () => { },
    onError = () => { },

    technicalDebtSingleExecutionGlobalObject,

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

    tellStoreMinimalLoadOccuredReducer,

    apiGetAllIDs,
    apiGetSurface,
    apiGetImage,

}) => {

    if (technicalDebtSingleExecutionGlobalObject.executing) {
        // I LOVE TECHNICAL DEBT
        return;
    }
    technicalDebtSingleExecutionGlobalObject.executing = true;

    // Let's see if I can make a non-janky way of knowing once ALL cards successfully loaded... everything they have to load.
    function processStarted() {
        technicalDebtSingleExecutionGlobalObject.processes++;
    }

    function processError() {
        technicalDebtSingleExecutionGlobalObject.errorProcess = true;
    }

    function processEnded() {
        technicalDebtSingleExecutionGlobalObject.processes--;
        if (technicalDebtSingleExecutionGlobalObject.processes <= 0) {
            technicalDebtSingleExecutionGlobalObject.executing = false;
            onEnd();
            if (technicalDebtSingleExecutionGlobalObject.errorProcess === false) {
                onSuccess();
            } else {
                onError("Some errors occured");
            }
        }
    }

    // Successfully did step 1. Onto step 2
    async function GotAllTheIds(ids) {
        // Removes all the stuff with invalid ids. Adds empty slots for the new ones!
        CleanInventoryIDs(ids, storeInventoryGetter, addNewToStoreReducer, removeFromStoreReducer);
        // So that all the cards display a loading icon.
        setAllInventoryToLoading(ids, setToLoadingReducer);
        SurfaceFetches(ids);
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
                    processStarted();
                },
                onEnd: () => {
                    store.dispatch(setToLoadedReducer(id));
                    processEnded();
                },
                onError: (e) => {
                    console.warn("Failed to get surface data with ID: " + id);
                    store.dispatch(setErrorsReducer({ id: id, error: String(e) }));
                    processError();
                    onError(e);
                },
                onSuccess: (surfaceData) => {
                    store.dispatch(setDataReducer({
                        id: id,
                        data: surfaceData
                    }));

                    apiGetImage({
                        ID: id,
                        onStart: () => {
                            // Set it to loading
                            processStarted();
                            store.dispatch(setImageToLoadingReducer(id));
                        },
                        onEnd: () => {
                            processEnded();
                            store.dispatch(setImageToLoadedReducer(id));
                        },
                        onError: (e) => {
                            console.warn("Failed to get the image data with ID: " + id);
                            store.dispatch(setErrorsReducer({ id: id, error: String(e) }));
                            processError();
                            onError(e);
                        },
                        onSuccess: (image) => {
                            store.dispatch(setDataReducer({
                                id: id,
                                data: image
                            }));

                            // - TELLS THE APP THAT INVENTORY WAS LOADED AT MINIMUM ONCE - //
                            store.dispatch(tellStoreMinimalLoadOccuredReducer());
                        }
                    });
                }
            });
        });

        if (ids.length === 0) {
            // - TELLS THE APP THAT INVENTORY WAS LOADED AT MINIMUM ONCE - //
            store.dispatch(tellStoreMinimalLoadOccuredReducer());
            processEnded();
        }
    }

    // First step: Get all the IDs for that inventory
    technicalDebtSingleExecutionGlobalObject.processes = 0;
    technicalDebtSingleExecutionGlobalObject.errorProcess = false;
    apiGetAllIDs({
        onSuccess: GotAllTheIds,
        onError: (e) => {
            processError();
            processEnded();
            onError(e);
        },
        onStart: onStart
    });
};