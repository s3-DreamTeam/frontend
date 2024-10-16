import { MenuItem, TextField } from "@mui/material";
import { FormInput } from "../foundations/input";
export const FormDropdownField = ({ fieldObject, onSomethingChanged }) => {
    const title = fieldObject.name;
    const required = fieldObject.required;
    const defaultValue = fieldObject.defaultValue;
    const choices = fieldObject.choices;
    const subCategories = fieldObject.subCategories;

    function valueChanged(event) {
        console.log("I'm a dropdown, my value changed!");
        const newValue = event.target.value;
        fieldObject.value = newValue;
        onSomethingChanged(fieldObject);
    }

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
                onChange={valueChanged}
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