import { FormFieldError } from "../formFieldErrors";

export function textFieldValueTester(newValue, fieldObject) {
    const required = fieldObject.required;

    if ((newValue === "" || newValue === null) && required) {
        return FormFieldError.isRequired;
    }

    if (newValue.length > 50) {
        return FormFieldError.isTooLong + `(${newValue.length}/50)`;
    }

    // Nuh huh, don't try to put SQL in ur names... silly aah
    if (newValue.indexOf(';') !== -1) {
        return "Illegal caracter: ';'";
    }
    return null;
}