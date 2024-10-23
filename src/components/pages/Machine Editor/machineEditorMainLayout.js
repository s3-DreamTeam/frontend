import { Stack } from "@mui/material";
import MachineTemplateComponentCard from "../../ComponentCards/machineTemplateCard";
import EmptyPage from "../../emptyPage";
import { useEffect, useState } from "react";
import DeleteDialog from "../../Dialogs/DeleteDialog";
import { DeleteMachineTemplate } from "../../../api/requests/interface/MachineTemplates/delete";
import { UpdateUserMachineTemplates } from "../../../utils/ComplexStoreManagers/MachineTemplate/update";
import store from "../../../store/store";
import { setMachineTemplateToLoaded, setMachineTemplateToLoading } from "../../../store/machineTemplateSlice";

/**
 * # MachineEditorMainLayout
 * The grid that is in the main menu, displaying all the user's machines templates in their inventory.
 * Displayed only if the fetch requests works.
 * 
 * ---
 * @param {*} mappedMachines - Map of all the loaded machines templates of the user 
 */
const MachineEditorMainLayout = ({ mappedTemplates }) => {
    const [showDialog, setShowDialog] = useState(false);
    const [selectedTemplateName, setselectedTemplateName] = useState("undefined");
    const [selectedTemplateId, setSelectedTemplateId] = useState(null);
    const hasTemplates = Object.keys(mappedTemplates).length > 0;

    useEffect(() => {
    }, [mappedTemplates]);

    function longClick(id) {
        const name = mappedTemplates[id].Model;
        setselectedTemplateName(name);
        setSelectedTemplateId(id);
        setShowDialog(true);
    }

    function deleteSelected() {
        DeleteMachineTemplate({
            ID: selectedTemplateId,
            onSuccess: (() => { UpdateUserMachineTemplates({}); }),
            onEnd: (() => { }),
            onStart: (() => { store.dispatch(setMachineTemplateToLoading(selectedTemplateId)); }),
            onError: (() => { store.dispatch(setMachineTemplateToLoaded(selectedTemplateId)); })
        });
    }

    return (
        <>
            {hasTemplates
                ? (
                    <Stack
                        spacing={'2rem'}
                        direction={'row'}
                        justifyContent={'space-evenly'}
                        useFlexGap
                        sx={{ flexWrap: 'wrap', padding: '0rem 2rem 2rem 2rem' }}
                    >
                        {Object.entries(mappedTemplates).map(([id, value]) => (
                            <MachineTemplateComponentCard
                                key={id}
                                object={value}
                                onClick={() => console.log("SHORT CLICK")}
                                onLongClick={() => { longClick(id); }}
                            />
                        ))}
                    </Stack>
                )
                : <EmptyPage
                    header="You don't have any templates"
                    subtitle='templates are necessary to create an inventory of your machines'
                />
            }
            <DeleteDialog
                onClose={() => { setShowDialog(false); }}
                onConfirm={() => { deleteSelected(); setShowDialog(false); }}
                title={selectedTemplateName}
                message={"This action is permanent. You will loose ALL machines in your inventory that uses this template!!!"}
                open={showDialog}
            />
        </>
    );
};
export default MachineEditorMainLayout;