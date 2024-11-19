import { NumberFieldBuilder } from "../formsObjects";

export function machineManagerFormAddBuilder() {
    return ({
        name: "Put products in this slot",
        sections: [
            {
                name: "Information",
                components: [
                    NumberFieldBuilder(
                        "Gained Quantity",
                        true,
                        null,
                        null,
                        null,
                        0
                    ),
                    NumberFieldBuilder(
                        "Paid Price",
                        true,
                        null,
                        "$",
                        null,
                        0
                    ),
                ]
            },
        ]
    }
    );
}