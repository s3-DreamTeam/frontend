import { createSlice } from "@reduxjs/toolkit";

export const machineManagerSlice = createSlice({
    name: 'machineManager',
    initialState: {
        machineManagerId: null
    },
    reducers: {
        setMachineManagerPageID: (state, action) => {
            const ID = action.payload;
            state.machineManagerId = ID;
            console.log("Machine ID IS IN STORE: ", ID);
        },
    }
});

export const { setMachineManagerPageID } = machineManagerSlice.actions;
export const machineManagerReducers = machineManagerSlice.reducer;