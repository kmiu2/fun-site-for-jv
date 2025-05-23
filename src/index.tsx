import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import { BeMine } from "./pages/BeMine/BeMine";
import { GirlfriendDay2024 } from "./pages/GirlfriendDay2024/GirlfriendDay2024";
import { GrievancePortal } from "./pages/GrievancePortal/GrievancePortal";
import { Home } from "./pages/Home/Home";
import theme from "./theme";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement!);

root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/be-mine" element={<BeMine />} />
        <Route path="/girlfriend-day-2024" element={<GirlfriendDay2024 />} />
        <Route path="/grievance-portal" element={<GrievancePortal />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </HashRouter>
  </ThemeProvider>
);
