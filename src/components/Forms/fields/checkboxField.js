import { Checkbox } from "@mui/material";
import { FormInput } from "../foundations/input";
import { CheckBoxRounded } from "@mui/icons-material";
import { useEffect, useState } from "react";
export const FormCheckbox = ({
    fieldObject,
    onSomethingChanged = () => { },
    disabled
}) => {
    const [isError, setIsError] = useState(fieldObject.error !== null);
    const [errorString, setErrorString] = useState(fieldObject.error);
    const [initialValue, setInitialValue] = useState(fieldObject.value);

    const title = fieldObject.name;

    function checkBoxChanged(event) {
        let newState = event.target.checked;
        setInitialValue(newState);
        fieldObject.value = newState;
        onSomethingChanged(fieldObject);
    }

    useEffect(() => {
        setIsError(fieldObject.error !== null);
        setErrorString(fieldObject.error);
        setInitialValue(fieldObject.value);
    }, [fieldObject]);

    return (
        <FormInput
            title={title}
            disabled={disabled}
        >
            <Checkbox
                size="large"
                checkedIcon={<CheckBoxRounded />}
                onChange={checkBoxChanged}
                error={isError}
                checked={initialValue}
                disabled={disabled}
            />
        </ FormInput>
    );
};