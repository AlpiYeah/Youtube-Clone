import { createTheme } from "@mui/material";
const bgColor = "#000";
const secondaryColor = "#1e1e1e";
const accentColor = "#F31503";


const darkTheme = createTheme({
  palette: {
    mode: "dark",
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

export default darkTheme;
