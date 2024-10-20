const { Typography, Box } = require("@mui/material");

/**
 * # FormInput
 * The background which contains all the divs and shit to properly render any form lines in a form you'd want.
 * 
 * ---
 * @param {*} title - Main title of the form's line
 * @param {*} children - the actual field to use for the line.
 */
export const FormInput = ({
    title,
    isError,
    children,
    align = "center",
    subText = null
}) => {
    return (
        <Box
            display="flex"
            justifyContent="space-between"
            alignItems={align}
            width="100%"
            marginBottom="1rem"
        >
            <div>
                <Typography
                    variant="h5"
                    color={isError ? 'error' : null}
                >
                    {title}
                </Typography>
                {subText
                    ? (<Typography
                        variant="body1"
                        color={isError ? 'error' : null}
                    >
                        {subText}
                    </Typography>)
                    : null
                }
            </div>
            {children}
        </Box>
    );
};