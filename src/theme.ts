import { createTheme } from "@mui/material/styles";
import { light } from "@mui/material/styles/createPalette";

const theme = createTheme({
  palette: {
    background: {
      default: "pink",
    },
    primary: {
      main: "#ff4081",
      light: "#ff79b0",
      dark: "#c60055",
      contrastText: "#fff",
    },
    secondary: {
      main: "#7f52ba",
      light: "#b499d6",
      dark: "#623a92",
      contrastText: "#fff",
    },
    text: {
      secondary: "#fff",
    },
  },
  components: {
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: "#8976b3",
        },
      },
    },
  },
});

export default theme;
