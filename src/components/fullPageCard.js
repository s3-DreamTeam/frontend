const { Box, Typography } = require("@mui/material");
const { default: ColorCard } = require("./ComponentCards/foundation/styledCard");


const FullPageCard = ({ title, subtitle, color, header, footer }) => {
    return (
        <div
            style={{
                position: 'fixed',
                width: '100%',
                height: '100%',
                padding: '5%',
                display: 'flex', // Add this
                justifyContent: 'center', // Center horizontally
                alignItems: 'center', // Center vertically
            }}
        >
            <ColorCard
                sx={{
                    borderRadius: '1.5rem',
                    padding: '2rem',
                    display: 'flex',
                    flexDirection: 'column', // Use column for vertical layout
                    width: 'fit-content',
                    alignItems: 'center', // Center children
                }}
                colorvariant={color}
            >
                <div
                    style={{
                        padding: '1rem',
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                >
                    {header}
                </div>
                <Box
                    display="flex"
                    flexDirection="column" // Use column for vertical layout
                    justifyContent="center"
                    alignItems="center" // Center content
                    sx={{
                        height: '50%'
                    }}
                >
                    <Typography
                        variant="h3"
                        fontWeight={700}
                        align="center"
                        gutterBottom
                    >
                        {title}
                    </Typography>
                    <Typography
                        variant="body1"
                        fontWeight={500}
                        align="center"
                    >
                        {subtitle}
                    </Typography>
                </Box>
            </ColorCard>
        </div>
    );

};

export default FullPageCard;