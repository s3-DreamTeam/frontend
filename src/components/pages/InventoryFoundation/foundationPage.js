import { useEffect, useState } from "react";
import HandleUserLoggedInStatus from "../../../utils/verifyLoggedIn";
import { useSelector } from "react-redux";
import PageLayout from "../../pageLayout/pageLayout";
import MachineEditorForm from "../Machine Editor/machineEditorForm";
import ProcessStatusSnackBar from "../../processStatusSnackbar";
import AddFormFoundation from "./addFormFoundation";
import MainLayoutFoundation from "./mainLayoutFoundation";
import InitialLoadingPage from "../InitialLoadingPage";

/**
 * # InventoryFoundationPage
 * 
 * Created because we've got 4 whole ass pages that do the same thing...
 * just with different names, cards, and forms.
 * @returns 
 */
const InventoryFoundationPage = ({
    MainPageTitle = "Goofus",
    loadingSnackbarMessage = "loading something bruh",

    alreadyLoadedInventorySelector,
    inventoryObjectsSelector,
    ComponentCard,
    setObjectToLoadedReducer,
    setObjectToLoadingReducer,

    AddNewFormTitle = "New lil goofus",
    addNewFormObjectGetter,
    addNewSuccessDialogTitle,
    addNewSuccessDialogMessage,

    deleteObjectDialogMessage = "Bro forgot this bit...",
    emptyInventoryMessage = "Bro forgot this too",
    emptyInventoryTitle = "Ruh oh... Forgor",

    APIDeleteObject,
    APICreateNewObject,
    LoadInventory,
    UpdateInventory,
}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [loadingSuccess, setLoadingSuccess] = useState(false);
    const [loadingErrors, setLoadingErrors] = useState(null);
    const [insideAddForm, setInsideTemplateForm] = useState(false);

    const hasDataInInventory = Object.keys(inventoryObjectsSelector).length > 0;

    HandleUserLoggedInStatus();

    function HandleOnAdd() {
        setInsideTemplateForm(true);
    }

    function HandleCancelForm() {
        setInsideTemplateForm(false);
    }

    useEffect(() => {
        if (!alreadyLoadedInventorySelector) {
            loadTemplatesFromScratch();
        } else {
            // Quiet loading
            UpdateInventory({});
        }
    }, []);

    useEffect(() => {
        UpdateInventory({});
    }, [insideAddForm]);

    function loadFromScratch() {
        LoadInventory({
            onSuccess: (e) => {
                setLoadingSuccess(true);
            },
            onError: (e) => {
                setLoadingErrors(String(e));
            },
            onEnd: () => {
                setIsLoading(false);
            },
            onStart: () => {
                setIsLoading(true);
                setLoadingErrors(null);
                setLoadingSuccess(false);
            }
        });
    }

    const LoadTemplatesProcessSnackbarProps = {
        success: {
            message: "Refreshed!",
            canClickAway: true,
            hasCloseButton: true,
            canRetry: false,
            autoHideDuration: 2000
        },
        error: {
            message: loadingErrors,
            canClickAway: false,
            hasCloseButton: true,
            canRetry: false,
            autoHideDuration: 2000
        },
        loading: {
            message: loadingSnackbarMessage,
            canClickAway: false,
            hasCloseButton: false,
            canRetry: false,
            autoHideDuration: null
        },
    };

    const disableFilter = isLoading | alreadyLoadedInventorySelector | !hasDataInInventory;
    const disableSort = isLoading | alreadyLoadedInventorySelector | !hasDataInInventory;
    const disableList = isLoading | alreadyLoadedInventorySelector | !hasDataInInventory;

    return (
        <>
            {insideAddForm
                ? (<PageLayout
                    title={AddNewFormTitle}
                    hideActionBar={true}
                    hideNavigationDrawer={true}
                    hasGoBackArrow={true}
                    onGoBack={HandleCancelForm}
                    childrens={
                        <AddFormFoundation
                            onCancel={HandleCancelForm}
                            APICreateNewObject={APICreateNewObject}
                            formObjectGetter={addNewFormObjectGetter}
                            successDialogMessage={addNewSuccessDialogTitle}
                            successDialogTitle={addNewSuccessDialogTitle}
                        />
                    }
                />)
                : (<PageLayout
                    title={MainPageTitle}
                    onAdd={HandleOnAdd}
                    onRefresh={loadFromScratch}
                    isRefreshing={isLoading}
                    disableRefresh={isLoading}
                    disableFilter={disableFilter}
                    disableList={disableList}
                    disableSort={disableSort}
                    childrens={
                        (alreadyLoadedInventorySelector
                            ? <MainLayoutFoundation
                                mappedObjects={inventoryObjectsSelector}
                                hasObjects={hasDataInInventory}
                                ComponentCard={ComponentCard}
                                APIDeleteObject={APIDeleteObject}
                                UpdateInventory={UpdateInventory}
                                setObjectToLoadedReducer={setObjectToLoadedReducer}
                                setObjectToLoadingReducer={setObjectToLoadingReducer}
                                deleteDialogMessage={deleteObjectDialogMessage}
                                emptyInventoryMessage={emptyInventoryMessage}
                                emptyInventoryTitle={emptyInventoryTitle}
                            />
                            : <InitialLoadingPage
                                onRetryClick={loadFromScratch}
                                error={loadingErrors}
                                isLoading={isLoading}
                            />
                        )
                    }
                />)
            }
            <ProcessStatusSnackBar
                status={isLoading ? 'loading' : (loadingErrors != null ? 'error' : (loadingSuccess ? 'success' : 'hidden'))}
                attributes={LoadTemplatesProcessSnackbarProps}
            />
        </>
    );
};

export default InventoryFoundationPage;