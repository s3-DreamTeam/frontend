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
    const title = fieldObject.name;
    const required = fieldObject.required;
    const placeHolder = fieldObject.placeHolder;
    const min = fieldObject.min;
    const max = fieldObject.max;
    const symbol = fieldObject.symbol;

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