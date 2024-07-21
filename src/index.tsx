import * as React from "react";
import * as ReactDOM from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";
import { BeMine } from "./pages/BeMine/BeMine";
import { GirlfriendDay2024 } from "./pages/GirlfriendDay2024/GirlfriendDay2024";
import { Home } from "./pages/Home/Home";
import { ThemeProvider } from "@mui/material/styles";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement!);
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/be-mine",
    element: <BeMine />,
  },
  {
    path: "/girlfriend-day-2024",
    element: <GirlfriendDay2024 />,
  },
  {
    path: "/*",
    element: <Home />,
  },
]);

root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <RouterProvider router={router} />
  </ThemeProvider>
);
