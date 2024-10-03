import { IconButton } from "@mui/material";

export const AppBarIconButton = ({ children, onClick, disabled, shown, isRight, isLeft }) => {

    //if (!shown) return null;

    return (
        <IconButton
            size='medium'
            edge='start'
            color='inherit'
            aria-label='menu'
            onClick={onClick}
            disabled={disabled}
            sx={{
                mr: isRight ? '1rem' : 0,
                ml: isLeft ? '1rem' : 0
            }}
        >
            {children}
        </IconButton >
    );
};