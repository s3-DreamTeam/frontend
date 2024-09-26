import { createSlice } from "@reduxjs/toolkit";

export const sideActionsMenuSlice = createSlice({
    name: 'sideActionsMenu',
    initialState: {
        value: false,
        animationState: false,
    },
    reducers: {
        showSideActionsMenu: (state) => {
            state.value = true;
        },
        hideSideActionsMenu: (state) => {
            state.value = false;
        },
        animationFinishedHidden: (state) => {
            state.animationState = true;
        },
        animationFinishedShown: (state) => {
            state.animationState = false;
        }
    }
});

export const { showSideActionsMenu, hideSideActionsMenu, animationFinishedHidden, animationFinishedShown } = sideActionsMenuSlice.actions;

export const sideActionsMenuReducers = sideActionsMenuSlice.reducer;