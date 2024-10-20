import { MenuItem, TextField } from "@mui/material";
import { FormInput } from "../foundations/input";
import { DropdownFieldValueTester } from "../../../utils/formUtils/valueTesters/dropdownFieldValueTester";
import { useEffect, useState } from "react";
export const FormDropdownField = ({ fieldObject, onSomethingChanged }) => {
    const [isError, setIsError] = useState(fieldObject.error !== null);
    const [errorString, setErrorString] = useState(fieldObject.error);
    const [value, setValue] = useState(fieldObject.value);

    const title = fieldObject.name;
    const required = fieldObject.required;
    const defaultValue = fieldObject.defaultValue;
    const choices = fieldObject.choices;
    const subCategories = fieldObject.subCategories;

    function valueChanged(event) {
        const newValue = event.target.value;
        const updatedField = {
            ...fieldObject,
            value: newValue,
            error: DropdownFieldValueTester(newValue, fieldObject),
        };
        setIsError(updatedField.error !== null);
        setErrorString(updatedField.error);
        onSomethingChanged(updatedField);
        setValue(newValue);
    }

    useEffect(() => {
        setIsError(fieldObject.error !== null);
        setErrorString(fieldObject.error);
        setValue(fieldObject.initialValue);
    }, [fieldObject]);

    return (
        <FormInput
            title={title}
        >
            <TextField
                variant="filled"
                size="small"
                hiddenLabel
                select
                defaultValue={defaultValue}
                value={value}
                onChange={valueChanged}
                error={isError}
                helperText={errorString}
                slotProps={{
                }}
                InputProps={{
                    style: {
                        borderRadius: '1.5rem',
                        minWidth: '5rem'
                    },
                }}
            >
                {choices.map((choice) => (
                    <MenuItem
                        key={choice}
                        value={choice}
                    >
                        {choice}
                    </MenuItem>
                ))}
            </TextField>
        </ FormInput>
    );
};