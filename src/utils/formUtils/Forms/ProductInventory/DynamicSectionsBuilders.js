// File that contains the parts used to build a larger form, from a template, when creating a machine for your inventory

import { NumberFieldBuilder, TextBoxFieldBuilder } from "../../formsObjects";

// - Climate - //
export function ProductInventoryFormIdentificationField(color, flavor, expirering, barCode) {

    const colorField = color ? TextBoxFieldBuilder(
        "Color",
        true,
        null
    ) : null;

    const flavorField = flavor ? TextBoxFieldBuilder(
        "Flavor",
        true,
        null
    ) : null;

    const expireField = flavor ? NumberFieldBuilder(
        "Shelf Life",
        true,
        null,
        "days",
        null,
        0
    ) : null;

    const barcodeField = barCode ? NumberFieldBuilder(
        "Bar code",
        true,
        null,
        null,
        null,
        null
    ) : null;


    if (color || flavor || expirering) {

        let Section = {
            name: "Identification",
            components: [
            ]
        };

        if (colorField !== null) {
            Section.components.push(colorField);
        }

        if (flavorField !== null) {
            Section.components.push(flavorField);
        }

        if (expireField !== null) {
            Section.components.push(expireField);
        }

        if (barcodeField !== null) {
            Section.components.push(barcodeField);
        }

        return (Section);
    } else {
        return null;
    }
};

export function ProductInventoryFormEdibleField(edible) {

    if (!edible) { return null; }

    return {
        name: "Nutritions",
        components: [
            TextBoxFieldBuilder(
                "Allergies",
                true,
                ""
            ),
            NumberFieldBuilder(
                "Calories",
                true,
                null,
                'cal',
                null,
                null
            ),
            TextBoxFieldBuilder(
                "Ingredients",
                true,
                ""
            ),
        ]
    };
};

export function ProductInventoryFormClimateField(dropdownAnswer) {
    switch (dropdownAnswer) {
        case "room temperature":
        case "cold":
        case "hot":
            return {
                name: "Prefered Temperatures",
                components: [
                    NumberFieldBuilder(
                        "Min temperature",
                        false,
                        null,
                        "C",
                        null,
                        null
                    ),
                    NumberFieldBuilder(
                        "Prefered",
                        true,
                        "0",
                        "C",
                        null,
                        null
                    ),
                    NumberFieldBuilder(
                        "Max temperature",
                        false,
                        null,
                        "C",
                        null,
                        null
                    ),
                ]
            };

        default:
            return null;
    }
}
