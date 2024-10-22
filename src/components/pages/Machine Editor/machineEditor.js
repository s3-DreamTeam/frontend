import { useState } from "react";
import HandleUserLoggedInStatus from "../../../utils/verifyLoggedIn";
import PageLayout from "../../pageLayout/pageLayout";
import MachineEditorMainLayout from "./machineEditorMainLayout";
import MachineEditorForm from "./machineEditorForm";
import { LoadUsersMachineTemplates } from "../../../utils/ComplexStoreManagers/MachineTemplate/load";
import ProcessStatusSnackBar from "../../processStatusSnackbar";

const MachineEditor = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [loadingSuccess, setLoadingSuccess] = useState(false);
    const [loadingErrors, setLoadingErrors] = useState(null);

    HandleUserLoggedInStatus();
    const [insideTemplateForm, setInsideTemplateForm] = useState(false);

    function HandleOnAdd() {
        setInsideTemplateForm(true);
    }

    function HandleCancelForm() {
        setInsideTemplateForm(false);
    }

    function loadTemplatesFromScratch() {
        LoadUsersMachineTemplates({
            onSuccess: (e) => {
                console.log("SUCCESS");
                setLoadingSuccess(true);
            },
            onError: (e) => {
                console.log(e);
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
            message: 'Loading your templates...',
            canClickAway: false,
            hasCloseButton: false,
            canRetry: false,
            autoHideDuration: null
        },
    };

    return (
        <>
            {insideTemplateForm
                ? (<PageLayout
                    title="New Machine"
                    hideActionBar={true}
                    hideNavigationDrawer={true}
                    hasGoBackArrow={true}
                    onGoBack={HandleCancelForm}
                    childrens={
                        <MachineEditorForm
                            onCancel={HandleCancelForm}
                        />
                    }
                />)
                : (<PageLayout
                    title="Machine Editor"
                    onAdd={HandleOnAdd}
                    onRefresh={loadTemplatesFromScratch}
                    isRefreshing={isLoading}
                    disableRefresh={isLoading}
                    childrens={
                        <MachineEditorMainLayout></MachineEditorMainLayout>
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

/*
    <EmptyPage
        header="You don't have any templates"
        subtitle='templates are necessary to keep an inventory of your machines'
    />
*/

export default MachineEditor;