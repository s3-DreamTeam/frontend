import { FormFieldError } from "../formFieldErrors";

export function textFieldValueTester(newValue, fieldObject) {
    const required = fieldObject.required;

    if ((newValue === "" || newValue === null) && required) {
        return FormFieldError.isRequired;
    }
    return null;
}