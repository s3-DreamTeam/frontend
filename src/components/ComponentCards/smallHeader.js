import { CardHeader, Typography } from "@mui/material";


const SmallComponentCardHeader = ({ title }) => {
    return (
        <CardHeader
            sx={{
                height: '10%',
                flexShrink: 0
            }}
            title={
                <Typography
                    variant="h5"
                    noWrap
                    textOverflow='ellipsis'
                    fontWeight={600}
                    sx={{
                        whiteSpace: 'nowrap', // Prevent wrapping
                        overflow: 'hidden', // Hide overflow
                        textOverflow: 'ellipsis', // Show ellipsis for overflow text
                        maxWidth: '15rem', // Ensure it doesn't exceed the card width
                    }}
                >
                    {title}
                </Typography>
            }
        />
    );
};

export default SmallComponentCardHeader;