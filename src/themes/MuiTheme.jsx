import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const MuiTheme = ({ mode }) => {
  let MuiTheme = createTheme({
    components: {
      MuiButton: {
        defaultProps: {
          // The props to change the default values of button.
          disableRipple: true, 
        },
        styleOverrides: {
          root: {
            textTransform: "capitalize",
            padding: "1px 4px",
            margin: "0px 8px",
            transitionDuration: "0s",
            height: "22px",
          },
        },
      },
    },
    palette: {
      mode,
      primary: {
        main: mode === "dark" ? "#222" : "#dcdcdc",
      },
      secondary: {
        main: mode === "dark" ? red[200] : red[800],
        contrastText: mode === "dark" ? red[800] : red[200],
      },
      info: {
        main : mode === "dark" ? "#fff" : "#ff0000",
        contrastText: mode === "dark" ? "#ff0000" : "#fff"
      }
    },
  });
  return MuiTheme;
};

export default MuiTheme;
