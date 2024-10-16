import { FieldTypes } from "../../../utils/templateUtils/formsObjects";
import { FormCheckbox } from "./checkboxField";
import { FormDropdownField } from "./dropdownField";
import { FormNumberField } from "./NumberField";
import { FormTextField } from "./textField";

export const FieldRenderer = ({ formObject, onSomethingChanged }) => {
    const type = formObject.type;
    console.log("Type: ", type);

    switch (type) {
        case (FieldTypes.Textbox):
            return (
                <FormTextField
                    fieldObject={formObject}
                    onSomethingChanged={onSomethingChanged}
                />);
        case (FieldTypes.Checkbox):
            return (
                <FormCheckbox
                    fieldObject={formObject}
                    onSomethingChanged={onSomethingChanged}
                />);
        case (FieldTypes.Dropdown):
            return (
                <FormDropdownField
                    fieldObject={formObject}
                    onSomethingChanged={onSomethingChanged}
                />
            );
        case (FieldTypes.NumberField):
            return (
                <FormNumberField
                    fieldObject={formObject}
                    onSomethingChanged={onSomethingChanged}
                />
            );
        default:
            console.error("FIELD BUILDING ERROR. INCORRECT FIELD RENDERER OBJECT TYPE");
            return null;
    }
};