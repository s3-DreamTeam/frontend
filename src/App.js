import React, { useEffect, useState } from 'react';
import Keycloak from 'keycloak-js';

const App = () => {
  const [keycloak, setKeycloak] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const keycloakInstance = new Keycloak({
      url: 'http://localhost:8180/',
      realm: 'usager',
      clientId: 'frontend',
    });

    keycloakInstance.init({
      onLoad: 'check-sso',
      checkLoginIframe: false,
      responseMode: 'query',
    })
      .then(auth => {
        setKeycloak(keycloakInstance);
        setAuthenticated(auth);

        // Token refresh
        const refreshInterval = setInterval(() => {
          keycloakInstance.updateToken(70).then((refreshed) => {
            if (refreshed) {
              console.log('Token refreshed');
            }
          }).catch(err => {
            console.error('Failed to refresh token', err);
          });
        }, 60000); // Refresh token every minute

        return () => clearInterval(refreshInterval); // Cleanup on unmount
      })
      .catch(err => {
        console.error("Failed to initialize Keycloak", err);
      });
  }, []);

  const logout = () => {
    keycloak.logout();
  };

  if (keycloak) {
    console.log('Authenticated:', authenticated);
    console.log('Keycloak:', keycloak);

    if (authenticated) {
      return (
        <div>
          <h1>Welcome to the React Keycloak Test!</h1>
          <p>User: {keycloak.tokenParsed?.preferred_username}</p>
          <button onClick={logout}>Logout</button>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Unable to authenticate!</h1>
        </div>
      );
    }
  }

  return (
    <div>
      <h1>Loading...</h1>
    </div>
  );
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