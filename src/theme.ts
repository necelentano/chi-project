import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3751FF",
    },
    primaryLight: {
      main: "#DDE2FF",
    },
    bgDark: {
      main: "#363740",
    },
  },
  typography: {
    fontFamily: ["Mulish", "sans-serif"].join(","),
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

export default responsiveFontSizes(theme);
