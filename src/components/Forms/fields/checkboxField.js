import { Checkbox } from "@mui/material";
import { FormInput } from "../foundations/input";
import { CheckBoxRounded } from "@mui/icons-material";
export const FormCheckbox = ({ fieldObject }) => {
    console.log(fieldObject);
    const FieldObject = Object.values(fieldObject)[0];
    const title = Object.keys(fieldObject)[0];
    const required = FieldObject.required;

    return (
        <FormInput
            title={title}
        >
            <Checkbox
                size="large"
                checkedIcon={<CheckBoxRounded />}
            />
        </ FormInput>
    );
};