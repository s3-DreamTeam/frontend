import { Typography } from "@mui/material";
import ColorCard from "../../ComponentCards/foundation/styledCard";
import { useEffect, useState } from "react";
import AvailableSlot from "./SlotComponents/availableSlot";
import LoadingSlot from "./SlotComponents/loadingSlot";
import UsedSlot from "./SlotComponents/usedSlot";

const InventorySlot = ({
    slot = null,
    machine,
    template,
    onSet = () => { },
    onReset = () => { },
    onAdd = () => { },
    onRemove = () => { }
}) => {
    const [loading, setLoading] = useState(true);
    const [errors, setErrors] = useState(null);

    const price = slot.Price;
    const productID = slot.ProductID;
    const Quantity = slot.Quantity;
    const slotName = slot.Slot;

    const empty = (Quantity === 0) && (productID !== null);
    const available = (Quantity === 0) && (productID === null);

    // - Get the associated template - //
    useEffect(() => {
        if (slot.loading !== undefined || template === null || machine === null) {
            setLoading(true);
        } else {
            setLoading(false);
        }
    }, [slot, machine, template]);

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
                variant="h4"
                fontWeight={800}
                sx={{
                    paddingX: '1.5rem',
                    width: '5%'
                }}
            >
                {slotName}
            </Typography>
            <div
                style={{
                    padding: '1rem',
                    width: '5%'
                }}
            />
            {
                loading
                    ? <LoadingSlot />
                    : (available
                        ? <AvailableSlot slot={slot} onSet={onSet} />
                        : <UsedSlot slot={slot} machine={machine} template={template} onAdd={onAdd} onRemove={onRemove} onReset={onReset} />)
            }
        </ColorCard>
    );
};

export default InventorySlot;
