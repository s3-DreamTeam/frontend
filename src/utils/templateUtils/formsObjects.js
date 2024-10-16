export const FieldTypes = {
    Textbox: "Textbox",
    Checkbox: "Checkbox",
    Dropdown: "Dropdown",
    NumberField: "NumberField"
};

/**
 * # TextBoxFieldBuilder
 * Returns a complete object, used to define a field in a template form.
 * Used to create the forms visuals and directives and contain the value currently on the user's screen.
 * 
 * ---
 * @export
 * @param {*} name Title of the field
 * @param {*} required Won't send the form if the field is empty
 * @param {*} placeHolder Default text in the box.
 * @return {*} 
 */
export function TextBoxFieldBuilder(
    name,
    required,
    placeHolder
) {
    return {
        name: name,
        type: FieldTypes.Textbox,
        required: required,
        placeHolder: placeHolder,
        error: null,
        value: null
    };
}

/**
 * # DropDownFieldBuilder
 * Returns a complete object, used to define a field in a template form.
 * Used to create the forms visuals and directives and contain the value currently on the user's screen.
 * 
 * Looks like the `TextBox`, but with an arrow allowing the user to select a choice from a list.
 * 
 * ---
 * @export
 * @param {*} name Title of the field
 * @param {*} required Won't send the form if the field is empty
 * @param {*} defaultValue Default value in the dropdown if no choice is selected
 * @param {*} choices array of strings that will populate the drop down menus for the user
 * @param {*} subCategories For each choices, you can create subfields that will appear if that choice is selected. Names *must* be written the same as in the choices array.
 * @return {*} 
 */
export function DropdownFieldBuilder(
    name,
    required,
    defaultValue,
    choices,
    subCategories
) {
    return {
        name: name,
        type: FieldTypes.Dropdown,
        required: required,
        defaultValue: defaultValue,
        choices: choices,
        error: null,
        value: null,
        subCategories
    };
}

/**
 * # CheckboxFieldBuilder
 * Returns a complete object, used to define a field in a template form.
 * Used to create the forms visuals and directives and contain the value currently on the user's screen.
 * We're not using toggles in a form.
 * 
 * Default is false.
 * 
 * ---
 * @export
 * @param {*} name The title of the form's field
 * @param {*} required Wether the box must be checked to be able to submit the form
 * @return {*} 
 */
export function CheckboxFieldBuilder(
    name,
    required,
) {
    return {
        name: name,
        type: FieldTypes.Checkbox,
        required: required,
        error: null,
        value: null
    };
}

/**
 * # NumberFieldBuilder
 * Returns a complete object, used to define a field in a template form.
 * Used to create the forms visuals and directives and contain the value currently on the user's screen.
 * 
 * Functions the same as a `TextBox`, but only numbers can populate its contents.
 * You can also define maximums and minimums the values can have to be valid and set a
 * symbol to notify the user of the units associated with the number.
 * 
 * ---
 * @export
 * @param {*} name The title of the form's field
 * @param {*} required Wether the field must contain values for the form to be valid and sent
 * @param {*} placeHolder Text in the box when there's no data in it.
 * @param {*} symbol Notifies the user of the unit the numbers represents. `null` = no symbols.
 * @param {*} max Sets a maximum value for the data in the field to be valid. `null` = no maximums.
 * @param {*} min Sets a minimum value for the data in the field to be valid. `null` = no minimums.
 * @return {*} 
 */
export function NumberFieldBuilder(
    name,
    required,
    placeHolder,
    symbol,
    max,
    min,
) {
    return {
        name: name,
        type: FieldTypes.NumberField,
        required: required,
        placeHolder: placeHolder,
        symbol: symbol,
        max: max,
        min: min,
        error: null,
        value: null
    };
}