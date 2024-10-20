import { GetSectionErrors } from "../getSectionErrors";

export function errorsInForm(formObject) {
    const sections = formObject.sections;
    let errorWasFound = false;
    sections.forEach(section => {
        let errorFound = GetSectionErrors(section);
        if (errorFound) {
            errorWasFound = true;
        }
    });
    return errorWasFound;
}