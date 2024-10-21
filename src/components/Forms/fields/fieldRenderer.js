import { FieldTypes } from "../../../utils/formUtils/formsObjects";
import { FormCheckbox } from "./checkboxField";
import { FormDropdownField } from "./dropdownField";
import { FormImageField } from "./imageField";
import { FormNumberField } from "./NumberField";
import { FormTextField } from "./textField";

export const FieldRenderer = ({ formObject, onSomethingChanged, disabled }) => {
    const type = formObject.type;
    //console.log("Type: ", type);

    switch (type) {
        case (FieldTypes.Textbox):
            return (
                <FormTextField
                    fieldObject={formObject}
                    onSomethingChanged={onSomethingChanged}
                    disabled={disabled}
                />);
        case (FieldTypes.Checkbox):
            return (
                <FormCheckbox
                    fieldObject={formObject}
                    onSomethingChanged={onSomethingChanged}
                    disabled={disabled}
                />);
        case (FieldTypes.Dropdown):
            return (
                <FormDropdownField
                    fieldObject={formObject}
                    onSomethingChanged={onSomethingChanged}
                    disabled={disabled}
                />
            );
        case (FieldTypes.NumberField):
            return (
                <FormNumberField
                    fieldObject={formObject}
                    onSomethingChanged={onSomethingChanged}
                    disabled={disabled}
                />
            );
        case (FieldTypes.Image):
            return (
                <FormImageField
                    fieldObject={formObject}
                    onSomethingChanged={onSomethingChanged}
                    disabled={disabled}
                />
            );
        default:
            console.error("FIELD BUILDING ERROR. INCORRECT FIELD RENDERER OBJECT TYPE");
            return null;
    }
};