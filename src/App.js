import './App.css';
import { ThemeProvider } from "@mui/material/styles";
import GetMUIAppTheme from './theme/materialTheme';
import PageLayout from './components/Page/pageLayout';
import { CssBaseline } from '@mui/material';

function App() {

  const appTheme = GetMUIAppTheme();

  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
        <PageLayout title={"Created Machines"}></PageLayout>
    </ThemeProvider>
  );
}

export default App;
