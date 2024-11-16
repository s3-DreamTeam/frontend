import { CheckboxFieldBuilder, DropdownFieldBuilder, ImageFieldBuilder, NumberFieldBuilder, TextBoxFieldBuilder } from "./formsObjects";

export function machineTemplateFormBuilder() {
    return ({
        name: "Machine template form",
        sections: [
            {
                name: "General information",
                components: [
                    ImageFieldBuilder(
                        "Machine's Image",
                        false
                    ),
                    TextBoxFieldBuilder(
                        "Manufacturer",
                        true,
                        ""
                    ),
                    TextBoxFieldBuilder(
                        "Model",
                        true,
                        ""
                    ),
                    DropdownFieldBuilder(
                        "Climate",
                        true,
                        "",
                        ["cooled", "warmed", "wide range", "none"],
                        null
                    ),
                    CheckboxFieldBuilder(
                        "Has serial numbers",
                        false
                    ),
                    CheckboxFieldBuilder(
                        "Color varies",
                        false
                    ),
                    CheckboxFieldBuilder(
                        "See through window",
                        false
                    )
                ]
            },
            {
                name: "Inventory",
                components: [
                    NumberFieldBuilder(
                        "Row Count",
                        true,
                        null,
                        null,
                        30,
                        1
                    ),
                    NumberFieldBuilder(
                        "Column Count",
                        true,
                        null,
                        null,
                        30,
                        1
                    ),
                    NumberFieldBuilder(
                        "Quantity Per Slots",
                        true,
                        null,
                        null,
                        null,
                        1
                    )
                ]
            },
            {
                name: "Connectivity",
                components: [
                    CheckboxFieldBuilder(
                        "Has internet connection",
                        false,
                    ),
                    CheckboxFieldBuilder(
                        "Has Bluetooth",
                        false
                    ),
                    CheckboxFieldBuilder(
                        "Has physical connection",
                        false
                    )
                ]
            },
            {
                name: "Payments",
                components: [
                    CheckboxFieldBuilder(
                        "Online store",
                        false
                    ),
                    CheckboxFieldBuilder(
                        "Debit cards",
                        false
                    ),
                    CheckboxFieldBuilder(
                        "Credit cards",
                        false
                    ),
                    CheckboxFieldBuilder(
                        "Cash",
                        false
                    ),
                ]
            }
        ]
    }
    );
}

export function productTemplateFormBuilder() {
    return ({
        name: "Product template form",
        sections: [
            {
                name: "General Information",
                components: [
                    ImageFieldBuilder(
                        "Product's Image",
                        false,
                    ),
                    TextBoxFieldBuilder(
                        "Manufacturer",
                        true,
                        ""
                    ),
                    TextBoxFieldBuilder(
                        "Model",
                        true,
                        ""
                    ),
                    DropdownFieldBuilder(
                        "Consistency",
                        true,
                        "",
                        ["liquid", "flimsy", "solid"],
                        null
                    ),
                    DropdownFieldBuilder(
                        "Climate",
                        true,
                        "",
                        ["anything", "hot", "cold", "room temperature"],
                        null
                    ),
                    CheckboxFieldBuilder(
                        "Edible",
                        false
                    ),
                    CheckboxFieldBuilder(
                        "Fragile",
                        false
                    )
                ]
            },
            {
                name: "Identification",
                components: [
                    CheckboxFieldBuilder(
                        "Color varies",
                        false
                    ),
                    CheckboxFieldBuilder(
                        "Has bar code",
                        false
                    ),
                    CheckboxFieldBuilder(
                        "Flavor varies",
                        false
                    ),
                    CheckboxFieldBuilder(
                        "Is packaged",
                        false
                    ),
                    CheckboxFieldBuilder(
                        "Can expire",
                        false
                    )
                ]
            },
            {
                name: "Product Specs",
                components: [
                    DropdownFieldBuilder(
                        "Shape",
                        true,
                        null,
                        [
                            "Cylinder",
                            "Sphere",
                            "Box",
                            "Odd"
                        ],
                        null
                    ),
                    NumberFieldBuilder(
                        "Width",
                        true,
                        null,
                        'cm',
                        null,
                        null
                    ),
                    NumberFieldBuilder(
                        "Height",
                        true,
                        null,
                        'cm',
                        null,
                        null
                    ),
                    NumberFieldBuilder(
                        "Length",
                        true,
                        null,
                        'cm',
                        null,
                        null
                    ),
                    NumberFieldBuilder(
                        "Weight",
                        true,
                        null,
                        'kg',
                        null,
                        null
                    ),
                ]
            },
        ]
    });
};