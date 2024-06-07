// src/theme.ts
import { createTheme } from '@mui/material/styles';
import { grey, blue  } from '@mui/material/colors';

const primaryColor = '#261517';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
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
