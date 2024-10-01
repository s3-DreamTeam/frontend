import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
    const dispatch = useDispatch();
    const isInit = useSelector((state) => state.keycloak.isInit);

    useEffect(() => {
        if (startedInit) return;
        startedInit = true;

        try {
            keycloakInstance.init({ onLoad: 'login-required' }).then(auth => {
                console.log("Im I supposed to be authed? " + auth);
            }).catch(error => {
                dispatch(setKeycloakError(error.error));
            }).finally(() => {
                dispatch(keycloakHasInit());
            });
        } catch (e) {
            console.log("error :(", e);
        }
    }, []);

    return (
        <>
            {keycloakInstance.authenticated
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

    /*
    if (isInit) {
        if (keycloakInstance.authenticated) {
            return (
                <Router>
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
            );
        } else {
            return (
                <NotLoggedInPage />
            );
        }
    }
    return (
        <KeycloakLoadingPage />
    );
    */
};

export default Snacky;

/*
import './App.css';
import * as React from 'react';
import { ThemeProvider } from "@mui/material/styles";
import GetMUIAppTheme from './theme/materialTheme';
import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Analytics from './components/pages/Analytics/analytics';
import MachineManager from './components/pages/Machine Manager/machineManager';
import StockManager from './components/pages/Stock Manager/stockManager';
import MachineEditor from './components/pages/Machine Editor/machineEditor';
import StockEditor from './components/pages/Stock Editor/stockEditor';
import Changelogs from './components/pages/Changelogs/changelogs';
import { AppRoutes } from './utils/routerRouteManager';
import NotLoggedInPage from './components/pages/Not logged in/notLoggedInPage';
import { KeycloakProvider } from './api/keycloakConfig';

function App() {

  const appTheme = GetMUIAppTheme();
  return (
    <KeycloakProvider>
      <ThemeProvider theme={appTheme}>
        <CssBaseline />
        <Router>
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
      </ThemeProvider>
    </KeycloakProvider>
  );
}

export default App;
*/