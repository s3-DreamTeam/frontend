export function VerifyFields(fieldObject) {
    const error = fieldObject.verify(fieldObject.value, fieldObject);
    const updatedField = {
        ...fieldObject,
        error: error,
    };
    return updatedField;
}