import { Typography } from "@mui/material";

const RequiredStar = ({
    isError = false,
}) => {
    return (
        <Typography
            variant="h5"
            color={isError ? 'warning' : 'primary'}
        >
            *
        </Typography>
    );
};

export default RequiredStar;