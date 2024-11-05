import { useState } from "react";
import HandleUserLoggedInStatus from "../../../utils/verifyLoggedIn";
import EmptyPage from "../../emptyPage";
import PageLayout from "../../pageLayout/pageLayout";
import SelectComponentFromStoreDialog from "../../Dialogs/SelectComponentFromStoreDialog";
import MachineTemplateComponentCard from "../../ComponentCards/machineTemplateCard";
import { useSelector } from "react-redux";

const Changelogs = () => {
    const [showDialog, setShowDialog] = useState(true);
    const templates = useSelector((state) => state.machineTemplateSlice.machineTemplates);

    HandleUserLoggedInStatus();

    return (
        <>
            <PageLayout
                title="Changelogs"
                hideActionBar={true}
                childrens={
                    <EmptyPage
                        header="Missing Changelogs"
                        subtitle="We couldn't find any changelogs to display here."
                    />
                }
            >
            </PageLayout>
            <SelectComponentFromStoreDialog
                onClose={() => { setShowDialog(false); }}
                onConfirm={() => { setShowDialog(false); }}
                title={"test"}
                components={templates}
                ComponentCard={MachineTemplateComponentCard}
                open={showDialog}
            />
        </>
    );
};

export default Changelogs;