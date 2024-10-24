import { GetAllProductTemplateIDs } from "../../../api/requests/interface/ProductTemplates/getAllIDs";
import { GetProductTemplateImage } from "../../../api/requests/interface/ProductTemplates/getImage";
import { GetSurfaceProductTemplate } from "../../../api/requests/interface/ProductTemplates/getSurface";
import { productTemplatesLoaded } from "../../../store/initialDataLoadStatusSlice";
import { addNewProductTemplateID, removeProductTemplateByID, resetProductTemplateError, setProductTemplateData, setProductTemplateError, setProductTemplateImageToLoaded, setProductTemplateImageToLoading } from "../../../store/productTemplateSlice";
import store from "../../../store/store";
import { UserInventoryLoader } from "../Generic/load";
import { UpdateUserInventory } from "../Generic/update";


// Listen... I tried literally everything I could think of... I kept having double tap issues with this bitch...
// None of the by the book implementations I found fixed the issue.
// But this simple global variable?
// You bet it fucking does.

let technicalDebtGlobalObject = {
    processes: 0,
    errorProcess: false,
    executing: false,
};

export const UpdateUserProductTemplates = async ({
    onStart = () => { },
    onEnd = () => { },
    onSuccess = () => { },
    onError = () => { }
}) => {

    function GetInventoryFromReduxStore() {
        const state = store.getState();
        return state.productTemplateSlice.productTemplates;
    }

    UpdateUserInventory({
        onStart: onStart,
        onEnd: onEnd,
        onSuccess: onSuccess,
        onError: onError,

        storeInventoryGetter: GetInventoryFromReduxStore,
        addNewToStoreReducer: addNewProductTemplateID,
        removeFromStoreReducer: removeProductTemplateByID,
        setToLoadingReducer: setProductTemplateImageToLoading,
        setToLoadedReducer: setProductTemplateImageToLoaded,
        setImageToLoadingReducer: setProductTemplateImageToLoading,
        setImageToLoadedReducer: setProductTemplateImageToLoaded,
        resetErrorsReducer: resetProductTemplateError,
        setErrorsReducer: setProductTemplateError,
        setDataReducer: setProductTemplateData,

        apiGetAllIDs: GetAllProductTemplateIDs,
        apiGetImage: GetProductTemplateImage,
        apiGetSurface: GetSurfaceProductTemplate
    });

};
