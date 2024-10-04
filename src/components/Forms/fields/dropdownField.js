import { MenuItem, TextField } from "@mui/material";
import { FormInput } from "../foundations/input";
export const DropdownField = ({ fieldObject }) => {
    console.log(fieldObject);
    const FieldObject = Object.values(fieldObject)[0];
    const title = Object.keys(fieldObject)[0];
    const required = FieldObject.required;
    const defaultValue = FieldObject.defaultValue;
    const choices = FieldObject.choices;
    const subCategories = FieldObject.subCategories;

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