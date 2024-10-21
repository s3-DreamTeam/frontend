/**
 * # FormToPacket
 * Goes through a visual form object...
 * Extracts all the values
 * Creates a 1 dimmension object to be sent over to the servers.
 * 
 * THIS IS WHY FIELDS CAN'T HAVE THE SAME NAMES.
 * 
 * ---
 * @param {*} formObject 
 */
export function FormToPacket(formObject) {
    let createdPacket = {};

    formObject.sections.forEach(section => {
        section.components.forEach(field => {
            createdPacket[field.name] = field.value;
        });
    });
    return createdPacket;
}