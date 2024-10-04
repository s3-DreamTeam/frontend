import { TextField } from "@mui/material";
import { FormInput } from "../foundations/input";

export const FormTextField = ({ fieldObject }) => {
    const title = fieldObject.name;
    const required = fieldObject.required;
    const placeHolder = fieldObject.placeHolder;

    return (
        <FormInput
            title={title}
        >
            <TextField
                variant="filled"
                size="small"
                hiddenLabel
                required={required}
                placeholder={placeHolder}
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