import React from 'react';
import './App.css';
import Snacky from './components/snacky';
import { CssBaseline, ThemeProvider } from '@mui/material';
import GetMUIAppTheme from './theme/materialTheme';

const App = () => {
  const appTheme = GetMUIAppTheme();
  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <Snacky />
    </ThemeProvider>
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