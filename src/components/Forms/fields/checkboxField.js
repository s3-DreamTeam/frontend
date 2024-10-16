import { Checkbox } from "@mui/material";
import { FormInput } from "../foundations/input";
import { CheckBoxRounded } from "@mui/icons-material";
export const FormCheckbox = ({
    fieldObject,
    onSomethingChanged = () => { }
}) => {
    const title = fieldObject.name;
    const required = fieldObject.required;

    function checkBoxChanged(event) {
        console.log("I'm a checkbox, and I changed!");
        let newState = event.target.checked;
        fieldObject.value = newState;
        console.log(fieldObject);
        onSomethingChanged(fieldObject);
    }

    return (
        <FormInput
            title={title}
        >
            <Checkbox
                size="large"
                checkedIcon={<CheckBoxRounded />}
                onChange={checkBoxChanged}
            />
        </ FormInput>
    );
};