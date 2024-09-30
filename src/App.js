import './App.css';
import * as React from 'react';
import { ThemeProvider } from "@mui/material/styles";
import GetMUIAppTheme from './theme/materialTheme';
import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Analytics from './components/pages/analytics';
import MachineManager from './components/pages/Machine Manager/machineManager';
import StockManager from './components/pages/stockManager';
import MachineEditor from './components/pages/machineEditor';
import StockEditor from './components/pages/stockEditor';
import Changelogs from './components/pages/changelogs';
import { AppRoutes } from './utils/routerRouteManager';

function App() {

  const appTheme = GetMUIAppTheme();

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
            path='*'
            element={<Navigate to={AppRoutes.Home} />}
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
