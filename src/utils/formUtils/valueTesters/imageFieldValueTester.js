import { FormFieldError } from "../formFieldErrors";

export function ImageFieldValueTester(newValue, fieldObject) {
    const required = fieldObject.required;

    if ((newValue === "" || newValue === null) && required) {
        return FormFieldError.isRequired;
    }

    if (newValue === null) {
        return null;
    }

    // Go ahead, change this... The backend verifies it too :P
    // You'll just get generic errors tho... /shrug
    if (newValue.length > 20000) {
        return `Image too large. (${Math.floor(newValue.length / 1000)}KB / 20KB)`;
    }

    return null;
}