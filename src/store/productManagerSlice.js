import { createSlice } from "@reduxjs/toolkit";

export const productManagerSlice = createSlice({
    name: 'productManager',
    initialState: {
        productManagerId: null
    },
    reducers: {
        setProductManagerPageID: (state, action) => {
            const ID = action.payload;
            state.productManagerId = ID;
        },
    }
});

export const { setProductManagerPageID } = productManagerSlice.actions;
export const productManagerReducers = productManagerSlice.reducer;