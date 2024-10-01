import { createSlice } from "@reduxjs/toolkit";

export const authenticatedSlice = createSlice({
    name: 'authenticated',
    initialState: {
        token: null,
        error: null,
    },
    reducers: {
        setUserToken: (state, action) => {
            state.token = action.payload;
        },
        logoutUser: (state) => {
            state.token = null;
        },
        setAuthError: (state, action) => {
            state.error = action.payload;
        },
        resetAuthError: (state) => {
            state.error = null;
        }
    }
});

export const { setUserToken, logoutUser, setAuthError, resetAuthError } = authenticatedSlice.actions;
export const authenticatedReducers = authenticatedSlice.reducer;