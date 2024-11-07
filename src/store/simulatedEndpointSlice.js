import { createSlice } from "@reduxjs/toolkit";

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
    simRemoveProductFromInventory
} = simulatedEndpointSlice.actions;

export const simulatedEndpointReducers = simulatedEndpointSlice.reducer;