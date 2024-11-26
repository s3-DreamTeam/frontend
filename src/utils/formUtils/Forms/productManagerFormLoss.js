import { DropdownFieldBuilder, NumberFieldBuilder } from "../formsObjects";

export function productManagerFormLossBuilder(currentAmount) {
    return ({
        name: "Compute loss of products",
        sections: [
            {
                name: "Information",
                components: [
                    NumberFieldBuilder(
                        "Lost Quantity",
                        true,
                        null,
                        null,
                        currentAmount,
                        0
                    ),
                    DropdownFieldBuilder(
                        "Reason",
                        true,
                        null,
                        ["Expired", "Stolen", "Discarded", "Other"],
                        null
                    )
                ]
            },
        ]
    }
    );
}