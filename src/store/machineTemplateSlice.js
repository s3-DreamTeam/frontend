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
            try {
                delete state.machineTemplates[ID];
            } catch {
                console.warn("MACHINE TEMPLATE SLICE: DELETE ERROR: INVALID ID");
            }
        },
        setMachineTemplateToLoading: (state, action) => {
            const ID = action.payload;
            try {
                state.machineTemplates[ID].isLoading = true;
            } catch {
                console.warn("MACHINE TEMPLATE SLICE: TO LOADING ERROR: INVALID ID");
            }
        },
        setMachineTemplateToLoaded: (state, action) => {
            const ID = action.payload;
            try {
                state.machineTemplates[ID].isLoading = false;
            } catch {
                console.warn("MACHINE TEMPLATE SLICE: INVALID ID");
            }
        },
        setMachineTemplateImageToLoading: (state, action) => {
            const ID = action.payload;
            try {
                state.machineTemplates[ID].imageIsLoading = true;
            } catch {
                console.warn("MACHINE TEMPLATE SLICE: INVALID ID");
            }
        },
        setMachineTemplateImageToLoaded: (state, action) => {
            const ID = action.payload;
            try {
                state.machineTemplates[ID].imageIsLoading = false;
            } catch {
                console.warn("MACHINE TEMPLATE SLICE: INVALID ID");
            }
        },
        setMachineTemplateError: (state, action) => {
            const data = action.payload;
            const ID = data.id;
            const error = data.error;
            try {
                state.machineTemplates[ID].errors = error;
            } catch {
                console.warn("MACHINE TEMPLATE SLICE: INVALID ID");
            }
        },
        resetMachineTemplateError: (state, action) => {
            const ID = action.payload;
            try {
                state.machineTemplates[ID].errors = null;
            } catch {
                console.warn("MACHINE TEMPLATE SLICE: INVALID ID");
            }
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
            try {
                state.machineTemplates[ID] = updatedTemplate;
            } catch {
                console.warn("MACHINE TEMPLATE SLICE: SET DATA: INVALID ID");
            }
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