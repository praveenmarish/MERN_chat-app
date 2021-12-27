import { ThemeProvider } from '@mui/material/styles';
import { Provider } from 'api/provider';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary'

// routing
import Routes from 'routes';

// defaultTheme
import themes from 'themes';
import ErrorComponent from 'components/ErrorComponent';

// ==============================|| APP ||============================== //

const App = () => {

  return (
    <Provider>
      <ThemeProvider theme={themes()}>
        <BrowserRouter>
          <ErrorBoundary FallbackComponent={ErrorComponent}>
            <Routes />
          </ErrorBoundary>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
};

export default App;