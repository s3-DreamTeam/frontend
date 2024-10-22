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
    CreateNewMachineTemplate: 'newMachineTemplate',         // Here's a JSON, make a new object with it.
    DeleteMachineTemplate: 'deleteMachineTemplate',         // Delete the template with this ID.
    GetMachineTemplateImage: 'getMachineTemplateImage',     // Here's an ID, give me the image for it.
    GetSurfaceMachineTemplate: 'getSurfaceMachineTemplate', // Here's an ID, give me Manufacturer and Model for it.
    GetFullMachineTemplate: 'getFullMachineTemplate',       // Here's an ID, Give me the entire machine template
    GetAllMachineTemplateID: 'getAllMachineTemplateID',     // Give me an array of all my machine templates.
    ModifyMachineTemplate: 'modifyMachineTemplate',         // Here's a JSON and an ID, overwrite the template with this.
};

export default Endpoints; 