import { GetAllMachinesInInventoryIDs } from "../../../api/requests/interface/MachineInventory/getAllIDs";
import { GetImageOfMachineInInventory } from "../../../api/requests/interface/MachineInventory/getImage";
import { GetSurfaceMachineInInventory } from "../../../api/requests/interface/MachineInventory/getSurface";
import { machineInventoryLoaded } from "../../../store/initialDataLoadStatusSlice";
import { addNewMachineInventoryID, removeMachineInventoryByID, resetMachineInventoryError, setMachineInventoryData, setMachineInventoryError, setMachineInventoryImageToLoaded, setMachineInventoryImageToLoading, setMachineInventoryToLoaded, setMachineInventoryToLoading } from "../../../store/machineInventorySlice";
import store from "../../../store/store";
import { UpdateUserInventory } from "../Generic/update";

/**
 * # UpdateUserMachineInventory
 * Quietly loads all changes into the user's machine's inventory
 * @param {*} param0 
 */
export const UpdateUserMachineInventory = async ({
    onStart = () => { },
    onEnd = () => { },
    onSuccess = () => { },
    onError = () => { }
}) => {

    function GetInventoryFromReduxStore() {
        const state = store.getState();
        return state.machineInventorySlice.machineInventory;
    }

    UpdateUserInventory({
        onStart: onStart,
        onEnd: onEnd,
        onSuccess: onSuccess,
        onError: onError,

        storeInventoryGetter: GetInventoryFromReduxStore,
        addNewToStoreReducer: addNewMachineInventoryID,
        removeFromStoreReducer: removeMachineInventoryByID,
        setToLoadingReducer: setMachineInventoryToLoading,
        setToLoadedReducer: setMachineInventoryToLoaded,
        setImageToLoadingReducer: setMachineInventoryImageToLoading,
        setImageToLoadedReducer: setMachineInventoryImageToLoaded,
        resetErrorsReducer: resetMachineInventoryError,
        setErrorsReducer: setMachineInventoryError,
        setDataReducer: setMachineInventoryData,
        tellStoreMinimalLoadOccuredReducer: machineInventoryLoaded,

        apiGetAllIDs: GetAllMachinesInInventoryIDs,
        apiGetImage: GetImageOfMachineInInventory,
        apiGetSurface: GetSurfaceMachineInInventory
    });
};