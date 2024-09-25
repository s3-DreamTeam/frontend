import { configureStore } from "@reduxjs/toolkit";
import { drawerStateReducers } from "./navigationDrawerSlice";

export default configureStore({
    reducer: {
        drawerState: drawerStateReducers,
    },
});