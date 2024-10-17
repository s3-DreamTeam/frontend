import { CircularProgress } from "@mui/material";
import ColorCard from "../ComponentCards/foundation/styledCard";
export const ImageSelectionLoading = ({
    onClick,
}) => {
    return (
        <ColorCard
            sx={{
                maxWidth: '15rem',
                maxHeight: '12.5rem',
                minHeight: '12.5rem',
                minWidth: '15rem',
                borderRadius: '1.5rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <CircularProgress
                size={80}
            />
        </ColorCard>
    );
};