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
            try {
                state.productInventory[ID] = {};
            } catch {
                console.warn("PRODUCT INVENTORY STORE: INVALID ID");
            }
        },
        /**
         * Remove entries that matches the given ID
         * The template was deleted.
         * @param {*} state 
         * @param {*} action 
         */
        removeProductInventoryByID: (state, action) => {
            const ID = action.payload;
            try {
                delete state.productInventory[ID];
            } catch {
                console.warn("PRODUCT INVENTORY STORE: INVALID ID");
            }
        },
        setProductInventoryToLoading: (state, action) => {
            const ID = action.payload;
            try {
                state.productInventory[ID].isLoading = true;
            } catch {
                console.warn("PRODUCT INVENTORY STORE: INVALID ID");
            }
        },
        setProductInventoryToLoaded: (state, action) => {
            const ID = action.payload;
            try {
                state.productInventory[ID].isLoading = false;
            } catch {
                console.warn("PRODUCT INVENTORY STORE: INVALID ID");
            }
        },
        setProductInventoryImageToLoading: (state, action) => {
            const ID = action.payload;
            try {
                state.productInventory[ID].imageIsLoading = true;
            } catch {
                console.warn("PRODUCT INVENTORY STORE: INVALID ID");
            }
        },
        setProductInventoryImageToLoaded: (state, action) => {
            const ID = action.payload;
            try {
                state.productInventory[ID].imageIsLoading = false;
            } catch {
                console.warn("PRODUCT INVENTORY STORE: INVALID ID");
            }
        },
        setProductInventoryError: (state, action) => {
            const data = action.payload;
            const ID = data.id;
            const error = data.error;
            try {
                state.productInventory[ID].errors = error;
            } catch {
                console.warn("PRODUCT INVENTORY STORE: INVALID ID");
            }
        },
        resetProductInventoryError: (state, action) => {
            const ID = action.payload;
            try {
                state.productInventory[ID].errors = null;
            } catch {
                console.warn("PRODUCT INVENTORY STORE: INVALID ID");
            }
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

            try {
                const updatedInventory = Object.assign(state.productInventory[ID], data);
                state.productInventory[ID] = updatedInventory;
            } catch {
                console.warn("PRODUCT INVENTORY STORE: INVALID ID");
            }
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