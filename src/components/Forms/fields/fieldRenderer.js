import { FieldTypes } from "../../../utils/templateUtils/formsObjects";
import { FormCheckbox } from "./checkboxField";
import { FormDropdownField } from "./dropdownField";
import { FormNumberField } from "./NumberField";
import { FormTextField } from "./textField";

export const FieldRenderer = ({ formObject }) => {
    const type = formObject.type;
    console.log("Type: ", type);

    switch (type) {
        case (FieldTypes.Textbox):
            return (<FormTextField fieldObject={formObject} />);
        case (FieldTypes.Checkbox):
            return (<FormCheckbox fieldObject={formObject} />);
        case (FieldTypes.Dropdown):
            return (<FormDropdownField fieldObject={formObject} />);
        case (FieldTypes.NumberField):
            return (<FormNumberField fieldObject={formObject} />);
        default:
            console.error("FIELD BUILDING ERROR. INCORRECT FIELD RENDERER OBJECT TYPE");
            return null;
    }
};