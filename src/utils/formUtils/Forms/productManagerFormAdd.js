import { NumberFieldBuilder } from "../formsObjects";

export function productManagerFormAddBuilder() {
    return ({
        name: "Compute new products",
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
                        0,
                        true
                    ),
                ]
            },
        ]
    }
    );
}