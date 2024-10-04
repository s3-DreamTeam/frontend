import { TextField } from "@mui/material";
import { FormInput } from "../foundations/input";

export const FormTextField = ({ fieldObject }) => {

    const FieldObject = Object.values(fieldObject)[0];
    const title = Object.keys(fieldObject)[0];
    const required = FieldObject.required;
    const placeHolder = FieldObject.placeHolder;

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