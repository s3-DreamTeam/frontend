import { FormFieldError } from "../formFieldErrors";

export function ImageFieldValueTester(newValue, fieldObject) {
    const required = fieldObject.required;

    if ((newValue === "" || newValue === null) && required) {
        return FormFieldError.isRequired;
    }
    return null;
}