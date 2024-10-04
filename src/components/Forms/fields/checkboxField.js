import { Checkbox } from "@mui/material";
import { FormInput } from "../foundations/input";
import { CheckBoxRounded } from "@mui/icons-material";
export const FormCheckbox = ({ fieldObject }) => {
    const title = fieldObject.name;
    const required = fieldObject.required;

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