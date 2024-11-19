import { NumberFieldBuilder } from "../formsObjects";

export function machineManagerFormRemoveBuilder(maxQuantity) {
    return ({
        name: "Remove products from this slot",
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
                    )
                ]
            },
        ]
    }
    );
}