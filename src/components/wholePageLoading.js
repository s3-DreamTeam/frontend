import { CircularProgress, Stack } from "@mui/material";


/**
 * # WholePageLoading
 * Component that displays a whole main menu page as one centered spinner.
 * ---
 * @param {*} param0 
 */
const WholePageLoading = () => {
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
                size={80}
            />
        </Stack >
    );
};

export default WholePageLoading;