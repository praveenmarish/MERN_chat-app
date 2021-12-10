import { ThemeProvider } from '@mui/material/styles';

// routing
import Routes from 'routes';

// defaultTheme
import themes from 'themes';

// ==============================|| APP ||============================== //

const App = () => {

  return (
    <ThemeProvider theme={themes()}>
      <Routes />
    </ThemeProvider>
  );
};

export default App;