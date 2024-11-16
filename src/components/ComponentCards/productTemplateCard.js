import { Typography } from "@mui/material";
import ComponentCardFoundation from "./foundation/componentCardFoundation";
import ProductTemplate from "../../utils/productTemplateObject";

/**
 * # ProductTemplateComponentCard
 * Small component card displaying a machine template in the machine editor menu.
 * When clicked, brings the user to the machine forms OR a warning pop up about
 * potential changes to their existing machines.
 * 
 * ---
 * @param {*} object product object: `ProductTemplate` class.
 * @returns card displaying a product template
 */
const ProductTemplateComponentCard = ({
    object = null,
    onLongClick = () => { },
    onClick = () => { },
    size = "large"
}) => {

    if (object == null) {
        object = new ProductTemplate();
    }

    /*
                decorators={
                [
                    { "label": 'hi', 'state': 'secondary' },
                    { "label": 'second', 'state': 'primary' }
                ]
            }
    */

    function handleClicked() {
        onClick(object);
    }

    function handleLongClick() {
        onLongClick(object);
    }

    let fontSize = (size === "large" ? '1rem' : '0.75rem');

    return (
        <ComponentCardFoundation
            title={object.Manufacturer}
            state={"normal"}
            image={object["Product's Image"]}
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

export default ProductTemplateComponentCard;