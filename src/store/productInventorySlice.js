import { createSlice } from "@reduxjs/toolkit";

/**
 * Stores the fetched Product templates from the backend.
 */
export const productInventorySlice = createSlice({
    name: 'productInventorySlice',
    initialState: {
        productInventory: {},
    },
    reducers: {
        /**
         * Add an empty array at the specified ID.
         * @param {*} state 
         * @param {*} action 
         */
        addNewProductInventoryID: (state, action) => {
            const ID = action.payload;
            state.productInventory[ID] = {};
        },
        /**
         * Remove entries that matches the given ID
         * The template was deleted.
         * @param {*} state 
         * @param {*} action 
         */
        removeProductInventoryByID: (state, action) => {
            const ID = action.payload;
            delete state.productInventory[ID];
        },
        setProductInventoryToLoading: (state, action) => {
            const ID = action.payload;
            state.productInventory[ID].isLoading = true;
        },
        setProductInventoryToLoaded: (state, action) => {
            const ID = action.payload;
            state.productInventory[ID].isLoading = false;
        },
        setProductInventoryImageToLoading: (state, action) => {
            const ID = action.payload;
            state.productInventory[ID].imageIsLoading = true;
        },
        setProductInventoryImageToLoaded: (state, action) => {
            const ID = action.payload;
            state.productInventory[ID].imageIsLoading = false;
        },
        setProductInventoryError: (state, action) => {
            const data = action.payload;
            const ID = data.id;
            const error = data.error;
            state.productInventory[ID].errors = error;
        },
        resetProductInventoryError: (state, action) => {
            const ID = action.payload;
            state.productInventory[ID].errors = null;
        },
        /**
         * Pass it any small object, and it'll overwrite / add the attributes to the correcsponding object of that ID.
         * {} + {image: image} = {image: image}
         * {a:1, b:2, c:3} + {d:1, b:3} = {a:1, b:3, c:3, d:1}
         * @param {*} state 
         * @param {*} action 
         */
        setProductInventoryData: (state, action) => {
            const ID = action.payload.id;
            const data = action.payload.data;

            const updatedInventory = Object.assign(state.productInventory[ID], data);
            state.productInventory[ID] = updatedInventory;
        }
    }
});

export const {
    addNewProductInventoryID,
    removeProductInventoryByID,
    setProductInventoryToLoading,
    setProductInventoryToLoaded,
    setProductInventoryData,
    setProductInventoryImageToLoading,
    setProductInventoryImageToLoaded,
    setProductInventoryError,
    resetProductInventoryError
} = productInventorySlice.actions;

export const productInventoryReducers = productInventorySlice.reducer;