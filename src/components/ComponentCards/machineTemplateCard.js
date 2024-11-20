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
            image={object["Machine's Image"]}
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

export default MachineTemplateComponentCard;