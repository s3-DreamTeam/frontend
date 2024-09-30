import { Tooltip } from "@mui/material";

const StyledTooltip = (props) => {
    return (
        <Tooltip
            arrow
            followCursor
            title={props.title}
        >
            {props.children}
        </Tooltip>
    );
};
export default StyledTooltip;