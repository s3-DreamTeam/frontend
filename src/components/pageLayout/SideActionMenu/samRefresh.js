import { SyncRounded } from "@mui/icons-material";
import { IconButton } from "@mui/material";


const SAMRefresh = ({ isRefreshing, onClick, disabled }) => {
    return (
        <IconButton
            size="small"
            disabled={disabled}
            onClick={onClick}
            sx={{
                animation: isRefreshing ? 'loadingSpinning 2s ease-in-out infinite' : null
            }}
        >
            <SyncRounded fontSize="large" />
        </IconButton>
    );
};

export default SAMRefresh;