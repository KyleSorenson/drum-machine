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
    fontSize: 12,
    fontFamily: "'Press Start 2P', cursive",
    body1: {
      fontSize: ".8rem",
    },
  },
});

export default myTheme;
