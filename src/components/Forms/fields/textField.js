import { TextField } from "@mui/material";
import { FormInput } from "../foundations/input";

export const FormTextField = () => {
    return (
        <FormInput
            title="bruh"
        >
            <TextField
                variant="filled"
                size="small"
                hiddenLabel
                InputProps={{
                    disableUnderline: false,
                    style: {
                        borderRadius: '1.5rem',
                    }
                }}
            />
        </ FormInput>
    );
};