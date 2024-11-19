import { Box, IconButton, Typography } from "@mui/material";
import StyledTooltip from "../../styledTooltip";
import { RefreshRounded } from "@mui/icons-material";

const ErrorPageFooter = ({ error, onRetry = () => { } }) => {
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
                Loading Error
            </Typography>
            <Typography
                variant="body1"
                color="error"
                align="center"
            >
                {error}
            </Typography>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                <StyledTooltip
                    title="Retry getting the inventory?"
                >
                    <IconButton
                        size="small"
                        onClick={onRetry}
                    >
                        <RefreshRounded fontSize="large" />
                    </IconButton>
                </StyledTooltip>
            </div>
        </Box >
    );
};

export default ErrorPageFooter;