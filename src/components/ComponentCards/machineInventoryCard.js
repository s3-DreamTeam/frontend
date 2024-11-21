import { LinearProgress, Typography } from "@mui/material";
import ComponentCardFoundation from "./foundation/componentCardFoundation";
import { useEffect, useState } from "react";
import { resetMachineInventoryError, setMachineInventoryError } from "../../store/machineInventorySlice";
import MachineInventory from "../../utils/machineInventoryObject";
import store from "../../store/store";
import { GetSurfaceMachineTemplate } from "../../api/requests/interface/MachineTemplates/getSurface";

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
        console.log("Can this go through the statement?");
        if (template === null && object.TemplateID !== undefined && templateLoading === false) {
            console.warn("Getting template associated with the machine's ID");
            GetSurfaceMachineTemplate({
                ID: object.TemplateID,
                onStart: () => {
                    setTemplateLoading(true);
                    store.dispatch(resetMachineInventoryError(object.id));
                },
                onError: (e) => {
                    console.log(e);
                    store.dispatch(setMachineInventoryError({ id: object.id, error: String(e) }));
                    setDecorators(
                        [
                            { "label": "No Template", "state": "error" }
                        ]
                    );
                },
                onEnd: () => {
                    setTemplateLoading(false);
                },
                onSuccess: (gottenTemplate) => {
                    console.log("MIC: Gotten template: ", gottenTemplate);
                    setTemplate(gottenTemplate);
                    try {
                        setModel(gottenTemplate.Model);
                    } catch {
                        setModel("Error");
                    }

                    if (object["Lowest product count"] <= 0) {
                        setDecorators(
                            [
                                { "label": "Empty", "state": "warning" }
                            ]
                        );
                    }
                }
            });
        }

        if (object.TemplateID !== undefined && object.TemplateID !== null) {
            if (object["Lowest product count"] <= 0) {
                setDecorators(
                    [
                        { "label": "Empty", "state": "warning" }
                    ]
                );
            } else {
                setDecorators(null);
            }
        }

    }, [template, object]);

    let fontSize = (size === "large" ? '1rem' : '0.75rem');

    function handleClicked() {
        onClick(object);
    }

    function handleLongClick() {
        onLongClick(object);
    }

    const hasNoTemplate = template === null || template === undefined;
    return (
        <ComponentCardFoundation
            title={String(object.Name)}
            state={"normal"}
            image={object["Machine's Image"]}
            error={object.errors}
            isLoading={object.isLoading}
            imageIsLoading={object.imageIsLoading}
            onClick={handleClicked}
            onLongPress={handleLongClick}
            size={size}
            decorators={decorators}
            footerComponents={
                ((templateLoading || hasNoTemplate)
                    ? <LinearProgress
                        color={hasNoTemplate ? 'error' : 'primary'}
                        sx={{
                            width: '100%',
                            borderRadius: '1.5rem'
                        }}
                    />
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