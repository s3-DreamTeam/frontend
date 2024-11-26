import { FormFieldError } from "../formFieldErrors";

export function NumberFieldValueTester(newValue, fieldObject) {
    const required = fieldObject.required;

    if ((newValue === "" || newValue === null) && required) {
        return FormFieldError.isRequired;
    }


    const maximumAllowed = fieldObject.max;
    const minimumAllowed = fieldObject.min;
    const isFloat = fieldObject.isFloat;

    // Test if value is a valid number
    try {
        const check = isNumeric(newValue);
        if (check === false) {
            return FormFieldError.isNotNumber;
        }
        const numericalValue = Number(newValue);

        //console.log("Value : ", numericalValue, " Max: ", maximumAllowed, " min: ", minimumAllowed);
        if ((numericalValue > maximumAllowed) && (fieldObject.max !== null)) {
            return FormFieldError.isAboveMax + maximumAllowed;
        }
        if ((numericalValue < minimumAllowed) && (fieldObject.min !== null)) {
            return FormFieldError.isBelowMin + minimumAllowed;
        }
    } catch {
        return FormFieldError.isNotNumber;
    }

    if (newValue.length > 50) {
        return FormFieldError.isTooLong + `(${newValue.length}/50)`;
    }

    if (!isFloat && (newValue.indexOf(".") !== -1)) {
        return "Cannot have decimals";
    }

    return null;
}

function isNumeric(str) {
    if (typeof str != "string") return false; // we only process strings!  
    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
        !isNaN(parseFloat(str)); // ...and ensure strings of whitespace fail
}