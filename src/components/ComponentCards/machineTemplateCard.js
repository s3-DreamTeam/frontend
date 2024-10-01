import { Typography } from "@mui/material";
import ComponentCardFoundation from "./componentCardFoundation";
import MachineTemplate from "../../utils/machineTemplateObject";

/**
 * # MachineTemplateComponentCard
 * Small component card displaying a machine template in the machine editor menu.
 * When clicked, brings the user to the machine forms OR a warning pop up about
 * potential changes to their existing machines.
 * 
 * ---
 * @param {*} machine Machine object: `MachineTemplate` class.
 * @returns card displaying a machine template
 */
const MachineTemplateComponentCard = ({ machine = null }) => {

    if (machine == null) {
        machine = new MachineTemplate();
    }

    return (
        <ComponentCardFoundation
            title={machine.model}
            state={"normal"}
            image={machine.image}
            footerComponents={
                <Typography>
                    footer
                </Typography>
            }
        />
    );
};

export default MachineTemplateComponentCard;