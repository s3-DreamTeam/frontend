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
const ColorCard = styled(Card)(({ theme, colorvariant }) => ({
    backgroundColor: theme.palette[colorvariant]?.main || undefined,
    color: theme.palette[colorvariant]?.contrastText || undefined,
    boxShadow: theme.shadows[5],
}));

export default ColorCard;