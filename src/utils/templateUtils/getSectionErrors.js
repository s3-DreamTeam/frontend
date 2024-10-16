/**
 * # GetSectionErrors
 * Parses all the form fields of a form section, checks for their error values... if any is **ANYTHING ELSE THAN NULL**... it'll return true.
 * 
 * ---
 * @param {*} formSection 
 */
export function GetSectionErrors(formSection) {
    return formSection.components.some(element => element.error !== null);
}