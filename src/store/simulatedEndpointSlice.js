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
            const biggestId = Math.max(...state.object.machineTemplates.map(obj => obj.id));
            const newID = biggestId + 1;

            machineTemplate.id = newID;
            state.object.machineTemplates.push(machineTemplate);
        },
        getEntireMachineTemplate: (state, action) => {
            const id = action.payload;
            return state.object.machineTemplates.find(template => template.id === id) || null; // Return the template with matching ID or null
        },
        getSurfaceMachineTemplate: (state, action) => {
            const id = action.payload;
            const completeMachineTemplate = state.object.machineTemplates.find(template => template.id === id) || null; // Return the template with matching ID or null

            if (completeMachineTemplate === null) {
                return null;
            }

            return {
                "Manufacturer": completeMachineTemplate.Manufacturer,
                "Model": completeMachineTemplate.Model,
                "ID": completeMachineTemplate.id
            };
        },
        getMachineTemplateImage: (state, action) => {
            const id = action.payload;
            const completeMachineTemplate = state.object.machineTemplates.find(template => template.id === id) || null; // Return the template with matching ID or null

            return {
                "Image": completeMachineTemplate.Image
            };
        }
    }
});

export const { addNewMachineTemplate, getEntireMachineTemplate, getSurfaceMachineTemplate, getMachineTemplateImage } = simulatedEndpointSlice.actions;

export const simulatedEndpointReducers = simulatedEndpointSlice.reducer;