import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { setAuthError, setUserToken } from './store/authenticatedSlice';
import './App.css';
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
import { keycloakInstance } from './api/keycloak';

const App = () => {
  const token = useSelector((state) => state.authenticated.token);
  const [auth, setAuth] = useState(false);

  console.log("YO CHARLE, HI THERE");

  useEffect(() => {

    if (token) return;

    try {
      keycloakInstance.init({ onLoad: 'login-required' }).then(auth => {
        setAuth(true);
        setAuthError(keycloakInstance);
        console.log("Im I supposed to be authed? " + auth);
        setUserToken(auth);
      }).catch(error => {
        console.error("Failed to initialize Keycloak", error);
      });
    } catch {
      console.log("error :(");
    }

    console.log(keycloakInstance.authenticated);
    setUserToken(keycloakInstance.authenticated);
  }, [keycloakInstance, token]);

  const appTheme = GetMUIAppTheme();

  if (true) {
    if (true) {
      return (
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
      );
    } else {
      return (
        <ThemeProvider theme={appTheme}>
          <CssBaseline />
          <NotLoggedInPage />
        </ThemeProvider>
      );
    }
  }
  return <div>Loading...</div>;
};

export default App;

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