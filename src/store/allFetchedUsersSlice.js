import { createSlice } from "@reduxjs/toolkit";

export const allFetchedUsersSlice = createSlice({
    name: 'allFetchedUsers',
    initialState: {
        value: [],
    },
    reducers: {
        setAllFetchedUsers: (state, action) => {
            state.value = action.payload;
        },
        clearAllFetchedUsers: (state) => {
            state.value = [];
        }
    }
});

export const { setAllFetchedUsers, clearAllFetchedUsers } = allFetchedUsersSlice.actions;
export const allFetchedUsersReducers = allFetchedUsersSlice.reducer;