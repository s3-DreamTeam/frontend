import { AddRounded, RemoveRounded } from "@mui/icons-material";

const { Stack } = require("@mui/material");
const { default: BigButton } = require("./BigButtons");

const ProductManagerPageFooter = ({
    onLossClick,
    onNewClick,
    disabled = false,
}) => {
    console.log("DISABLED??? ", disabled);
    return (
        <Stack
            spacing={"2rem"}
            direction={{ xs: "column", sm: "row" }} // Stack vertically on small screens, horizontally on larger screens.
            justifyContent="center"
            useFlexGap
            sx={{
                flexWrap: "wrap", // Wrap cards as necessary.
                padding: "0rem 2rem 2rem 2rem",
                height: "max-content", // Let the stack adjust its height automatically.
            }}
        >
            <BigButton
                name="New loss"
                color="error"
                Icon={RemoveRounded}
                onClick={onLossClick}
                disabled={disabled}
            />
            <BigButton
                name="New stock"
                color="success"
                Icon={AddRounded}
                onClick={onNewClick}
                disabled={disabled}
            />
        </Stack>
    );
};

export default ProductManagerPageFooter;