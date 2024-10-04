import { InputAdornment, TextField } from "@mui/material";
import { FormInput } from "../foundations/input";

/*
    name,
    required,
    placeHolder,
    symbol,
    max,
    min,
*/

export const FormNumberField = ({ fieldObject }) => {
    const FieldObject = Object.values(fieldObject)[0];
    const title = Object.keys(fieldObject)[0];
    const required = FieldObject.required;
    const placeHolder = FieldObject.placeHolder;
    const min = FieldObject.min;
    const max = FieldObject.max;
    const symbol = FieldObject.symbol;

    return (
        <FormInput
            title={title}
        >
            <TextField
                variant="filled"
                size="small"
                hiddenLabel
                placeholder={placeHolder}
                slotProps={{
                }}
                InputProps={{
                    endAdornment: (<InputAdornment position="start">{symbol}</InputAdornment>),
                    style: {
                        borderRadius: '1.5rem',
                    },
                    min: { min },
                    max: { max },
                    inputMode: 'numeric'
                }}
            />
        </ FormInput>
    );
};