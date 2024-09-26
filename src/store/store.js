import { configureStore } from "@reduxjs/toolkit";
import { drawerStateReducers } from "./navigationDrawerSlice";
import { sideActionsMenuReducers } from "./sideActionsMenuSlice";

export default configureStore({
    reducer: {
        drawerState: drawerStateReducers,
        sideActionsMenuState: sideActionsMenuReducers
    },
});