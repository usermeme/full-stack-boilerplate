import * as React from "react";
import { CssBaseline } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./providers";
import App from "./App";

const AppContainer: React.FC = () => (
  <BrowserRouter>
    <ThemeProvider>
      <CssBaseline />
      <App>test</App>
    </ThemeProvider>
  </BrowserRouter>
);

export default AppContainer;
