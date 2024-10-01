import { Stack } from "@mui/material";
import ComponentCardFoundation from "../../ComponentCards/foundation/componentCardFoundation";

/**
 * # MachinesGridLayout
 * The grid that is in the main menu, displaying all the user's machines in their inventory.
 * Displayed only if the fetch requests works.
 * 
 * ---
 * @param {*} mappedMachines - Map of all the loaded machines of the user 
 */
const MachinesManagerMainLayout = ({ mappedMachines }) => {
    return (
        <Stack
            spacing={'2rem'}
            direction={'row'}
            justifyContent={'space-evenly'}
            useFlexGap
            sx={{ flexWrap: 'wrap', padding: '0rem 2rem 2rem 2rem' }}
        >
            {mappedMachines.map((nom, index) => (
                <ComponentCardFoundation
                    key={index}
                    title={nom}
                />
            ))}
        </Stack>
    );
};
export default MachinesManagerMainLayout;