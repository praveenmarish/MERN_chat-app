import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';

const theme = () => {
  const themes = createTheme({
    palette: {
      primary: {
        main: purple[500],
      },
      secondary: {
        main: green[500],
      },
    },
  });
  return themes;
};

export default theme;
