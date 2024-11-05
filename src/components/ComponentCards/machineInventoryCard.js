import { Typography } from "@mui/material";
import ComponentCardFoundation from "./foundation/componentCardFoundation";
import MachineTemplate from "../../utils/machineTemplateObject";

/**
 * # MachineInventoryComponentCard
 * Small component card displaying a machine in the machine manager menu.
 * When clicked, brings the user to the inventory page for that machine.
 * 
 * ---
 * @param {*} machine Machine object: `MachineTemplate` class.
 * @returns card displaying a machine template
 */
const MachineInventoryComponentCard = ({
    object = null,
    onLongClick = () => { },
    onClick = () => { },
    size = "large"
}) => {
    if (object == null) {
        object = new MachineTemplate();
    }

    /*
                decorators={
                [
                    { "label": 'hi', 'state': 'secondary' },
                    { "label": 'second', 'state': 'primary' }
                ]
            }
    */
    let fontSize = (size === "large" ? '1rem' : '0.75rem');

    function handleClicked() {
        onClick(object);
    }

    function handleLongClick() {
        onLongClick(object);
    }

    return (
        <ComponentCardFoundation
            title={object.Manufacturer}
            state={"normal"}
            image={object.Image}
            error={object.errors}
            isLoading={object.isLoading}
            imageIsLoading={object.imageIsLoading}
            onClick={handleClicked}
            onLongPress={handleLongClick}
            size={size}
            footerComponents={
                <Typography
                    fontSize={fontSize}
                >
                    {object.Model}
                </Typography>
            }
        />
    );
};

export default MachineInventoryComponentCard;