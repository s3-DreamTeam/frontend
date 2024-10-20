import { FormFieldError } from "../formFieldErrors";

export function DropdownFieldValueTester(fieldObject, newValue) {
    const required = fieldObject.required;

    if ((newValue === "" || newValue === null || newValue === undefined) && required) {
        return FormFieldError.isRequired;
    }

    return null;
}