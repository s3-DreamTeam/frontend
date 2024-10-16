export function textFieldValueTester(newValue, fieldObject) {
    const required = fieldObject.required;

    if ((newValue === "" || newValue === null) && required) {
        return "Can't be empty";
    }
    return null;
}