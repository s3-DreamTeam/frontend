import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { keycloakInstance } from "../api/keycloak";
import { keycloakHasInit, setKeycloakError } from "../store/keycloakSlice";
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Analytics from "./pages/Analytics/analytics";
import MachineManager from "./pages/Machine Manager/machineManager";
import { AppRoutes } from "../utils/routerRouteManager";
import StockManager from "./pages/Stock Manager/stockManager";
import MachineEditor from "./pages/Machine Editor/machineEditor";
import StockEditor from "./pages/Stock Editor/stockEditor";
import Changelogs from "./pages/Changelogs/changelogs";
import NotLoggedInPage from "./pages/Keycloak Pages/notLoggedInPage";
import KeycloakPages from "./keycloakPages";

let startedInit = false;
const Snacky = () => {
    const [updateAfterLogging, setUpdate] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        if (startedInit) return;
        startedInit = true;

        try {
            keycloakInstance().init({ onLoad: 'login-required' }).then(auth => {
            }).catch(error => {
                dispatch(setKeycloakError(error.error));
            }).finally(() => {
                dispatch(keycloakHasInit());
                setUpdate(true);
            });
        } catch (e) {
            console.log("error");
            dispatch(setKeycloakError(e.message));
        }
    }, [updateAfterLogging]);

    return (
        <>
            {keycloakInstance().authenticated || process.env.REACT_APP_SHOW_PAGES_EVEN_WITH_NO_AUTH === 'yes'
                ? <Router>
                    <Routes>
                        <Route
                            path={AppRoutes.Analytics}
                            element={<Analytics />}
                        />
                        <Route
                            path={AppRoutes.MachineManager}
                            element={<MachineManager />}
                        />
                        <Route
                            path={AppRoutes.StockManager}
                            element={<StockManager />}
                        />
                        <Route
                            path={AppRoutes.MachineEditor}
                            element={<MachineEditor />}
                        />
                        <Route
                            path={AppRoutes.StockEditor}
                            element={<StockEditor />}
                        />
                        <Route
                            path={AppRoutes.Changelogs}
                            element={<Changelogs />}
                        />
                        <Route
                            path={AppRoutes.NotLoggedIn}
                            element={<NotLoggedInPage />}
                        />
                        <Route
                            path='*'
                            element={<Navigate to={AppRoutes.Home} />}
                        />
                    </Routes>
                </Router>
                : <KeycloakPages />
            }
        </>
    );
};

export default Snacky;