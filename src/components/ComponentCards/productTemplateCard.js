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
    onClick = () => { }
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
    return (
        <ComponentCardFoundation
            title={object.Manufacturer}
            state={"normal"}
            image={object.Image}
            error={object.errors}
            isLoading={object.isLoading}
            imageIsLoading={object.imageIsLoading}
            onClick={onClick}
            onLongPress={onLongClick}
            footerComponents={
                <Typography>
                    {object.Model}
                </Typography>
            }
        />
    );
};

export default ProductTemplateComponentCard;