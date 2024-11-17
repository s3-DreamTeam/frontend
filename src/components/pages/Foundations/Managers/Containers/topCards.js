const { default: ColorCard } = require("../../../../ComponentCards/foundation/styledCard");

const TopManagerCard = ({ color, children, maxWidth, minWidth }) => {
    return (
        <ColorCard
            colorvariant={color}
            alignContent="space-evenly"
            alignItems="space-evenly"
            justifyContent="space-evenly"
            justifyItems="space-evenly"
            sx={{
                display: 'inline-block',
                borderRadius: '1.5rem',
                flex: `1 1 auto`,
                maxWidth: maxWidth,
                minWidth: minWidth,
                flexDirection: "column",
                justifyContent: "space-evenly",
                justifyItems: 'space-evenly',
                alignItems: "space-evenly",
                alignContent: "space-evenly",
            }}
        >
            {children}
        </ColorCard>
    );
};

export default TopManagerCard;