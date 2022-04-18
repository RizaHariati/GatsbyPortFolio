import { createTheme } from "@mui/material/styles"
export const theme = createTheme({
  palette: {
    primary: {
      main: "#dfdbd3",
      light: "#757575",
      dark: "#aaa8a4",
    },
    secondary: {
      main: "#c1436d",
      light: "#dfdbd3",
    },
    action: {
      hover: "#757575",
      hoverOpacity: 0.1,
    },
    text: {
      primary: "#dfdbd3",
      secondary: "#aaa8a4",
    },
    background: {
      paper: "#c1436d",
    },
  },
  typography: {
    h1: {
      fontSize: "36px",
      fontWeight: 500,
    },

    h2: {
      fontSize: "30px",
      fontWeight: 400,
    },
    h3: {
      fontSize: "24px",
      fontWeight: 400,
    },
    h4: {
      fontSize: "18px",
      fontWeight: 300,
    },
    h5: {
      fontSize: "16px",
      fontWeight: 300,
    },
    h6: {
      fontSize: "12px",
      fontWeight: 300,
    },
    body1: {
      fontSize: "14px",
      fontWeight: 300,
    },
    body2: {
      fontSize: "12px",
      fontWeight: 300,
    },
  },
})
