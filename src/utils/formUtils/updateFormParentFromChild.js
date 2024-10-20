

/**
 * # updateFormParentFromChild
 * ## Context
 * When creating a form through a JS object, we separate it in sections, that gets dividied into further sections etc etc.
 * This is problematic.
 * How do we tell the form that a specific checkbox field changed so it can verify it when it gets submited?
 * This is where this function comes in.
 * ## Exemple of how to use it
 * A "FormSection" builds multiple small form fields. Such as checkboxes and text fields.
 * Each of the fields is given an "onSomethingChanged" function, which they MUST call, with their own
 * object when they change their values for any reasons.
 * That function, triggers the parents function. In this case, FormSection's "onSomethingChanged".
 * It gets the child's updated object field...
 * Now, it needs to update itself to call its parent's "onSomethincChanged"...
 * 
 * This function automatically overwrites the given updated child at the right "component" place in the object.
 * Since every form components has a "components" field when they have some, it'll automatically work.
 * 
 * Allegedly.
 * 
 * ---
 * @param {*} objectToUpdate 
 * @param {*} modifiedComponent 
 * @returns 
 */
export const updateFormParentFromChild = (objectToUpdate, modifiedComponent) => {
    // Find the index of the component to update
    const index = objectToUpdate.components.findIndex(component => component.name === modifiedComponent.name);

    // If the component is found, update it
    if (index !== -1) {
        objectToUpdate.components[index] = modifiedComponent; // Directly update the component
    }

    return objectToUpdate; // Return the updated object (optional)
};

/**
 * Unlike components, sections have their own names. We thus can't reuse "updateFormParentFromChild"
 * @param {*} formToUpdate 
 * @param {*} modifiedComponent 
 * @returns 
 */
export const updateMainFormSections = (formToUpdate, modifiedComponent) => {
    // Find the index of the component to update
    const index = formToUpdate.sections.findIndex(component => component.name === modifiedComponent.name);

    // If the component is found, update it
    if (index !== -1) {
        formToUpdate.sections[index] = modifiedComponent; // Directly update the component
    }

    return formToUpdate; // Return the updated object (optional)
};