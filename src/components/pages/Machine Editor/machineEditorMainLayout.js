import { Stack } from "@mui/material";
import MachineTemplateComponentCard from "../../ComponentCards/machineTemplateCard";
import { LoadUsersMachineTemplates } from "../../../utils/ComplexStoreManagers/MachineTemplate/load";
import { useSelector } from "react-redux";
import EmptyPage from "../../emptyPage";
import { useEffect } from "react";

/**
 * # MachineEditorMainLayout
 * The grid that is in the main menu, displaying all the user's machines templates in their inventory.
 * Displayed only if the fetch requests works.
 * 
 * ---
 * @param {*} mappedMachines - Map of all the loaded machines templates of the user 
 */
const MachineEditorMainLayout = ({ mappedTemplates }) => {
    const templates = useSelector((state) => state.machineTemplateSlice.machineTemplates);
    const hasTemplates = Object.keys(templates).length > 0;

    useEffect(() => {
    }, [templates]);

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
                        {Object.entries(templates).map(([id, value]) => (
                            <MachineTemplateComponentCard
                                key={id}
                                machine={value}
                            />
                        ))}
                    </Stack>
                )
                : <EmptyPage
                    header="You don't have any templates"
                    subtitle='templates are necessary to create an inventory of your machines'
                />
            }
        </>
    );
};
export default MachineEditorMainLayout;