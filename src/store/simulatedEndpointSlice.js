import { createSlice } from "@reduxjs/toolkit";
import RowsAndColumnsToArray from "../utils/rowsAndColumnsToLetters";

let biggestMachineTemplateID = 0;
let biggestMachineInventoryID = 0;
let biggestProductTemplateID = 0;
let biggestProductInventoryID = 0;

export const simulatedEndpointSlice = createSlice({
    name: 'simulatedEndpointSlice',
    initialState: {
        object: {
            machineTemplates: [],
            productTemplates: [],
            machineInventory: [],
            productInventory: [],
        },
        simulated: false
    },
    reducers: {
        setSimulated: (state, action) => {
            let wantedState = action.payload;
            state.simulated = wantedState;
        },

        // - Machine templates - //
        addNewMachineTemplate: (state, action) => {
            let template = action.payload;
            let biggestId = biggestMachineTemplateID + 1;
            biggestMachineTemplateID = biggestId;

            if (biggestId === null || biggestId === undefined) {
                biggestId = 0;
            }

            const newID = biggestId + 1;

            template.id = newID;
            state.object.machineTemplates.push(template);
        },
        simRemoveMachineTemplate: (state, action) => {
            let ID = Number(action.payload);
            //console.log(state, ID);

            state.object.machineTemplates = state.object.machineTemplates.filter(item => item.id !== ID);
            //console.log(state, ID);
        },



        // - Product templates - //
        simAddNewProductTemplate: (state, action) => {
            let template = action.payload;
            let biggestId = biggestProductTemplateID + 1;
            biggestProductTemplateID = biggestId;

            if (biggestId === null || biggestId === undefined) {
                biggestId = 0;
            }

            const newID = biggestId + 1;

            template.id = newID;
            state.object.productTemplates.push(template);
        },
        simRemoveProductTemplate: (state, action) => {
            let ID = Number(action.payload);
            //console.log(state, ID);

            state.object.productTemplates = state.object.productTemplates.filter(item => item.id !== ID);
            //console.log(state, ID);
        },



        // - Machine Inventory - //
        simAddNewMachineInInventory: (state, action) => {
            let template = action.payload;
            let biggestId = biggestMachineInventoryID + 1;
            biggestMachineInventoryID = biggestId;

            if (biggestId === null || biggestId === undefined) {
                biggestId = 0;
            }

            const newID = biggestId + 1;

            template.id = newID;
            state.object.machineInventory.push(template);
        },
        simRemoveMachineFromInventory: (state, action) => {
            let ID = Number(action.payload);
            //console.log(state, ID);

            state.object.machineInventory = state.object.machineInventory.filter(item => item.id !== ID);
            //console.log(state, ID);
        },

        // - Machine Inventory Manager - //
        simCreateMachineInventory: (state, action) => {
            let ID = Number(action.payload);
            console.log("Redux: simCreateMachineInventory - payload: ", ID);

            const machine = state.object.machineInventory.find(item => item.id === ID);
            console.log(`Redux: found machine of ID : ${ID} :`, machine);


            const inventory = machine.Inventory;
            if (inventory === null || inventory === undefined) {
                console.warn("Redux: No inventory detected. Creating one.");
                // Creating an empty inventory
                console.warn("Redux: Adding empty array to create it.");
                state.object.machineInventory.find(item => item.id === ID)["Inventory"] = [];

                // Get the ID from which the machine was created from.
                const templateID = machine["TemplateID"];
                console.warn("Redux: Gottem template ID: ", templateID);

                // Getting the template from which the inventory should be built from
                const template = state.object.machineTemplates.find(item => item.id === templateID);
                console.warn("Redux: Gottem template, from the ID: ", templateID);

                // Get the rows and columns of the thingy.
                const rows = template["Row Count"];
                const cols = template["Column Count"];
                const quantity = template["Quantity Per Slots"];

                console.warn(`Redux: Inventory should be of ${rows} rows and ${cols} columns`);

                // Convert em to valid slot ids
                const IDs = RowsAndColumnsToArray(cols, rows);

                console.log("Redux: Array of ids created: ", IDs);

                for (const id of IDs) {
                    state.object.machineInventory.find(item => item.id === ID)["Inventory"].push({
                        "Slot": id,
                        "ProductID": null,
                        "Quantity": 0,
                        "Price": 0
                    });
                }

                console.log("Redux: Inventory should now be: ", state.object.machineInventory.find(item => item.id === ID)["Inventory"]);
            }
        },

        simResetMachineInventorySlot: (state, action) => {
            let packet = action.payload;
            let ID = Number(packet.id);
            let slot = packet.Slot; // Ensure proper type match

            console.log(`Trying to reset slot ${slot} of machine ${ID}`);

            // Find the machine
            let machine = state.object.machineInventory.find(item => item.id === ID);

            if (machine) {
                // Find the slot
                let slotToUpdate = machine.Inventory.find(item => item.Slot === slot);
                const productID = slotToUpdate.ProductID;
                const quantity = slotToUpdate.Quantity;
                console.log(`The slot that needs to be reset has ${quantity} items of product with ID: `, productID);

                if (slotToUpdate) {
                    // Update slot attributes
                    slotToUpdate.ProductID = null;
                    slotToUpdate.Quantity = 0;
                    slotToUpdate.Price = 0;
                    console.log(`Slot ${slot} in machine ${ID} has been reset.`);
                    console.log(`Adding lost quantity back to associated product (if not null)`);
                    if (productID !== null) {
                        try {
                            state.object.productInventory.find(product => product.id === productID)["Quantity"] += Number(quantity);
                        } catch {
                            console.warn("Failed to set quantity. Perhaps ID is not valid.");
                        }
                    }
                } else {
                    console.warn(`Slot ${slot} not found in machine ${ID}.`);
                }
            } else {
                console.warn(`Machine ${ID} not found.`);
            }
        },

        simSetMachineInventorySlot: (state, action) => {
            let packet = action.payload;
            let ID = Number(packet.id);
            let slot = packet.Slot;
            let productID = Number(packet.ProductID);

            console.log(`Trying to set slot ${slot} of machine ${ID} with product ${productID}`);

            // Find the machine
            let machine = state.object.machineInventory.find(item => item.id === ID);

            if (machine) {
                // Find the slot
                let slotToUpdate = machine.Inventory.find(item => item.Slot === slot);

                if (slotToUpdate) {
                    // Update slot attributes
                    slotToUpdate.ProductID = productID;
                    console.log(`Slot ${slot} in machine ${ID} has been set.`);
                } else {
                    console.warn(`Slot ${slot} not found in machine ${ID}.`);
                }
            } else {
                console.warn(`Machine ${ID} not found.`);
            }
        },

        simAddMachineInventorySlotQuantity: (state, action) => {
            let packet = action.payload;
            let ID = Number(packet.id);
            let slot = packet.Slot;
            let productID = packet.ProductID;
            let quantity = Number(packet.Quantity);
            let price = Number(packet.Price);

            console.log(`Trying to add ${quantity} to slot ${slot} of machine ${ID} with price of ${price}`);

            // Find the machine
            let machine = state.object.machineInventory.find(item => item.id === ID);

            if (machine) {
                // Find the slot
                let slotToUpdate = machine.Inventory.find(item => item.Slot === slot);

                if (slotToUpdate) {
                    // Update slot attributes
                    slotToUpdate.Quantity += quantity;
                    slotToUpdate.Price = price;
                    console.log(`Slot ${slot} in machine ${ID} has had it's quantity increased`);
                    console.log("Removing quantity from parent product with ID: ", productID);
                    state.object.productInventory.find(product => product.id === productID)["Quantity"] -= Number(quantity);
                } else {
                    console.warn(`Slot ${slot} not found in machine ${ID}.`);
                }
            } else {
                console.warn(`Machine ${ID} not found.`);
            }
        },

        simRemoveMachineInventorySlotQuantity: (state, action) => {
            let packet = action.payload;
            let ID = Number(packet.id);
            let slot = packet.Slot;
            let productID = packet.ProductID;
            let quantity = Number(packet.Quantity);

            console.log(`Trying to remove ${quantity} from slot ${slot} of machine ${ID}`);

            // Find the machine
            let machine = state.object.machineInventory.find(item => item.id === ID);

            if (machine) {
                // Find the slot
                let slotToUpdate = machine.Inventory.find(item => item.Slot === slot);

                if (slotToUpdate) {
                    // Update slot attributes
                    slotToUpdate.Quantity -= quantity;
                    console.log(`Slot ${slot} in machine ${ID} has had quantity decreased`);
                    console.log("Adding removed quantity back to corresponding product with ID", productID);
                    state.object.productInventory.find(product => product.id === productID)["Quantity"] += Number(quantity);

                } else {
                    console.warn(`Slot ${slot} not found in machine ${ID}.`);
                }
            } else {
                console.warn(`Machine ${ID} not found.`);
            }
        },


        // - Product Inventory - //
        simAddNewProductInInventory: (state, action) => {
            let template = action.payload;
            let biggestId = biggestProductInventoryID + 1;
            biggestProductInventoryID = biggestId;

            if (biggestId === null || biggestId === undefined) {
                biggestId = 0;
            }

            const newID = biggestId + 1;

            template.id = newID;
            state.object.productInventory.push(template);
        },
        simRemoveProductFromInventory: (state, action) => {
            let ID = Number(action.payload);
            //console.log(state, ID);

            state.object.productInventory = state.object.productInventory.filter(item => item.id !== ID);
            //console.log(state, ID);
        },
        simAddToProductQuantity: (state, action) => {
            let packet = action.payload;
            console.warn(packet);
            const ID = packet.id;
            const quantity = packet["Gained Quantity"];

            console.warn("MY QUANTITY IS ADD: ", quantity);
            state.object.productInventory.find(product => product.id === ID)["Quantity"] += Number(quantity);
            //console.log(state, ID);
        },
        simRemoveFromProductQuantity: (state, action) => {
            let packet = action.payload;
            console.warn(packet);
            const ID = packet.id;
            const quantity = packet["Lost Quantity"];

            console.warn("MY QUANTITY IS LOST: ", quantity);
            state.object.productInventory.find(product => product.id === ID)["Quantity"] -= Number(quantity);
            //console.log(state, ID);
        },
    }
});

export const {
    setSimulated,
    addNewMachineTemplate,
    simRemoveMachineTemplate,
    simAddNewProductTemplate,
    simRemoveProductTemplate,
    simAddNewMachineInInventory,
    simRemoveMachineFromInventory,
    simAddNewProductInInventory,
    simRemoveProductFromInventory,
    simAddToProductQuantity,
    simRemoveFromProductQuantity,
    simCreateMachineInventory,
    simResetMachineInventorySlot,
    simSetMachineInventorySlot,
    simAddMachineInventorySlotQuantity,
    simRemoveMachineInventorySlotQuantity


} = simulatedEndpointSlice.actions;

export const simulatedEndpointReducers = simulatedEndpointSlice.reducer;