import { TextField } from "@mui/material";
import { FormInput } from "../foundations/input";
import { useEffect, useState } from "react";
import { textFieldValueTester } from "../../../utils/formUtils/valueTesters/textFieldValueTester";

export const FormTextField = ({ fieldObject, onSomethingChanged, disabled }) => {
    const [isError, setIsError] = useState(fieldObject.error !== null);
    const [errorString, setErrorString] = useState(fieldObject.error);
    const [value, setValue] = useState(fieldObject.value);
    const title = fieldObject.name;
    const required = fieldObject.required;
    const placeHolder = fieldObject.placeHolder;

    function textChanged(event) {
        const newValue = event.target.value;
        const updatedField = {
            ...fieldObject,
            value: newValue,
            error: textFieldValueTester(newValue, fieldObject),
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
            isError={isError}
            disabled={disabled}
        >
            <TextField
                variant="filled"
                size="small"
                hiddenLabel
                required={required}
                placeholder={placeHolder}
                value={value || ''}
                helperText={isError ? errorString : null}
                onChange={textChanged}
                error={isError}
                disabled={disabled}
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