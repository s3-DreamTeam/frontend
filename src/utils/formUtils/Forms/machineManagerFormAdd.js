import { NumberFieldBuilder } from "../formsObjects";

export function machineManagerFormAddBuilder(maxQuantity) {
    return ({
        name: "Put products in this slot",
        sections: [
            {
                name: "Information",
                components: [
                    NumberFieldBuilder(
                        "Quantity",
                        true,
                        null,
                        null,
                        maxQuantity,
                        0
                    ),
                    NumberFieldBuilder(
                        "Price",
                        true,
                        null,
                        "$",
                        null,
                        0,
                        true
                    ),
                ]
            },
        ]
    }
    );
}