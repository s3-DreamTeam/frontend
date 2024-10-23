import { Typography } from "@mui/material";
import ComponentCardFoundation from "./foundation/componentCardFoundation";
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
const MachineTemplateComponentCard = ({
    machine = null,
    onLongClick = () => { },
    onClick = () => { }
}) => {

    if (machine == null) {
        machine = new MachineTemplate();
    }

    /*
                decorators={
                [
                    { "label": 'hi', 'state': 'secondary' },
                    { "label": 'second', 'state': 'primary' }
                ]
            }
    */
    return (
        <ComponentCardFoundation
            title={machine.Manufacturer}
            state={"normal"}
            image={machine.Image}
            error={machine.errors}
            isLoading={machine.isLoading}
            imageIsLoading={machine.imageIsLoading}
            onClick={onClick}
            onLongPress={onLongClick}
            footerComponents={
                <Typography>
                    {machine.Model}
                </Typography>
            }
        />
    );
};

export default MachineTemplateComponentCard;