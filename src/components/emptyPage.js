import { Box, Typography } from "@mui/material";

/**
 * # EmptyPage
 * Component shown in the middle of a main menu page when it's empty.
 * Informs the users as to what that means for them, what they can
 * do about it and shit like that.
 * 
 * @param {*} header : Big title of the empty page
 * @param {*} subtitle : Text informing them what they should do
 * @param {*} actionButton : Component to display below the texts. Keep empty for nothing. 
 */
const EmptyPage = ({ header, subtitle, actionButton }) => {
    return (
        <Box
            display="flexbox"
            justifyItems="center"
            alignContent="center"
            sx={{
                height: '100%'
            }}
        >
            <Typography
                variant="h4"
                color="textDisabled"
                align="center"
            >
                {header}
            </Typography>
            <Typography
                variant="body2"
                color="textDisabled"
                align="center"
            >
                {subtitle}
            </Typography>
            {actionButton}
        </Box >
    );
};

export default EmptyPage;