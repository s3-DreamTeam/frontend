import { CircularProgress, Stack } from "@mui/material";

const LoadingPageFooter = () => {
    return (
        <Stack
            direction='column'
            justifyContent='center'
            alignItems='center'
            sx={{
                height: '100%'
            }}
        >
            <CircularProgress
                size={120}
            />
        </Stack >
    );
};

export default LoadingPageFooter;