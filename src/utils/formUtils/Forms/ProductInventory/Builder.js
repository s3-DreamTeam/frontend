import { ImageFieldBuilder, NumberFieldBuilder, TextBoxFieldBuilder } from "../../formsObjects";
import { ProductInventoryFormClimateField, ProductInventoryFormEdibleField, ProductInventoryFormIdentificationField } from "./DynamicSectionsBuilders";

export function ProductInventoryFormBuilder(templateObject) {
    console.log("RECEIVED TEMPLATE: ", templateObject);
    const image = templateObject["Product's Image"];
    const climate = templateObject["Climate"];

    const hasVaryingColors = templateObject["Color varies"];
    const hasVaryingFlavors = templateObject["Flavor varies"];
    const canExpire = templateObject["Can expire"];
    const hasBarCode = templateObject["Has bar code"];
    const isEdible = templateObject["Edible"];

    const identificationSection = ProductInventoryFormIdentificationField(hasVaryingColors, hasVaryingFlavors, canExpire, hasBarCode);
    const climateSection = ProductInventoryFormClimateField(climate);
    const nutritionSection = ProductInventoryFormEdibleField(isEdible);

    let Form = {
        name: "New Product in Inventory",
        sections: [
            {
                name: "General Information",
                components: [
                    ImageFieldBuilder(
                        "Product's Image",
                        false,
                        image
                    ),
                    TextBoxFieldBuilder(
                        "Variant",
                        true,
                        ""
                    ),
                ]
            },
            {
                name: "Prices",
                components: [
                    NumberFieldBuilder(
                        "Profit Margin",
                        true,
                        null,
                        '%',
                        null,
                        null
                    ),
                ]
            },
        ]
    };

    if (identificationSection !== null) {
        Form.sections.push(identificationSection);
    }

    if (climateSection !== null) {
        Form.sections.push(climateSection);
    }

    if (nutritionSection !== null) {
        Form.sections.push(nutritionSection);
    }

    return (Form);
}