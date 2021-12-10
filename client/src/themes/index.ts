import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';

const theme = () => {
  const themes = createTheme({
    palette: {
      primary: {
        main: purple[800],
      },
      secondary: {
        main: purple[200],
      },
    },
  });
  return themes;
};

export default theme;
