import { useEffect, useState } from "react";
import HandleUserLoggedInStatus from "../../../../utils/verifyLoggedIn";
import PageLayout from "../../../pageLayout/pageLayout";
import ProcessStatusSnackBar from "../../../processStatusSnackbar";
import MainLayoutFoundation from "../mainLayoutFoundation";
import InitialLoadingPage from "../../InitialLoadingPage";
import SelectComponentFromStoreDialog from "../../../Dialogs/SelectComponentFromStoreDialog";
import InventoryFormFoundation from "./formFoundation";

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
    alreadyLoadedTemplatesSelector,
    inventoryObjectsSelector,
    templateObjectsSelector,
    ComponentCard,
    TemplateComponentCard,
    setObjectToLoadedReducer,
    setObjectToLoadingReducer,

    AddNewFormTitle = "New lil goofus",
    addNewFormObjectGetter,
    addNewSuccessDialogTitle,
    addNewSuccessDialogMessage,

    noTemplatesDialogTitle = "Forgot this",
    noTemplatesDialogMessage = "DEFAULT MESSAGE",
    deleteObjectDialogMessage = "Bro forgot this bit...",
    emptyInventoryMessage = "Bro forgot this too",
    emptyInventoryTitle = "Ruh oh... Forgor",
    objectNameKey = "Model",

    onItemClickSetup = () => { console.log("Lol, this isn't working"); },
    onItemClickEndpoint = "",
    APIDeleteObject,
    APICreateNewObject,
    APIGetFullTemplate,
    LoadInventory,
    UpdateInventory,
    LoadTemplates
}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [loadingSuccess, setLoadingSuccess] = useState(false);
    const [loadingErrors, setLoadingErrors] = useState(null);

    const [templateLoading, setTemplateLoading] = useState(false);
    const [templateSuccess, setTemplateSuccess] = useState(false);
    const [templateErrors, setTemplateError] = useState(null);

    const [insideCreationForm, setInsideCreationForm] = useState(false);
    const [templateSelectionShown, setTemplateSelectionShown] = useState(false);
    const [selectedTemplate, setSelectedTemplate] = useState(null);

    const hasDataInInventory = Object.keys(inventoryObjectsSelector).length > 0;

    HandleUserLoggedInStatus();

    function HandleOnAdd() {
        if (alreadyLoadedTemplatesSelector) {
            //console.log("YES I ALREADY LOADED THEM");
            setTemplateSelectionShown(true);
        } else {
            //console.log("LEMME LOAD EM");
            LoadTemplates(
                {
                    onSuccess: (e) => {
                        setTemplateSuccess(true);
                    },
                    onError: (e) => {
                        setTemplateError(String(e));
                    },
                    onEnd: () => {
                        setTemplateLoading(false);
                    },
                    onStart: () => {
                        setTemplateLoading(true);
                        setTemplateError(null);
                        setTemplateSuccess(false);
                        setTemplateSelectionShown(true);
                    }
                }
            );
        }
    }

    function HandleCancelForm() {
        setInsideCreationForm(false);
    }

    // Callback when the user clicked on a template he wished to use
    function HandleTemplateSelected(templateObject) {
        console.log(templateObject);
        setSelectedTemplate(templateObject);
        setTemplateSelectionShown(false);
        setInsideCreationForm(true);
    }

    useEffect(() => {
        if (!alreadyLoadedInventorySelector) {
            loadFromScratch();
        } else {
            // Quiet loading
            UpdateInventory({});
        }
    }, []);

    useEffect(() => {
        UpdateInventory({});
    }, [insideCreationForm]);

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
            {insideCreationForm
                ? (<PageLayout
                    title={AddNewFormTitle}
                    hideActionBar={true}
                    hideNavigationDrawer={true}
                    hasGoBackArrow={true}
                    onGoBack={HandleCancelForm}
                    childrens={
                        <InventoryFormFoundation
                            onCancel={HandleCancelForm}
                            APICreateNewObject={APICreateNewObject}
                            APIGetFullTemplate={APIGetFullTemplate}
                            formObjectGetter={addNewFormObjectGetter}
                            successDialogMessage={addNewSuccessDialogMessage}
                            successDialogTitle={addNewSuccessDialogTitle}
                            formSelectedTemplate={selectedTemplate}
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
                                objectNameKey={objectNameKey}
                                onItemClickSetup={onItemClickSetup}
                                onItemClickEndpoint={onItemClickEndpoint}
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
            <SelectComponentFromStoreDialog
                onClose={() => {
                    setTemplateSelectionShown(false);
                }}
                onConfirm={HandleTemplateSelected}
                title={noTemplatesDialogTitle}
                message={noTemplatesDialogMessage}
                components={templateObjectsSelector}
                ComponentCard={TemplateComponentCard}
                open={templateSelectionShown}
                loading={templateLoading}
            />
        </>
    );
};

export default InventoryFoundationPage;