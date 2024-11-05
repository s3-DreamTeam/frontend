import { GetAllProductInventoryIDs } from "../../../api/requests/interface/ProductInventory/getAllIDs";
import { GetImageOfProductInInventory } from "../../../api/requests/interface/ProductInventory/getImage";
import { GetSurfaceProductInInventory } from "../../../api/requests/interface/ProductInventory/getSurface";
import { productInventoryLoaded } from "../../../store/initialDataLoadStatusSlice";
import { addNewProductInventoryID, removeProductInventoryByID, resetProductInventoryError, setProductInventoryData, setProductInventoryError, setProductInventoryImageToLoaded, setProductInventoryImageToLoading, setProductInventoryToLoaded, setProductInventoryToLoading } from "../../../store/productInventorySlice";
import store from "../../../store/store";
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

/**
 * It's probably the worst possible way I could've made this. Ever.
 * Ugh...
 * I love projects done on the corner of a table...
 * It's amazing.
 * I love it.
 * Being unable to have to the time to properly improve.
 * @param {*} param0 
 */
export const UpdateUserProducts = async ({
    onStart = () => { },
    onEnd = () => { },
    onSuccess = () => { },
    onError = () => { }
}) => {

    function GetInventoryFromReduxStore() {
        const state = store.getState();
        return state.productInventorySlice.productInventory;
    }

    UpdateUserInventory({
        onStart: onStart,
        onEnd: onEnd,
        onSuccess: onSuccess,
        onError: onError,

        technicalDebtSingleExecutionGlobalObject: technicalDebtGlobalObject,

        storeInventoryGetter: GetInventoryFromReduxStore,
        addNewToStoreReducer: addNewProductInventoryID,
        removeFromStoreReducer: removeProductInventoryByID,
        setToLoadingReducer: setProductInventoryToLoading,
        setToLoadedReducer: setProductInventoryToLoaded,
        setImageToLoadingReducer: setProductInventoryImageToLoading,
        setImageToLoadedReducer: setProductInventoryImageToLoaded,
        resetErrorsReducer: resetProductInventoryError,
        setErrorsReducer: setProductInventoryError,
        setDataReducer: setProductInventoryData,
        tellStoreMinimalLoadOccuredReducer: productInventoryLoaded,

        apiGetAllIDs: GetAllProductInventoryIDs,
        apiGetImage: GetImageOfProductInInventory,
        apiGetSurface: GetSurfaceProductInInventory
    });

};
