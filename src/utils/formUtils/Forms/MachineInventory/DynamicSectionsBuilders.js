// File that contains the parts used to build a larger form, from a template, when creating a machine for your inventory

import { CheckboxFieldBuilder, DropdownFieldBuilder, NumberFieldBuilder, TextBoxFieldBuilder } from "../../formsObjects";

// - Climate - //
export function MachineInventoryFormClimateField(dropdownAnswer) {
    switch (dropdownAnswer) {
        case "cooled":
        case "wide range":
        case "warmed":
            return {
                name: "Climate",
                components: [
                    CheckboxFieldBuilder(
                        "Activated",
                        false
                    ),
                    NumberFieldBuilder(
                        "Min temperature",
                        false,
                        null,
                        "C",
                        null,
                        null
                    ),
                    NumberFieldBuilder(
                        "Set temperature",
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

export function MachineInventoryFormIdentificationField(serialNumberCheckBox, colorVariesCheckBox) {

    const serialNumberField = serialNumberCheckBox ? TextBoxFieldBuilder(
        "Serial ID",
        true,
        "0000"
    ) : null;

    const colorField = colorVariesCheckBox ? TextBoxFieldBuilder(
        "Machine's Color",
        true,
        "#000000"
    ) : null;

    if (serialNumberCheckBox || colorVariesCheckBox) {
        let Section = {
            name: "Identification",
            components: [
            ]
        };

        if (serialNumberField !== null) {
            Section.components.push(serialNumberField);
        }

        if (colorField !== null) {
            Section.components.push(colorField);
        }

        return (Section);
    } else {
        return null;
    }
};

export function MachineInventoryFormConnectivity(internet, Bluetooth, physical) {

    // - INTERNET - //
    const networkNameField = internet ? TextBoxFieldBuilder(
        "Network SSID",
        true,
        null
    ) : null;

    const networkPasswordField = internet ? TextBoxFieldBuilder(
        "Network Password",
        true,
        null
    ) : null;

    // - Bluetooth - //
    const bluetoothNameField = Bluetooth ? TextBoxFieldBuilder(
        "Bluetooth SSID",
        true,
        null
    ) : null;

    const bluetoothPasswordField = Bluetooth ? TextBoxFieldBuilder(
        "Bluetooth Password",
        true,
        null
    ) : null;

    // - Physical Connection - //
    const physicalField = physical ? DropdownFieldBuilder(
        "Physical Connector",
        true,
        "",
        ["USB", "Thunderbolt", "RS232", "LAN", "Centronics", "VHDCI", "DB"],
        null
    ) : null;

    if (internet || Bluetooth || physical) {

        let Section = {
            name: "Connectivity",
            components: [
            ]
        };

        if (networkNameField !== null) {
            Section.components.push(networkNameField);
        }

        if (networkPasswordField !== null) {
            Section.components.push(networkPasswordField);
        }

        if (bluetoothNameField !== null) {
            Section.components.push(bluetoothNameField);
        }

        if (bluetoothPasswordField !== null) {
            Section.components.push(bluetoothPasswordField);
        }

        if (physicalField !== null) {
            Section.components.push(physicalField);
        }

        return (Section);
    } else {
        return null;
    }
};

export function MachineInventoryFormPayments(online, debit, credit, cash) {

    // - online - //
    const onlineField = online ? TextBoxFieldBuilder(
        "Online Store URL",
        true,
        null
    ) : null;

    const debitField = debit ? TextBoxFieldBuilder(
        "Debit Providers",
        true,
        null
    ) : null;

    // - Bluetooth - //
    const creditField = credit ? TextBoxFieldBuilder(
        "Credit Providers",
        true,
        null
    ) : null;

    const cashField = cash ? TextBoxFieldBuilder(
        "Accepted Currencies",
        true,
        null
    ) : null;

    if (online || debit || credit || cash) {
        let Section = {
            name: "Payments",
            components: [
            ]
        };

        if (onlineField !== null) {
            Section.components.push(onlineField);
        }

        if (debitField !== null) {
            Section.components.push(debitField);
        }

        if (creditField !== null) {
            Section.components.push(creditField);
        }

        if (cashField !== null) {
            Section.components.push(cashField);
        }

        return (Section);
    } else {
        return null;
    }
};