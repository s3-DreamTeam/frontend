import { useState } from "react";
import HandleUserLoggedInStatus from "../../../utils/verifyLoggedIn";
import PageLayout from "../../pageLayout/pageLayout";
import MachineEditorMainLayout from "./machineEditorMainLayout";

const MachineEditor = () => {

    HandleUserLoggedInStatus();
    const [insideTemplateForm, setInsideTemplateForm] = useState(false);

    function HandleOnAdd() {
        setInsideTemplateForm(true);
    }

    return (
        <>
            {insideTemplateForm
                ? (<PageLayout
                    title="Machine Creator"
                    hideActionBar={true}
                    childrens={
                        <MachineEditorMainLayout></MachineEditorMainLayout>
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