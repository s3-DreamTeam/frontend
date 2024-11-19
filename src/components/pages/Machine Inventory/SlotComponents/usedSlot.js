import { Button, Typography } from "@mui/material";
import ProductInventoryComponentCard from "../../../ComponentCards/productInventoryCard";
import store from "../../../../store/store";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { AddRounded, RemoveRounded } from "@mui/icons-material";

const UsedSlot = ({
    slot,
    machine,
    template,
    onAdd = () => { },
    onRemove = () => { },
    onReset = () => { },
}) => {
    const [product, setProduct] = useState(null);

    // - Get the product from the store - //
    const allProducts = useSelector((state) => state.productInventorySlice.productInventory);

    useEffect(() => {
        console.log("Finding needed product of ID: ", slot.ProductID);
        const neededProduct = allProducts[slot.ProductID];
        setProduct(neededProduct);
    }, [allProducts]);

    if (template === null) {
        return (
            <Typography>
                Template is null
            </Typography>
        );
    }

    //console.log("slot: ", slot);

    const text = `${slot.Quantity}/${template["Quantity Per Slots"]} left`;
    const price = `Sells at ${slot.Price}$`;
    return (
        <div
            style={{
                width: '80%',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}
        >
            <Typography
                variant="h6"
                fontWeight={800}
                sx={{
                    paddingX: '1rem',
                }}
            >
                {text}
            </Typography>
            <Typography
                variant="h6"
                fontWeight={800}
                sx={{
                    paddingX: '1rem',
                }}
            >
                {price}
            </Typography>
            <div
                style={{
                    display: 'flex',
                    width: 'auto',
                    height: '100%',
                    justifyContent: 'end',
                    alignItems: 'center'
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start', // Align buttons at the top
                        paddingRight: '1.5rem',
                        gap: '1rem', // Space between buttons
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%',
                            paddingRight: '1.5rem',
                            gap: '0.5rem'
                        }}
                    >
                        <div>
                            <Button
                                size="large"
                                variant="contained"
                                color="success"
                                startIcon={<AddRounded />}
                                onClick={onAdd}
                                sx={{
                                    borderRadius: '1.5rem',
                                    width: '100%',
                                }}
                            >
                                Add
                            </Button>
                        </div>
                        <div>
                            <Button
                                size="large"
                                variant="contained"
                                color="error"
                                startIcon={<RemoveRounded />}
                                onClick={onRemove}
                                sx={{
                                    borderRadius: '1.5rem',
                                    width: '100%',
                                }}
                            >
                                Remove
                            </Button>
                        </div>
                        <div>
                            <Button
                                size="large"
                                variant="contained"
                                color="secondary"
                                onClick={() => {
                                    onReset(slot);
                                }}
                                sx={{
                                    borderRadius: '1.5rem',
                                    width: '100%',
                                }}
                            >
                                Reset
                            </Button>
                        </div>
                    </div>
                </div>
                <ProductInventoryComponentCard
                    object={product}
                    size="small"
                />
            </div>
        </div>
    );
};

export default UsedSlot;