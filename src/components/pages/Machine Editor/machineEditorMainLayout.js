import { Stack } from "@mui/material";
import MachineTemplateComponentCard from "../../ComponentCards/machineTemplateCard";
import MachineTemplate from '../../../utils/machineTemplateObject';

/**
 * # MachineEditorMainLayout
 * The grid that is in the main menu, displaying all the user's machines templates in their inventory.
 * Displayed only if the fetch requests works.
 * 
 * ---
 * @param {*} mappedMachines - Map of all the loaded machines templates of the user 
 */
const MachineEditorMainLayout = ({ mappedTemplates }) => {

    let machineA = new MachineTemplate();
    machineA.image = 'https://dummyimage.com/500x400/ff6699/000';
    machineA.model = 'AWS 19';
    machineA.manufacturer = 'Coca-cola';

    let machineB = new MachineTemplate();
    machineB.image = 'https://dummyimage.com/300x250/663366/fff';
    machineB.model = 'super fucking long model name';
    machineB.manufacturer = 'bruh';

    let machineC = new MachineTemplate();
    machineC.image = 'https://dummyimage.com/200x200/ff00ff/fff';
    machineC.model = 'Hi there';

    let machineD = new MachineTemplate();
    machineD.image = 'https://dummyimage.com/950x750/cc9966/fff';
    machineD.model = 'Bruh';

    return (
        <Stack
            spacing={'2rem'}
            direction={'row'}
            justifyContent={'space-evenly'}
            useFlexGap
            sx={{ flexWrap: 'wrap', padding: '0rem 2rem 2rem 2rem' }}
        >
            <MachineTemplateComponentCard machine={machineA} />
            <MachineTemplateComponentCard machine={machineB} />
            <MachineTemplateComponentCard machine={machineC} />
            <MachineTemplateComponentCard machine={machineD} />
            <MachineTemplateComponentCard />
            <MachineTemplateComponentCard machine={machineD} />
        </Stack>
    );
};
export default MachineEditorMainLayout;