import { createSlice } from "@reduxjs/toolkit";

export const drawerStateSlice = createSlice({
    name: 'drawerState',
    initialState: {
        value: false
    },
    reducers: {
        openNavigationDrawer: (state) => {
            state.value = true;
        },
        closeNavigationDrawer: (state) => {
            state.value = false;
        }
    }
});

export const { openNavigationDrawer, closeNavigationDrawer } = drawerStateSlice.actions;

export const drawerStateReducers = drawerStateSlice.reducer;