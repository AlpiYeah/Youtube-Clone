import { createTheme } from "@mui/material";
const bgColor = "#fff";
const secondaryColor = "#FFF5B8";
const accentColor = "#30A2FF";
const errorColor = "#CD4A4A";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: bgColor,
    },
    secondary: {
      main: secondaryColor,
    },
    neutral: {
      main: accentColor,
    },
  },
});

export default lightTheme;
