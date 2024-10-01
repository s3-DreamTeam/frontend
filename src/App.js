import React, { Component } from 'react';
import Keycloak from "keycloak-js";
import './App.css';
import { Button } from '@mui/material';

const Config = {
  url: 'http://localhost:8088/auth',
  realm: 'web-clients',
  clientId: 'react-client',
  onLoad: 'login-required'
};

class KeycloakLogin extends Component {

  constructor(props) {
    super(props);
    this.state = { keycloak: null, authenticated: false };
  }

  componentDidMount() {
    const keycloak = Keycloak(Config);
    keycloak.init({ onLoad: "login-required", promiseType: 'native' }).then(authenticated => {
      this.setState({ keycloak: keycloak, authenticated: authenticated });
    });
  }

  render() {
    if (this.state.keycloak && this.state.authenticated) {
      return <Button>Woah</Button>;
    } else {
      return <div>Ready to initialize</div>;
    }
  }

}

function App() {
  return (
    <div className="App">
      <section className="App-header">
        <KeycloakLogin />
      </section>
    </div>
  );

}

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