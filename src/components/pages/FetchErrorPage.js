import { IconButton } from "@mui/material";
import { RefreshRounded } from "@mui/icons-material";
import ErrorPage from "../errorPage";


/**
 * Large page displayed to the user when the initial fetching of their
 * inventory fails.
 * Only used at the start when the app doesn't know of any of the user's stuff.
 * @param {*} param0 
 * @returns 
 */
const FetchErrorPage = ({ onRetryClick, errorName }) => {
    return (
        <ErrorPage
            header="Loading Error"
            subtitle={errorName}
            retryTooltip="Attempt to retreive your components again?"
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

export default FetchErrorPage;