const { Stack, LinearProgress } = require("@mui/material");

const ItemCardFooter = ({
    Footer = null,
    loading = false
}) => {
    return (
        <Stack
            sx={{
                height: '10vh',
                alignItems: 'center',
                justifyContent: 'end'
            }}
        >
            {loading ?
                <LinearProgress
                    sx={{
                        width: '100%',
                        borderRadius: '1.5rem'
                    }}
                />
                : Footer}
        </Stack>
    );
};

export default ItemCardFooter;