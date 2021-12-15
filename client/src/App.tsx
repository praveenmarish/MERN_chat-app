import { ThemeProvider } from '@mui/material/styles';
import { Provider } from 'api/provider';
import { BrowserRouter } from 'react-router-dom';

// routing
import Routes from 'routes';

// defaultTheme
import themes from 'themes';

// ==============================|| APP ||============================== //

const App = () => {

  return (
    <Provider>
      <ThemeProvider theme={themes()}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
};

export default App;