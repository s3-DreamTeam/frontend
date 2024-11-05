import { GetAllMachinesInInventoryIDs } from "../../../api/requests/interface/MachineInventory/getAllIDs";
import { GetImageOfMachineInInventory } from "../../../api/requests/interface/MachineInventory/getImage";
import { GetSurfaceMachineInInventory } from "../../../api/requests/interface/MachineInventory/getSurface";
import { machineInventoryLoaded } from "../../../store/initialDataLoadStatusSlice";
import { addNewMachineInventoryID, removeMachineInventoryByID, resetMachineInventoryError, setMachineInventoryData, setMachineInventoryError, setMachineInventoryImageToLoaded, setMachineInventoryImageToLoading, setMachineInventoryToLoaded, setMachineInventoryToLoading } from "../../../store/machineInventorySlice";
import store from "../../../store/store";
import { UserInventoryLoader } from "../Generic/load";


// Listen... I tried literally everything I could think of... I kept having double tap issues with this bitch...
// None of the by the book implementations I found fixed the issue.
// But this simple global variable?
// You bet it fucking does.

let technicalDebtGlobalObject = {
    processes: 0,
    errorProcess: false,
    executing: false,
};

export const LoadUsersMachineInventory = async ({
    onStart = () => { },
    onEnd = () => { },
    onSuccess = () => { },
    onError = () => { }
}) => {

    function GetInventoryFromReduxStore() {
        const state = store.getState();
        return state.machineInventorySlice.machineInventory;
    }

    UserInventoryLoader({
        onStart: onStart,
        onEnd: onEnd,
        onSuccess: onSuccess,
        onError: onError,

        technicalDebtSingleExecutionGlobalObject: technicalDebtGlobalObject,

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
