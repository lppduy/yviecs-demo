// src/theme.ts
import { createTheme } from '@mui/material/styles';
import { grey, blue,green } from '@mui/material/colors';

const primaryColor = '#00796b';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: grey[100],
    },
    primary: {
      main: primaryColor,
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: grey[900],
    },
    primary: {
      main: blue[700],
    },
  },
});

export { lightTheme, darkTheme };
