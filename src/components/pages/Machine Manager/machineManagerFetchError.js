import { IconButton } from "@mui/material";
import ErrorPage from "../../errorPage";
import { RefreshRounded } from "@mui/icons-material";


const MachineManagerFetchError = ({ onRetryClick, errorName }) => {
    return (
        <ErrorPage
            header="Fetch Error"
            subtitle={errorName}
            retryTooltip="Attempt to get your machines again?"
            actionButton={
                <IconButton
                    size="small"
                    onClick={onRetryClick}
                >
                    <RefreshRounded fontSize="large" />
                </IconButton>
            }
        />
    );
};

export default MachineManagerFetchError;