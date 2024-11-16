import { LinearProgress, Typography } from "@mui/material";

const ItemCardName = ({
    text = "ERR",
    loading = true
}) => {
    return (
        <Typography
            variant="h5"
            align="center"
            noWrap
            textOverflow='ellipsis'
            sx={{
                whiteSpace: 'nowrap', // Prevent wrapping
                overflow: 'hidden', // Hide overflow
                textOverflow: 'ellipsis', // Show ellipsis for overflow text
            }}
        >
            {loading ?
                <LinearProgress
                    sx={{
                        width: '100%',
                        borderRadius: '1.5rem'
                    }}
                />
                : text}
        </Typography>
    );
};

export default ItemCardName;