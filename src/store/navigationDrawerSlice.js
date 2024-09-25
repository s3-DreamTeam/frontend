import { createSlice } from "@reduxjs/toolkit";

export const drawerStateSlice = createSlice({
    name: 'drawerState',
    initialState: {
        value: false
    },
    reducers: {
        open: (state) => {
            state.value = true;
        },
        close: (state) => {
            state.value = false;
        }
    }
});

export const { open, close } = drawerStateSlice.actions;

export const drawerStateReducers = drawerStateSlice.reducer;;