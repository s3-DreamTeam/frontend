import { SwapVertRounded } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const SAMSortBy = ({ onClick, disabled }) => {
    return (
        <IconButton
            size="small"
            disabled={disabled}
            onClick={onClick}
        >
            <SwapVertRounded fontSize="large" />
        </IconButton>
    );
};

export default SAMSortBy;