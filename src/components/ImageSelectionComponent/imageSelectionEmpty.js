import { CardActionArea } from "@mui/material";
import ColorCard from "../ComponentCards/foundation/styledCard";
import { AddPhotoAlternateRounded } from "@mui/icons-material";

export const ImageSelectionEmpty = ({
    onClick,
    isError,
    disabled
}) => {
    return (
        <ColorCard
            colorvariant={isError ? "error" : null}
            sx={{
                maxWidth: '15rem',
                maxHeight: '12.5rem',
                minHeight: '12.5rem',
                minWidth: '15rem',
                borderRadius: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <CardActionArea
                onClick={onClick}
                disabled={disabled}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    padding: '1.5rem'
                }}
            >
                <AddPhotoAlternateRounded
                    color={disabled ? "textDisabled" : null}
                    style={{
                        fontSize: 50
                    }}
                />
            </CardActionArea>
        </ColorCard>
    );
};