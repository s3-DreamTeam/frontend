import { createSlice } from "@reduxjs/toolkit";

/**
 * Stores the fetched machine templates from the backend.
 */
export const machineTemplateSlice = createSlice({
    name: 'machineTemplateSlice',
    initialState: {
        machineTemplates: {},
    },
    reducers: {
        /**
         * Add an empty array at the specified ID.
         * @param {*} state 
         * @param {*} action 
         */
        addNewMachineTemplateID: (state, action) => {
            const ID = action.payload;
            state.machineTemplates[ID] = {};
        },
        /**
         * Remove entries that matches the given ID
         * The template was deleted.
         * @param {*} state 
         * @param {*} action 
         */
        removeMachineTemplateByID: (state, action) => {
            const ID = action.payload;
            delete state.machineTemplates[ID];
        },
        setMachineTemplateToLoading: (state, action) => {
            const ID = action.payload;
            state.machineTemplates[ID].isLoading = true;
        },
        setMachineTemplateToLoaded: (state, action) => {
            const ID = action.payload;
            state.machineTemplates[ID].isLoading = false;
        },
        setMachineTemplateImageToLoading: (state, action) => {
            const ID = action.payload;
            state.machineTemplates[ID].imageIsLoading = true;
        },
        setMachineTemplateImageToLoaded: (state, action) => {
            const ID = action.payload;
            state.machineTemplates[ID].imageIsLoading = false;
        },
        setMachineTemplateError: (state, action) => {
            const data = action.payload;
            const ID = data.id;
            const error = data.error;
            state.machineTemplates[ID].errors = error;
        },
        resetMachineTemplateError: (state, action) => {
            const ID = action.payload;
            state.machineTemplates[ID].errors = null;
        },
        /**
         * Pass it any small object, and it'll overwrite / add the attributes to the correcsponding object of that ID.
         * {} + {image: image} = {image: image}
         * {a:1, b:2, c:3} + {d:1, b:3} = {a:1, b:3, c:3, d:1}
         * @param {*} state 
         * @param {*} action 
         */
        setMachineTemplateData: (state, action) => {
            const ID = action.payload.id;
            const data = action.payload.data;

            const updatedTemplate = Object.assign(state.machineTemplates[ID], data);
            state.machineTemplates[ID] = updatedTemplate;
        }
    }
});

export const {
    addNewMachineTemplateID,
    removeMachineTemplateByID,
    setMachineTemplateToLoading,
    setMachineTemplateToLoaded,
    setMachineTemplateData,
    setMachineTemplateImageToLoading,
    setMachineTemplateImageToLoaded,
    setMachineTemplateError,
    resetMachineTemplateError
} = machineTemplateSlice.actions;

export const machineTemplateReducers = machineTemplateSlice.reducer;