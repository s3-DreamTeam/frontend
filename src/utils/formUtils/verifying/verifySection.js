import { updateFormParentFromChild } from "../updateFormParentFromChild";
import { VerifyFields } from "./verifyFields";

export function VerifySection(formSection) {
    const fields = formSection.components;

    fields.forEach(object => {
        const checkedField = VerifyFields(object);
        formSection = updateFormParentFromChild(formSection, checkedField);
    });
    return formSection;
}