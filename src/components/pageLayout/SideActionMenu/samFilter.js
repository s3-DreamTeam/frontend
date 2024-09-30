import { FilterAltRounded } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const SAMFilter = ({ onClick, disabled }) => {
    return (
        <IconButton
            size="small"
            disabled={disabled}
            onClick={onClick}
        >
            <FilterAltRounded fontSize="large" />
        </IconButton>
    );
};

export default SAMFilter;