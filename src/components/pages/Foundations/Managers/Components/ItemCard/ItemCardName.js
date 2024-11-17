import { LinearProgress, Typography } from "@mui/material";

const ItemCardName = ({
    text = "ERR",
    loading = true
}) => {
    return (
        <Typography
            variant="h4"
            fontWeight={700}
            align="center"
            noWrap
            textOverflow='ellipsis'
            sx={{
                whiteSpace: 'nowrap', // Prevent wrapping
                overflow: 'hidden', // Hide overflow
                textOverflow: 'ellipsis', // Show ellipsis for overflow text
                paddingBottom: '1rem'
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