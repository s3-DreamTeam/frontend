import { createSlice } from "@reduxjs/toolkit";

/**
 * Stores the fetched Product templates from the backend.
 */
export const productTemplateSlice = createSlice({
    name: 'productTemplateSlice',
    initialState: {
        productTemplates: {},
    },
    reducers: {
        /**
         * Add an empty array at the specified ID.
         * @param {*} state 
         * @param {*} action 
         */
        addNewProductTemplateID: (state, action) => {
            const ID = action.payload;
            state.productTemplates[ID] = {};
        },
        /**
         * Remove entries that matches the given ID
         * The template was deleted.
         * @param {*} state 
         * @param {*} action 
         */
        removeProductTemplateByID: (state, action) => {
            const ID = action.payload;
            try {
                delete state.productTemplates[ID];
            } catch {
                console.warn("PRODUCT TEMPLATE STORE: INVALID ID", ID);
            }
        },
        setProductTemplateToLoading: (state, action) => {
            const ID = action.payload;
            try {
                state.productTemplates[ID].isLoading = true;
            } catch {
                console.warn("PRODUCT TEMPLATE STORE: INVALID ID", ID);
            }
        },
        setProductTemplateToLoaded: (state, action) => {
            const ID = action.payload;
            try {
                state.productTemplates[ID].isLoading = false;
            } catch {
                console.warn("PRODUCT TEMPLATE STORE: INVALID ID", ID);
            }
        },
        setProductTemplateImageToLoading: (state, action) => {
            const ID = action.payload;
            try {
                state.productTemplates[ID].imageIsLoading = true;
            } catch {
                console.warn("PRODUCT TEMPLATE STORE: INVALID ID", ID);
            }
        },
        setProductTemplateImageToLoaded: (state, action) => {
            const ID = action.payload;
            try {
                state.productTemplates[ID].imageIsLoading = false;
            } catch {
                console.warn("PRODUCT TEMPLATE STORE: INVALID ID", ID);
            }
        },
        setProductTemplateError: (state, action) => {
            const data = action.payload;
            const ID = data.id;
            const error = data.error;
            try {
                state.productTemplates[ID].errors = error;
            } catch {
                console.warn("PRODUCT TEMPLATE STORE: INVALID ID", ID);
            }
        },
        resetProductTemplateError: (state, action) => {
            const ID = action.payload;
            try {
                state.productTemplates[ID].errors = null;
            } catch {
                console.warn("PRODUCT TEMPLATE STORE: INVALID ID", ID);
            }
        },
        /**
         * Pass it any small object, and it'll overwrite / add the attributes to the correcsponding object of that ID.
         * {} + {image: image} = {image: image}
         * {a:1, b:2, c:3} + {d:1, b:3} = {a:1, b:3, c:3, d:1}
         * @param {*} state 
         * @param {*} action 
         */
        setProductTemplateData: (state, action) => {
            const ID = action.payload.id;
            const data = action.payload.data;

            try {
                const updatedTemplate = Object.assign(state.productTemplates[ID], data);
                state.productTemplates[ID] = updatedTemplate;
            } catch {
                console.warn("PRODUCT TEMPLATE STORE: INVALID ID. I COULD NOT SET THE DATA TO WHAT YOU WANTED. SORRY.", ID);
            }
        }
    }
});

export const {
    addNewProductTemplateID,
    removeProductTemplateByID,
    setProductTemplateToLoading,
    setProductTemplateToLoaded,
    setProductTemplateData,
    setProductTemplateImageToLoading,
    setProductTemplateImageToLoaded,
    setProductTemplateError,
    resetProductTemplateError
} = productTemplateSlice.actions;

export const productTemplateReducers = productTemplateSlice.reducer;