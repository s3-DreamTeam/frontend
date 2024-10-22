import { createSlice } from "@reduxjs/toolkit";

export const simulatedEndpointSlice = createSlice({
    name: 'simulatedEndpointSlice',
    initialState: {
        object: {
            machineTemplates: [],
            productTemplates: [],
            machineInventory: [],
            productInventory: []
        },
    },
    reducers: {
        // - Machine templates - //
        addNewMachineTemplate: (state, action) => {
            let machineTemplate = action.payload;
            let biggestId = Math.max(...state.object.machineTemplates.map(obj => obj.id), 0);

            if (biggestId === null || biggestId === undefined) {
                biggestId = 0;
            }

            const newID = biggestId + 1;

            machineTemplate.id = newID;
            state.object.machineTemplates.push(machineTemplate);
        },
        getEntireMachineTemplate: (state, action) => {
            const id = action.payload;
            return state.object.machineTemplates.find(template => template.id === id) || null; // Return the template with matching ID or null
        },
        getMachineTemplateImage: (state, action) => {
            const id = action.payload;
            const completeMachineTemplate = state.object.machineTemplates.find(template => template.id === id) || null; // Return the template with matching ID or null

            return {
                "Image": completeMachineTemplate.Image
            };
        },
    }
});

export const { addNewMachineTemplate, getEntireMachineTemplate, getMachineTemplateImage } = simulatedEndpointSlice.actions;

export const simulatedEndpointReducers = simulatedEndpointSlice.reducer;