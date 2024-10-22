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
    Manufacturer = "UNDEFINED";
    Model = "UNDEFINED";
    Image = null;
    Category = null;
    ColorVaries = false;
    SeeThroughWindow = false;
    HasSerialNumber = false;

    // Connectivity
    HasInternetConnection = false;
    HasBluetoothConnection = false;
    HasPhysicalConnection = false;

    // Payments
    HasOnlineStore = false;
    AcceptsDebit = false;
    AcceptsCredit = false;
    AcceptsCash = false;

    // Inventory potential
    Slots = [];


    isLoading = false;
    imageIsLoading = false;
    errors = null;
}

export default MachineTemplate;