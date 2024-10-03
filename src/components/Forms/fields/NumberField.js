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

export const FormNumberField = ({ NumberFieldObject }) => {

    const title = NumberFieldObject.name;
    const required = NumberFieldObject.required;
    const placeHolder = NumberFieldObject.placeHolder;
    const min = NumberFieldObject.min;
    const max = NumberFieldObject.max;
    const symbol = NumberFieldObject.symbol;

    return (
        <FormInput
            title={title}
        >
            <TextField
                variant="filled"
                size="small"
                hiddenLabel
                slotProps={{
                }}
                InputProps={{
                    startAdornment: (<InputAdornment position="start">{symbol}</InputAdornment>),
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