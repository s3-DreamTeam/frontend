import { Stack, Typography } from "@mui/material";

const ProductManagerCardFooter = ({
    variant = "ERR",
    inStock = 0
}) => {

    const textColor = inStock === 0 ? 'warning' : null;

    return (
        <Stack
            sx={{
                height: '10vh',
                alignItems: 'center',
                justifyContent: 'end'
            }}
        >
            <Typography
                color="textDisabled"
            >
                {"Variant: " + variant}
            </Typography>
            <Typography
                variant="h4"
                color={textColor}
            >
                {inStock + " left"}
            </Typography>
        </Stack>
    );
};

export default ProductManagerCardFooter;