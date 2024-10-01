import { configureStore } from "@reduxjs/toolkit";
import { drawerStateReducers } from "./navigationDrawerSlice";
import { sideActionsMenuReducers } from "./sideActionsMenuSlice";
import { allFetchedUsersReducers } from "./allFetchedUsersSlice";
import { authenticatedReducers } from "./authenticatedSlice";

export default configureStore({
    reducer: {
        drawerState: drawerStateReducers,
        sideActionsMenuState: sideActionsMenuReducers,
        allFetchedUsers: allFetchedUsersReducers,
        authenticated: authenticatedReducers
    },
});