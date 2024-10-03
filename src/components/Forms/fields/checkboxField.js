import { Checkbox } from "@mui/material";
import { FormInput } from "../foundations/input";
import { Check, CheckBoxRounded } from "@mui/icons-material";
export const FormCheckbox = () => {
    return (
        <FormInput
            title="lil checkbox"
        >
            <Checkbox
                size="large"
                checkedIcon={<CheckBoxRounded />}
            />
        </ FormInput>
    );
};