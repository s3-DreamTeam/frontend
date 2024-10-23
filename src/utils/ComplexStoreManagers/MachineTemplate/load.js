import { GetAllMachineTemplateIDs } from "../../../api/requests/interface/MachineTemplates/getAllIDs";
import { GetMachineTemplateImage } from "../../../api/requests/interface/MachineTemplates/getImage";
import { GetSurfaceMachineTemplate } from "../../../api/requests/interface/MachineTemplates/getSurface";
import { machineTemplatesLoaded } from "../../../store/initialDataLoadStatusSlice";
import { addNewMachineTemplateID, removeMachineTemplateByID, resetMachineTemplateError, setMachineTemplateData, setMachineTemplateError, setMachineTemplateImageToLoaded, setMachineTemplateImageToLoading, setMachineTemplateToLoaded, setMachineTemplateToLoading } from "../../../store/machineTemplateSlice";
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

export const LoadUsersMachineTemplates = async ({
    onStart = () => { },
    onEnd = () => { },
    onSuccess = () => { },
    onError = () => { }
}) => {

    function GetInventoryFromReduxStore() {
        const state = store.getState();
        return state.machineTemplateSlice.machineTemplates;
    }

    UserInventoryLoader({
        onStart: onStart,
        onEnd: onEnd,
        onSuccess: onSuccess,
        onError: onError,

        technicalDebtSingleExecutionGlobalObject: technicalDebtGlobalObject,

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
        tellStoreMinimalLoadOccuredReducer: machineTemplatesLoaded,

        apiGetAllIDs: GetAllMachineTemplateIDs,
        apiGetImage: GetMachineTemplateImage,
        apiGetSurface: GetSurfaceMachineTemplate
    });

};
