import { configureStore } from "@reduxjs/toolkit";
import { drawerStateReducers } from "./navigationDrawerSlice";
import { sideActionsMenuReducers } from "./sideActionsMenuSlice";
import { allFetchedUsersReducers } from "./allFetchedUsersSlice";
import { keycloakReducers } from "./keycloakSlice";
import { simulatedEndpointReducers } from "./simulatedEndpointSlice";
import { machineTemplateReducers } from "./machineTemplateSlice";
import { initialDataLoadStatusReducers } from "./initialDataLoadStatusSlice";
import { productTemplateReducers } from "./productTemplateSlice";

const store = configureStore({
    reducer: {
        drawerState: drawerStateReducers,
        sideActionsMenuState: sideActionsMenuReducers,
        allFetchedUsers: allFetchedUsersReducers,
        keycloak: keycloakReducers,
        simulatedEndpointSlice: simulatedEndpointReducers,
        machineTemplateSlice: machineTemplateReducers,
        productTemplateSlice: productTemplateReducers,
        initialDataLoadStatus: initialDataLoadStatusReducers,
    },
});

export default store;