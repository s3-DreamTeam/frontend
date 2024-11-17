/** 
 * # Endpoints
 * List of all the endpoints supported by the frontend, wether they are get or posts.
 * Put '/' before the name of each.
 * ---
 * @type {*} 
 */
const Endpoints = {
    GetAllUsers: 'getallusagers',
    AddNewUser: 'insertUsager',
    Test: 'test',
    Health: 'health',

    //- Machine templates - //
    MachineTemplate: {
        Get: {
            Image: 'MachineTemplate/Get/Image',   // Here's an ID, give me the image for it.
            Surface: 'MachineTemplate/Get/Surface', // Here's an ID, give me Manufacturer and Model for it.
            Full: 'MachineTemplate/Get/Full',    // Here's an ID, Give me the entire machine template
            AllID: 'MachineTemplate/Get/AllID',   // Give me an array of all my machine templates.
        },
        New: 'MachineTemplate/New',         // Here's a JSON, make a new object with it.
        Modify: 'MachineTemplate/Modify',      // Here's a JSON and an ID, overwrite the template with this.
        Delete: 'MachineTemplate/Delete',      // Delete the template with this ID.
    },
    //- Machine Inventory - //
    MachineInventory: {
        Get: {
            Image: 'MachineInventory/Get/Image',    // Here's an ID, give me the image for it.
            Surface: 'MachineInventory/Get/Surface',// Here's an ID, give me Manufacturer, Model & location for it.
            Full: 'MachineInventory/Get/Full',      // Here's an ID, Give me the entire machine's object data
            AllID: 'MachineInventory/Get/AllID',    // Give me an array of all my machines in my inventory.
        },
        New: 'MachineInventory/New',            // Here's a JSON, make a new object with it.
        //Modify: 'MachineInventory/Modify',      // Here's a JSON and an ID, overwrite the machine with this.
        Delete: 'MachineInventory/Delete',      // Delete the machine in my inventory with this ID.
    },
    //- Product templates - //
    ProductTemplate: {
        Get: {
            Image: 'ProductTemplate/Get/Image',   // Here's an ID, give me the image for it.
            Surface: 'ProductTemplate/Get/Surface', // Here's an ID, give me Manufacturer and Model for it.
            Full: 'ProductTemplate/Get/Full',    // Here's an ID, Give me the entire product template
            AllID: 'ProductTemplate/Get/AllID',   // Give me an array of all my product templates.
        },
        New: 'ProductTemplate/New',         // Here's a JSON, make a new object with it.
        Modify: 'ProductTemplate/Modify',      // Here's a JSON and an ID, overwrite the template with this.
        Delete: 'ProductTemplate/Delete',      // Delete the template with this ID.
    },
    //- Product inventory - //
    ProductInventory: {
        Get: {
            Image: 'ProductInventory/Get/Image',    // Here's an ID, give me the image for it.
            Surface: 'ProductInventory/Get/Surface',// Here's an ID, give me Manufacturer, Model, and how much I got.
            Full: 'ProductInventory/Get/Full',      // Here's an ID, Give me the entire product object
            AllID: 'ProductInventory/Get/AllID',    // Give me an array of all my products in my inventory.
        },
        Manage: {
            Add: 'ProductInventory/Manage/Add',     // New products of this kind were added.
            Loss: 'ProductInventory/Manage/Loss'    // We lost some products :(
        },
        New: 'ProductInventory/New',            // Here's a JSON, make a new object with it.
        //Modify: 'ProductInventory/Modify',      // Here's a JSON and an ID, overwrite the product with this.
        Delete: 'ProductInventory/Delete',      // Delete the product with this ID.

    }
};

export default Endpoints; 