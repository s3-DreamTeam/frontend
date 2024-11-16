const { default: ColorCard } = require("../../../../ComponentCards/foundation/styledCard");

const TopManagerCard = ({ color, children, maxWidth, minWidth }) => {
    return (
        <ColorCard
            colorvariant={color}
            sx={{
                borderRadius: '1.5rem',
                flex: `1 1 auto`,
                maxWidth: maxWidth,
                minWidth: minWidth,
                flexDirection: "column",
                justifyContent: "center", // Center content vertically in the card
                alignItems: "center", // Center content horizontally in the card
            }}
        >
            {children}
        </ColorCard>
    );
};

export default TopManagerCard;