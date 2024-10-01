import { createSlice } from "@reduxjs/toolkit";

export const keycloakSlice = createSlice({
    name: 'keycloak',
    initialState: {
        startedInit: false,
        isInit: false,
        error: null,
    },
    reducers: {
        keycloakStartedInit: (state) => {
            state.startedInit = true;
        },
        keycloakHasInit: (state) => {
            state.isInit = true;
        },
        setKeycloakError: (state, action) => {
            state.error = action.payload;
        },
    }
});

export const { keycloakHasInit, setKeycloakError, keycloakStartedInit } = keycloakSlice.actions;
export const keycloakReducers = keycloakSlice.reducer;