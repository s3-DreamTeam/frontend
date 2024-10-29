import { createSlice } from "@reduxjs/toolkit";

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
            let biggestId = Math.max(...state.object.machineTemplates.map(obj => obj.id), 0);

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
            let biggestId = Math.max(...state.object.productTemplates.map(obj => obj.id), 0);

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
    }
});

export const { setSimulated, addNewMachineTemplate, simRemoveMachineTemplate, simAddNewProductTemplate, simRemoveProductTemplate } = simulatedEndpointSlice.actions;

export const simulatedEndpointReducers = simulatedEndpointSlice.reducer;