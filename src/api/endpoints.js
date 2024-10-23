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
    }
};

export default Endpoints; 