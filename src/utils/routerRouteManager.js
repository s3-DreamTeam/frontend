import { useLocation } from "react-router-dom";

/**
 * # AppRoutes
 * Enum/Struct like objects that contains the names
 * of all the paths to pages that the app has.
 * Never type them by hands, always use this struct
 * when refering or navigating somewhere.
 */
export const AppRoutes = {
    Home: "/",
    Analytics: "/",
    NotLoggedIn: "/AuthentificationError",
    MachineManager: "/MachineManager",
    StockManager: "/StockManager",
    MachineEditor: "/MachineEditor",
    StockEditor: "/StockEditor",
    Changelogs: "/Changelogs"
};

/**
 * # PathIsCurrentPath
 * Util function allowing you to check if a given path is the current one being shown to the user in their browser.
 * @param {*} path : Path from **AppRoutes**
 * @returns : Boolean indicating if the path is the current one
 */
export function PathIsCurrentPath(path) {
    const location = useLocation();
    return location.pathname === path;
};