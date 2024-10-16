import { Box, Button } from "@mui/material";
import { EndDivider } from "./foundations/endDivider";


export const SubmitArea = ({
    onCancel = () => { },
    onSubmit = () => { },
    hasErrors
}) => {
    return (
        <>
            <EndDivider />
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                width="100%"
                paddingTop='1.5rem'
            >
                <Button
                    size="large"
                    variant="text"
                    color="inherit"
                    onClick={onCancel}
                    sx={{
                        borderRadius: '1.5rem',
                        width: '25%'
                    }}
                >
                    Cancel
                </Button>
                <Button
                    size="large"
                    variant="contained"
                    color={hasErrors ? "error" : "primary"}
                    onClick={onSubmit}
                    sx={{
                        borderRadius: '1.5rem',
                        width: '25%'
                    }}
                >
                    Submit
                </Button>
            </Box>
        </>
    );
};