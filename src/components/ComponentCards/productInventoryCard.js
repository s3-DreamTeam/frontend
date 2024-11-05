import { Typography } from "@mui/material";
import ComponentCardFoundation from "./foundation/componentCardFoundation";
import Product from "../../utils/productInventoryObject";

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

    if (object == null) {
        object = new Product();
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

export default ProductInventoryComponentCard;