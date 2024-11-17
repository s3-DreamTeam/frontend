import { Stack, Typography } from "@mui/material";

const ProductManagerCardFooter = ({
    variant = "ERR",
    inStock = 0,
}) => {

    const textColor = inStock === 0 ? 'warning' : null;

    return (
        <Stack
            sx={{
                width: '100%',
                height: '10vh',
                alignItems: 'center',
                justifyContent: 'end'
            }}
        >
            <Typography
                align="center"
                noWrap
                textOverflow='ellipsis'
                sx={{
                    whiteSpace: 'nowrap', // Prevent wrapping
                    overflow: 'hidden', // Hide overflow
                    textOverflow: 'ellipsis', // Show ellipsis for overflow text
                    paddingBottom: '1rem'
                }}
                color="textDisabled"
            >
                {"Variant: " + variant}
            </Typography>
            <Typography
                variant="h4"
                color={textColor}
                noWrap
                textOverflow='ellipsis'
                fontWeight={600}
                align="center"
                sx={{
                    whiteSpace: 'nowrap', // Prevent wrapping
                    overflow: 'hidden', // Hide overflow
                    textOverflow: 'ellipsis', // Show ellipsis for overflow text
                    maxWidth: "75%", // Ensure it doesn't exceed the card width
                }}
            >
                {inStock + " left"}
            </Typography>
        </Stack>
    );
};

export default ProductManagerCardFooter;