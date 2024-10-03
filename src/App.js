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