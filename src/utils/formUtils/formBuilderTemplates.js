import { CheckboxFieldBuilder, DropdownFieldBuilder, ImageFieldBuilder, NumberFieldBuilder, TextBoxFieldBuilder } from "./formsObjects";

export function machineTemplateFormBuilder() {
    return ({
        name: "Machine template form",
        sections: [
            {
                name: "General information",
                components: [
                    ImageFieldBuilder(
                        "Machine's image",
                        true
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
                        "Has seerial numbers",
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

export const productTemplateObject = {
    name: "Product template form",
    sections: [
        {
            name: "General Information",
            components: [
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
                    ["anything", "warmth", "cold", "room temperature"],
                    null
                ),
                NumberFieldBuilder(
                    "Bar code",
                    true,
                    "000 000",
                    null,
                    null,
                    null
                ),
                CheckboxFieldBuilder(
                    "Consumable",
                    false
                )
            ]
        },
        {
            name: "Packaging",
            components: [
                DropdownFieldBuilder(
                    "Format",
                    true,
                    null,
                    [
                        "Custom",
                        "355ml can",
                        "raw liquid",
                        "2L bottle",
                        "Gum pack"
                    ],
                    {
                        Custom: [
                            DropdownFieldBuilder(
                                "Shape",
                                true,
                                null,
                                [
                                    "Cylinder",
                                    "Sphere",
                                    "Box"
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
                                "distributed amount",
                                false,
                                null,
                                null,
                                null,
                                null
                            ),
                            CheckboxFieldBuilder(
                                "is in packaged",
                                false
                            )
                        ]
                    }
                ),
            ]
        },
        {
            name: "Costs",
            components: [
                NumberFieldBuilder(
                    "Price per unit",
                    true,
                    null,
                    "$",
                    null,
                    0
                ),
                NumberFieldBuilder(
                    "Targeted retail price",
                    true,
                    null,
                    "$",
                    null,
                    0
                ),
                NumberFieldBuilder(
                    "Minimum profit margin",
                    true,
                    null,
                    "%",
                    null,
                    null
                ),
            ]
        }
    ]
};