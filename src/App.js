import React, { useEffect, useState } from 'react';
import Keycloak from 'keycloak-js';
import { useSelector } from 'react-redux';
import { setAuthError, setUserToken } from './store/authenticatedSlice';

const keycloakInstance = new Keycloak({
  url: 'http://localhost:8180/',
  realm: 'usager',
  clientId: 'frontend',
  onLoad: 'login-required'
});

keycloakInstance.init({ onLoad: 'login-required' }).then(auth => {
  console.log("4");
  setAuthError(keycloakInstance);
  console.log("5");
  setUserToken(auth);
  console.log("5");
}).catch(error => {
  console.log("6");
  console.error("Failed to initialize Keycloak", error);
});

const App = () => {
  const keycloak = useSelector((state) => state.authenticated.token);
  const authenticated = useSelector((state) => state.authenticated.error);

  console.log("1");

  useEffect(() => {
    if (keycloak) return;
    console.log("3");

  }, []);

  const logout = () => {
    console.log("7");
    keycloak.logout();
  };

  if (keycloak) {
    console.log("8");
    if (authenticated) {
      console.log("9");
      return (
        <div>
          <h1>Welcome!</h1>
          <p>Username: {keycloak.tokenParsed?.preferred_username}</p>
          <button onClick={logout}>Logout</button>
        </div>
      );
    } else {
      console.log("10");
      return (
        <div>
          <h1>Not Authenticated</h1>
        </div>
      );
    }
  }
  console.log("11");
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