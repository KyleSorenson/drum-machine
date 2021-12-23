import { createTheme } from "@mui/material";
import { red, blueGrey } from "@mui/material/colors";

const myTheme = createTheme({
  shape: {
    borderRadius: "0",
  },
  palette: {
    mode: "dark",
    primary: red,
    secondary: blueGrey,
  },
  typography: {
    // fontFamily: "'Play', sans-serif",
    fontFamily: "'Press Start 2P', cursive",
    // fontFamily: "'Quantico', sans-serif",
    // fontFamily: "'Rajdhani', sans-serif",
    // fontFamily: "'Righteous', cursive",
    // fontFamily: "'VT323', monospace",
    // h5: {
    //   fontSize: "1.2rem",
    // },
    body1: {
      fontSize: ".8rem",
    },
  },
});

export default myTheme;
