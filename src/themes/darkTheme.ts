import { Open_Sans } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

export const openSans = Open_Sans({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "sans-serif"],
});

const theme = createTheme({
  palette: {
    primary: {
      main: "#6A7DE4",
      light: "#FFBF1C",
      dark: "#4D194D",
      "100": "#4CC9F0",
    },
    secondary: {
      main: "#19857b",
      light: "#E7760E",
      dark: "#525252",
    },
    background: {
      default: "linear-gradient(to right, #203A43, #203A43, #0F2027);",
      paper: "#0F2027",
    },
    error: {
      main: red.A400,
    },
    text: {
      primary: "#F0F0F0",
      secondary: "#0F0F0F",
    },
  },
  typography: {
    fontFamily: openSans.style.fontFamily,
    h1: {
      fontSize: "3.5rem",
    },
    h2: {
      fontSize: "2.5rem",
    },
    h3: {
      fontSize: "2rem",
    },
    h4: {
      fontSize: "1.5rem",
    },
    h5: {
      fontSize: "1.25rem",
    },
    h6: {
      fontSize: "1rem",
    },
    body1: {
      fontSize: "1.25rem",
    },
    body2: {
      fontSize: "1rem",
    },
    subtitle1: {
      fontSize: "2rem",
      fontWeight: 900,
    },
  },
});

export default theme;
