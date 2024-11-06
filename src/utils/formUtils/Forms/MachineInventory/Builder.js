import { ImageFieldBuilder, TextBoxFieldBuilder } from "../../formsObjects";
import { MachineInventoryFormClimateField, MachineInventoryFormConnectivity, MachineInventoryFormIdentificationField, MachineInventoryFormPayments } from "./DynamicSectionsBuilders";

export function MachineInventoryFormBuilder(templateObject) {
    const image = templateObject["Machine's image"];
    const hasSerialNumber = templateObject["Has serial numbers"];
    const hasVaryingColors = templateObject["Color varies"];
    const climate = templateObject["Climate"];

    const hasInternet = templateObject["Has internet connection"];
    const hasBluetooth = templateObject["Has Bluetooth"];
    const hasPhysical = templateObject["Has physical connection"];

    const hasOnlineStore = templateObject["Online store"];
    const hasDebitCards = templateObject["Debit cards"];
    const hasCreditCards = templateObject["Credit cards"];
    const hasCash = templateObject["Cash"];

    const identificationSection = MachineInventoryFormIdentificationField(hasSerialNumber, hasVaryingColors);
    const climateSection = MachineInventoryFormClimateField(climate);
    const connectivitySection = MachineInventoryFormConnectivity(hasInternet, hasBluetooth, hasPhysical);
    const paymentSection = MachineInventoryFormPayments(hasOnlineStore, hasDebitCards, hasCreditCards, hasCash);
    let Form = {
        name: "New Machine in Inventory",
        sections: [
            {
                name: "General Information",
                components: [
                    ImageFieldBuilder(
                        "Machine's Image",
                        false,
                        image
                    ),
                    TextBoxFieldBuilder(
                        "Name",
                        true,
                        ""
                    ),
                    TextBoxFieldBuilder(
                        "Location",
                        true,
                        ""
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

    if (connectivitySection !== null) {
        Form.sections.push(connectivitySection);
    }

    if (paymentSection !== null) {
        Form.sections.push(paymentSection);
    }

    return (Form);
}