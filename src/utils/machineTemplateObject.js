// File holding the object template used to create machine objects

/**
 * # MachineTemplate
 * Class used as the template for the data given to Machine Template component cards.
 * Holds everything a machine template should have.
 * 
 * ---
 * @class MachineTemplate
 */
class MachineTemplate {
    // Generic Information
    manufacturer = "UNDEFINED";
    model = "UNDEFINED";
    image = null;
    category = null;
    colorVaries = false;
    seeThroughWindow = false;
    hasSerialNumber = false;

    // Connectivity
    hasInternetConnection = false;
    hasBluetoothConnection = false;
    hasPhysicalConnection = false;

    // Payments
    hasOnlineStore = false;
    acceptsDebit = false;
    acceptsCredit = false;
    acceptsCash = false;

    // Inventory potential
    slots = [];
}

export default MachineTemplate;