import { createSlice } from "@reduxjs/toolkit";

/**
 * Stores the fetched machine inventory from the backend.
 */
export const machineInventorySlice = createSlice({
    name: 'machineInventorySlice',
    initialState: {
        machineInventory: {},
    },
    reducers: {
        /**
         * Add an empty array at the specified ID.
         * @param {*} state 
         * @param {*} action 
         */
        addNewMachineInventoryID: (state, action) => {
            const ID = action.payload;
            state.machineInventory[ID] = {};
        },
        /**
         * Remove entries that matches the given ID
         * The Inventory was deleted.
         * @param {*} state 
         * @param {*} action 
         */
        removeMachineInventoryByID: (state, action) => {
            const ID = action.payload;
            delete state.machineInventory[ID];
        },
        setMachineInventoryToLoading: (state, action) => {
            const ID = action.payload;
            state.machineInventory[ID].isLoading = true;
        },
        setMachineInventoryToLoaded: (state, action) => {
            const ID = action.payload;
            state.machineInventory[ID].isLoading = false;
        },
        setMachineInventoryImageToLoading: (state, action) => {
            const ID = action.payload;
            state.machineInventory[ID].imageIsLoading = true;
        },
        setMachineInventoryImageToLoaded: (state, action) => {
            const ID = action.payload;
            state.machineInventory[ID].imageIsLoading = false;
        },
        setMachineInventoryError: (state, action) => {
            const data = action.payload;
            const ID = data.id;
            const error = data.error;
            state.machineInventory[ID].errors = error;
        },
        resetMachineInventoryError: (state, action) => {
            const ID = action.payload;
            state.machineInventory[ID].errors = null;
        },
        /**
         * Pass it any small object, and it'll overwrite / add the attributes to the correcsponding object of that ID.
         * {} + {image: image} = {image: image}
         * {a:1, b:2, c:3} + {d:1, b:3} = {a:1, b:3, c:3, d:1}
         * @param {*} state 
         * @param {*} action 
         */
        setMachineInventoryData: (state, action) => {
            const ID = action.payload.id;
            const data = action.payload.data;

            const updatedTemplate = Object.assign(state.machineInventory[ID], data);
            state.machineInventory[ID] = updatedTemplate;
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
} = machineInventorySlice.actions;

export const machineInventoryReducers = machineInventorySlice.reducer;