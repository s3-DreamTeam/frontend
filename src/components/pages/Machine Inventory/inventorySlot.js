import { Typography } from "@mui/material";
import ColorCard from "../../ComponentCards/foundation/styledCard";
import { useState } from "react";
import AvailableSlot from "./SlotComponents/availableSlot";
import LoadingSlot from "./SlotComponents/loadingSlot";

const InventorySlot = ({
    slot = null,
    onSet = () => { },
    onReset = () => { },
    onAdd = () => { },
    onRemove = () => { }
}) => {
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState(null);

    const price = slot.Price;
    const productID = slot.ProductID;
    const Quantity = slot.Quantity;
    const slotName = slot.Slot;

    const empty = (Quantity === 0) && (productID !== null);
    const available = (Quantity === 0) && (productID === null);

    // - Get the associated template - //
    function GetAssociatedProduct(id) {
        // Check if there is none first:
        if (id === null) {
            return null;
        }

        //GetSurfaceProductInInventory({}
    }


    return (
        <ColorCard
            colorvariant={loading ? 'inherit' : (empty ? 'warning' : (available ? 'success' : 'inherit'))}
            sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                alignItems: "center",
                height: '100%',
                padding: '0.5rem',
                borderRadius: '1.5rem'
            }}
        >
            <Typography
                variant="h6"
                fontWeight={800}
                sx={{
                    paddingX: '1.5rem'
                }}
            >
                {slotName}
            </Typography>
            {
                loading
                    ? <LoadingSlot />
                    : <AvailableSlot slot={slot} />
            }
        </ColorCard>
    );
};

export default InventorySlot;
