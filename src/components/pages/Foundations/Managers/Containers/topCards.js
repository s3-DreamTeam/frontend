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
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            {children}
        </ColorCard>
    );
};

export default TopManagerCard;