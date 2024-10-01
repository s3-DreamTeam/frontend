import HandleUserLoggedInStatus from "../../../utils/verifyLoggedIn";
import PageLayout from "../../pageLayout/pageLayout";
import MachineEditorMainLayout from "./machineEditorMainLayout";

const MachineEditor = () => {

    HandleUserLoggedInStatus();

    return (
        <PageLayout title="Machine Editor" childrens={
            <MachineEditorMainLayout></MachineEditorMainLayout>
        }></PageLayout>
    );
};

/*
    <EmptyPage
        header="You don't have any templates"
        subtitle='templates are necessary to keep an inventory of your machines'
    />
*/

export default MachineEditor;