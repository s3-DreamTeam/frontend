import { GetAllMachineTemplateIDs } from "../../../api/requests/interface/MachineTemplates/getAllIDs";
import { GetMachineTemplateImage } from "../../../api/requests/interface/MachineTemplates/getImage";
import { GetSurfaceMachineTemplate } from "../../../api/requests/interface/MachineTemplates/getSurface";
import { addNewMachineTemplateID, removeMachineTemplateByID, resetMachineTemplateError, setMachineTemplateData, setMachineTemplateError, setMachineTemplateImageToLoaded, setMachineTemplateImageToLoading, setMachineTemplateToLoaded, setMachineTemplateToLoading } from "../../../store/machineTemplateSlice";
import store from "../../../store/store";
import { UpdateUserInventory } from "../Generic/update";

/**
 * # UpdateUserMachineTemplates
 * Quietly loads all changes into the user's machine templates
 * @param {*} param0 
 */
export const UpdateUserMachineTemplates = async ({
    onStart = () => { },
    onEnd = () => { },
    onSuccess = () => { },
    onError = () => { }
}) => {
    console.log("UpdateUserMachineTemplates");
    function GetInventoryFromReduxStore() {
        const state = store.getState();
        return state.machineTemplateSlice.machineTemplates;
    }

    UpdateUserInventory({
        onStart: onStart,
        onEnd: onEnd,
        onSuccess: onSuccess,
        onError: onError,

        storeInventoryGetter: GetInventoryFromReduxStore,
        addNewToStoreReducer: addNewMachineTemplateID,
        removeFromStoreReducer: removeMachineTemplateByID,
        setToLoadingReducer: setMachineTemplateToLoading,
        setToLoadedReducer: setMachineTemplateToLoaded,
        setImageToLoadingReducer: setMachineTemplateImageToLoading,
        setImageToLoadedReducer: setMachineTemplateImageToLoaded,
        resetErrorsReducer: resetMachineTemplateError,
        setErrorsReducer: setMachineTemplateError,
        setDataReducer: setMachineTemplateData,

        apiGetAllIDs: GetAllMachineTemplateIDs,
        apiGetImage: GetMachineTemplateImage,
        apiGetSurface: GetSurfaceMachineTemplate
    });
};