const { Typography } = require("@mui/material");

/**
 * # FormInput
 * The background which contains all the divs and shit to properly render any form lines in a form you'd want.
 * 
 * ---
 * @param {*} title - Main title of the form's line
 * @param {*} children - the actual field to use for the line.
 */
export const FormInput = ({ title, children }) => {
    return (
        <div>
            <Typography
            >
                {title}
            </Typography>
            {children}
        </div>
    );
};