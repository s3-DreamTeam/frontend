import styled from "@emotion/styled";
import { Dialog } from "@mui/material";

export const CustomDialog = styled(Dialog)(({ theme, colorvariant }) => ({
    '& .MuiDialog-paper': {
        borderRadius: '1.5rem',
        backgroundColor: theme.palette[colorvariant]?.main || theme.palette.background.paper,
        color: theme.palette[colorvariant]?.contrastText || theme.palette.text.primary,
    },
}));