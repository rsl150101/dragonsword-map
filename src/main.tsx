import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { RouterProvider } from "react-router-dom";

import GlobalStyle from "./styles/GlobalStyle.ts";
import { theme } from "./styles/theme.ts";
import router from "./router.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
);
