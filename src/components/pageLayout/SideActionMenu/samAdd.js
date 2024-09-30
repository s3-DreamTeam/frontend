import { AddCircleRounded } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const SAMAdd = ({ onClick, disabled, tooltip }) => {
    return (
        <IconButton
            size="small"
            color="secondary"
            onClick={onClick}
            disabled={disabled}
        >
            <AddCircleRounded fontSize="large" />
        </IconButton>
    );
};

export default SAMAdd;