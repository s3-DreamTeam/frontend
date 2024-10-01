const { default: styled } = require("@emotion/styled");
const { Card } = require("@mui/material");

/**
 * # ColorCard
 * Exactly like a normal card, but already applies the rounding
 * style of 1.5 rem.
 * AND allows you to give it a color from the MUI palette
 * (warning, success, primary, etc), as well as affecting the
 * colored text shown on it.
 * 
 * ---
 * @type {*} 
 */
const ColorCard = styled(Card)(({ theme, colorVariant }) => ({
    backgroundColor: theme.palette[colorVariant]?.main || undefined,
    color: theme.palette[colorVariant]?.contrastText || undefined,
    boxShadow: theme.shadows[5],
}));

export default ColorCard;