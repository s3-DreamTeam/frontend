import { FormFieldError } from "../formFieldErrors";

export function DropdownFieldValueTester(newValue, fieldObject) {
    const required = fieldObject.required;

    if ((newValue === "" || newValue === null || newValue === undefined) && required) {
        return FormFieldError.isRequired;
    }

    return null;
}