import { pink } from "@mui/material/colors"
import { createTheme } from "@mui/material/styles"
export const theme = createTheme({
  palette: {
    primary: {
      main: "#424242",
      light: "#757575",
      dark: "#212121",
    },
    secondary: {
      main: pink[300],
      light: "#fce4ec",
    },
    action: {
      hover: "#757575",
      hoverOpacity: 0.1,
    },
  },
  typography: {
    h1: {
      fontSize: "44px",
      fontWeight: 600,
    },

    h2: {
      fontSize: "32px",
      fontWeight: 600,
    },
    h3: {
      fontSize: "24px",
      fontWeight: 400,
    },
    h4: {
      fontSize: "18px",
      fontWeight: 400,
    },
    h5: {
      fontSize: "16px",
      fontWeight: 400,
    },
    h6: {
      fontSize: "12px",
      fontWeight: 500,
    },
    body1: {
      fontSize: "16px",
      fontWeight: 400,
    },
    body2: {
      fontSize: "12px",
      fontWeight: 400,
    },
  },
})
