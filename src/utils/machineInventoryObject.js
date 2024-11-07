// File holding the object template used to create machine objects

/**
 * # MachineInventory
 * Class used as the template for the data given to Machine Template component cards.
 * Holds everything a machine in the inventory should have.
 * 
 * ---
 * @class MachineInventory
 */
class MachineInventory {
    // Generic Information
    "Machine's Image" = null;
    Location = "UNDEFINED";
    Name = "UNDEFINED";

    // Identification
    "Serial ID" = null;
    "Machine's Color" = null;


    // Connectivity
    "Network SSID" = null;
    "Network Password" = null;
    "Bluetooth SSID" = null;
    "Bluetooth Password" = null;
    "Physical Connector" = null;

    // Payments
    "Online Store URL" = null;
    "Debit Providers" = null;
    "Credit Providers" = null;
    "Accepted Currencies" = null;

    // Climate
    "Activated" = false;
    "Min temperature" = 0;
    "Set temperature" = 0;
    "Max temperature" = 0;

    // Inventory potential
    Slots = [];

    TemplateID = null;

    isLoading = false;
    imageIsLoading = false;
    errors = null;
}

export default MachineInventory;