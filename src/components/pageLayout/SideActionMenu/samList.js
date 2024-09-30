import { ListRounded } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const SAMList = ({ onClick, disabled }) => {
    return (
        <IconButton
            size="small"
            disabled={disabled}
            onClick={onClick}
        >
            <ListRounded fontSize="large" />
        </IconButton>
    );
};

export default SAMList;