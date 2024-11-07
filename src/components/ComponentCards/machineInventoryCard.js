import { LinearProgress, Typography } from "@mui/material";
import ComponentCardFoundation from "./foundation/componentCardFoundation";
import { useEffect, useState } from "react";
import { GetTemplateFromID } from "./Querries/MachineTemplateGetter";
import { setMachineInventoryError } from "../../store/machineInventorySlice";
import MachineInventory from "../../utils/machineInventoryObject";

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
    const [template, setTemplate] = useState(null);
    const [model, setModel] = useState("Not Found");
    const [templateLoading, setTemplateLoading] = useState(false);
    const [decorators, setDecorators] = useState(null);

    if (object == null) {
        object = new MachineInventory();
    }

    // Extract Model from TemplateID. Fetch Template if not found in our local stuff.
    useEffect(() => {
        if (template === null && object.TemplateID !== undefined) {
            console.log("object before the call", object);
            GetTemplateFromID({
                ID: object.TemplateID,
                onStart: () => {
                    setTemplateLoading(true);
                },
                onError: (e) => {
                    setMachineInventoryError({ id: object.ID, error: String(e) });
                    setDecorators(
                        [
                            { "label": "No Template", "state": "error" }
                        ]
                    );
                },
                onEnd: () => {
                    setTemplateLoading(false);
                },
                onSuccess: (template) => {
                    console.log("Gotten template: ", template);
                    setTemplate(template);
                    setModel(template.Model);
                }
            });
        }
    }, [template, object]);

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

    console.log("object before render", object);

    const hasNoTemplate = template === null || template === undefined;
    return (
        <ComponentCardFoundation
            title={object.Name}
            state={"normal"}
            image={object.Image}
            error={object.errors}
            isLoading={object.isLoading}
            imageIsLoading={object.imageIsLoading}
            onClick={handleClicked}
            onLongPress={handleLongClick}
            size={size}
            decorators={decorators}
            footerComponents={
                ((templateLoading || hasNoTemplate)
                    ? <LinearProgress />
                    : <Typography
                        fontSize={fontSize}
                    >
                        {model}
                    </Typography>
                )
            }
        />
    );
};

export default MachineInventoryComponentCard;