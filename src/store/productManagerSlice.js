import { createSlice } from "@reduxjs/toolkit";

export const productManagerSlice = createSlice({
    name: 'productManager',
    initialState: {
        productManagerId: null,
        productManagerGoBackEndpoint: ""
    },
    reducers: {
        setProductManagerPageID: (state, action) => {
            const ID = action.payload;
            state.productManagerId = ID;
            console.log("ID IS IN STORE", ID);
        },
        setProductManagerPageGoBackEndpoint: (state, action) => {
            const endpoint = action.payload;
            state.productManagerGoBackEndpoint = endpoint;
            console.log("ENDPOINT IS IN STORE", endpoint);
        },
    }
});

export const { setProductManagerPageID, setProductManagerPageGoBackEndpoint } = productManagerSlice.actions;
export const productManagerReducers = productManagerSlice.reducer;