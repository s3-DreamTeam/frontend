import { useState } from "react";
import HandleUserLoggedInStatus from "../../../utils/verifyLoggedIn";
import PageLayout from "../../pageLayout/pageLayout";
import MachineEditorMainLayout from "./machineEditorMainLayout";
import MachineEditorForm from "./machineEditorForm";

const MachineEditor = () => {

    HandleUserLoggedInStatus();
    const [insideTemplateForm, setInsideTemplateForm] = useState(false);

    function HandleOnAdd() {
        setInsideTemplateForm(true);
    }

    function HandleCancelForm() {
        setInsideTemplateForm(false);
    }

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
                    childrens={
                        <MachineEditorMainLayout></MachineEditorMainLayout>
                    }
                />)
            }
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