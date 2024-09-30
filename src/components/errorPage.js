import { Box, Typography } from "@mui/material";
import StyledTooltip from "./styledTooltip";

/**
 * # errorPage
 * Component shown in the middle of a main menu page when a big error
 * occured. Like we couldn't load stuff from the backend for example n shit.
 * 
 * @param {*} header : Big title of the error
 * @param {*} subtitle : Text informing them what they should do
 * @param {*} actionButton : Component to display below the texts. Keep empty for nothing. 
 * @param {*} retryTooltip : The tooltip to display above the retry button of the error page.
*/
const ErrorPage = ({ header, subtitle, actionButton, retryTooltip }) => {
    return (
        <Box
            display="flexbox"
            justifyItems="center"
            alignContent="center"
            sx={{
                height: '100%',
                animation: 'errorShake 0.25s ease-in 1'
            }}
        >
            <Typography
                variant="h3"
                align="center"
                color="error"
                fontWeight={600}
            >
                {header}
            </Typography>
            <Typography
                variant="body1"
                color="error"
                align="center"
            >
                {subtitle}
            </Typography>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                <StyledTooltip
                    title={retryTooltip}
                >
                    {actionButton}
                </StyledTooltip>
            </div>
        </Box >
    );
};

export default ErrorPage;