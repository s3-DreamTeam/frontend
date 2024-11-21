const { Box, Typography } = require("@mui/material");
const { default: ColorCard } = require("./ComponentCards/foundation/styledCard");


const FullPageCard = ({ title, subtitle, color, header, footer, children, shadow = false }) => {
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
                flexDirection: 'column',
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
                    animation: shadow ? 'shadowPulse 5s ease-in infinite' : null, // Apply animation
                    '@keyframes shadowPulse': {
                        '0%': { boxShadow: '0px 0px 5rem #000000' }, // Initial shadow
                        '50%': { boxShadow: '0px 0px 5rem #FF0000' }, // Expanded shadow
                        '100%': { boxShadow: '0px 0px 5rem #000000' }, // Back to initial
                    },
                }}
                shadow={shadow ? "0px 0px 40rem #FF0000" : null}
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
                        variant="h6"
                        fontWeight={500}
                        align="center"
                    >
                        {subtitle}
                    </Typography>
                </Box>
            </ColorCard>
            {children}
        </div>
    );

};

export default FullPageCard;