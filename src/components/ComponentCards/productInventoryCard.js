import { LinearProgress, Typography } from "@mui/material";
import ComponentCardFoundation from "./foundation/componentCardFoundation";
import Product from "../../utils/productInventoryObject";
import { useEffect, useState } from "react";
import { GetProductTemplateFromID } from "./Querries/ProductTemplateGetter";
import { setProductTemplateError } from "../../store/productTemplateSlice";

/**
 * # ProductInventoryComponentCard
 * Small component card displaying a product in the stock manager menu.
 * When clicked, brings the user to the product forms OR a warning pop up about
 * potential changes to their existing machines.
 * 
 * ---
 * @param {*} object product object: `ProductInventory` class.
 * @returns card displaying a product
 */
const ProductInventoryComponentCard = ({
    object = null,
    onLongClick = () => { },
    onClick = () => { },
    size = "large"
}) => {
    const [template, setTemplate] = useState(null);
    const [title, setTitle] = useState("Not Found");
    const [templateLoading, setTemplateLoading] = useState(false);
    const [decorators, setDecorators] = useState(null);

    if (object == null) {
        object = new Product();
    }

    // Extract Model from TemplateID. Fetch Template if not found in our local stuff.
    useEffect(() => {
        if (template === null && object.TemplateID !== undefined) {
            GetProductTemplateFromID({
                ID: object.TemplateID,
                onStart: () => {
                    setTemplateLoading(true);
                },
                onError: (e) => {
                    setProductTemplateError({ id: object.ID, error: String(e) });
                    setDecorators(
                        [
                            { "label": "No Template", "state": "error" }
                        ]
                    );
                },
                onEnd: () => {
                    setTemplateLoading(false);

                    if (object.Quantity === 0) {
                        setDecorators(
                            [
                                { "label": "Empty", "state": "warning" }
                            ]
                        );
                    }
                },
                onSuccess: (template) => {
                    console.log("Gotten template: ", template);
                    setTemplate(template);
                    setTitle(template.Manufacturer);
                }
            });
        }
    }, [template, object]);

    let fontSize = (size === "large" ? '1rem' : '0.75rem');

    function handleClicked() {
        console.log(object);
        onClick(object);
    }

    function handleLongClick() {
        onLongClick(object);
    }

    return (
        <ComponentCardFoundation
            title={title}
            loadingHeader={templateLoading}
            state={"normal"}
            image={object["Product's Image"]}
            error={object.errors}
            isLoading={object.isLoading}
            imageIsLoading={object.imageIsLoading}
            onClick={handleClicked}
            onLongPress={handleLongClick}
            size={size}
            decorators={decorators}
            footerComponents={
                object.Variant
            }
        />
    );
};

export default ProductInventoryComponentCard;