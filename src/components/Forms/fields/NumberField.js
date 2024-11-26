import { InputAdornment, TextField } from "@mui/material";
import { FormInput } from "../foundations/input";
import { NumberFieldValueTester } from "../../../utils/formUtils/valueTesters/numberFieldValueTester";
import { useEffect, useState } from "react";

/*
    name,
    required,
    placeHolder,
    symbol,
    max,
    min,
*/

export const FormNumberField = ({ fieldObject, onSomethingChanged, disabled }) => {
    const [isError, setIsError] = useState(fieldObject.error !== null);
    const [errorString, setErrorString] = useState(fieldObject.error);
    const [value, setValue] = useState(fieldObject.value);

    const title = fieldObject.name;
    const required = fieldObject.required;
    const placeHolder = fieldObject.placeHolder;
    const min = fieldObject.min;
    const max = fieldObject.max;
    const symbol = fieldObject.symbol;

    function numberChanged(event) {
        const newValue = event.target.value;
        const updatedField = {
            ...fieldObject,
            value: newValue,
            error: NumberFieldValueTester(newValue, fieldObject),
        };
        setValue(newValue);
        setIsError(updatedField.error !== null);
        setErrorString(updatedField.error);
        onSomethingChanged(updatedField);
    }

    useEffect(() => {
        setIsError(fieldObject.error !== null);
        setErrorString(fieldObject.error);
        setValue(fieldObject.value);
    }, [fieldObject]);

    return (
        <FormInput
            title={title}
            disabled={disabled}
            isError={isError}
            isRequired={fieldObject.required}
        >
            <TextField
                variant="filled"
                size="small"
                hiddenLabel
                required={required}
                placeholder={placeHolder}
                onChange={numberChanged}
                disabled={disabled}
                error={isError}
                helperText={isError ? errorString : null}
                value={value || ''}
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