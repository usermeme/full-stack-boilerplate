import { createTheme, ThemeOptions } from "@mui/material";

const globalTheme = createTheme({});

export const lightTheme = createTheme(globalTheme, {
  palette: {},
} as ThemeOptions);

export const darkTheme = createTheme(globalTheme, {
  palette: {},
} as ThemeOptions);

export default globalTheme;
