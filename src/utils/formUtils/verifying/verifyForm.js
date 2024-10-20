import { updateMainFormSections } from "../updateFormParentFromChild";
import { VerifySection } from "./verifySection";

/**'
 * # VerifyForm
 * Goes through the entire form, verifies each field, update them with the proper error and returns you the updated, verified form.
 */
export function VerifyForm(formObject) {
    const sections = formObject.sections;
    sections.forEach(section => {
        section = VerifySection(section);
        formObject = updateMainFormSections(formObject, section);
    });
    return formObject;
}