import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BeMine } from "./pages/BeMine/BeMine";
import { GirlfriendDay2024 } from "./pages/GirlfriendDay2024/GirlfriendDay2024";
import { GrievancePortal } from "./pages/GrievancePortal/GrievancePortal";
import { Home } from "./pages/Home/Home";
import theme from "./theme";

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
    path: "/grievance-portal",
    element: <GrievancePortal />,
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
