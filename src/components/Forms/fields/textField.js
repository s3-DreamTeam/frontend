import { TextField } from "@mui/material";
import { FormInput } from "../foundations/input";
import { useEffect, useState } from "react";
import { textFieldValueTester } from "../../../utils/templateUtils/valueTesters/textFieldValueTester";

export const FormTextField = ({ fieldObject, onSomethingChanged }) => {
    const [formField, setFormField] = useState(fieldObject);
    const title = fieldObject.name;
    const required = fieldObject.required;
    const placeHolder = fieldObject.placeHolder;
    function textChanged(event) {
        const newValue = event.target.value;
        console.log("I'm some text, my value changed: [" + newValue + "]");

        const updatedField = {
            ...formField,
            value: newValue,
            error: textFieldValueTester(newValue, formField),
        };

        setFormField(updatedField);
        onSomethingChanged(updatedField);
    }

    useEffect(() => {
    }, [formField]);

    return (
        <FormInput
            title={title}
            isError={formField.error}
        >
            <TextField
                variant="filled"
                size="small"
                hiddenLabel
                required={required}
                placeholder={placeHolder}
                helperText={formField.error ? formField.error : null}
                onChange={textChanged}
                error={formField.error !== null}
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