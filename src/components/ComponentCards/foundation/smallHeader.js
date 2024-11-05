import { CardHeader, Typography } from "@mui/material";


const SmallComponentCardHeader = ({ title, size = "large" }) => {

    let height = (size === "large" ? '2.5rem' : '0rem');
    let fontSize = (size === "large" ? '2rem' : '1rem');
    let maxWidth = (size === "large" ? '15rem' : '7.5rem');

    return (
        <CardHeader
            sx={{
                height: height,
                flexShrink: 0
            }}
            title={
                <Typography
                    noWrap
                    textOverflow='ellipsis'
                    fontWeight={600}
                    fontSize={fontSize}
                    sx={{
                        whiteSpace: 'nowrap', // Prevent wrapping
                        overflow: 'hidden', // Hide overflow
                        textOverflow: 'ellipsis', // Show ellipsis for overflow text
                        maxWidth: maxWidth, // Ensure it doesn't exceed the card width
                    }}
                >
                    {title}
                </Typography>
            }
        />
    );
};

export default SmallComponentCardHeader;