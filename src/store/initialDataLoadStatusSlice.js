import { createSlice } from "@reduxjs/toolkit";

/**
 * Used to know if we have loaded the user's data at least once in the past.
 */
export const initialDataLoadStatusSlice = createSlice({
    name: 'initialDataLoadStatus',
    initialState: {
        machineTemplatesLoaded: false,
        productTemplatesLoaded: false,
        machineInventoryLoaded: false,
        productInventoryLoaded: false
    },
    reducers: {
        machineTemplatesLoaded: (state) => {
            state.machineTemplatesLoaded = true;
        },
        productTemplatesLoaded: (state) => {
            state.productTemplatesLoaded = true;
        },
        machineInventoryLoaded: (state) => {
            state.machineInventoryLoaded = true;
        },
        productInventoryLoaded: (state) => {
            state.productInventoryLoaded = true;
        },
    }
});

export const { machineTemplatesLoaded, productTemplatesLoaded, machineInventoryLoaded, productInventoryLoaded } = initialDataLoadStatusSlice.actions;
export const initialDataLoadStatusReducers = initialDataLoadStatusSlice.reducer;