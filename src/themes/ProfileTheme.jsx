import { blue } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const profileTheme = (theme) =>
  createTheme({
    ...theme, // to inherit the root theme's button css properties and others if any
    palette: {
      ...theme.palette, // inheriting the root theme mode whether light or dark
      primary: {
        main: theme.palette.mode === "dark" ? "#fff" : "#0000ff",
        contrastText: theme.palette.mode === "dark" ? "#0000ff" : "#fff",
      },
      secondary: {
        main: theme.palette.mode === "dark" ? blue[200] : blue[800],
        contrastText: theme.palette.mode === "dark" ? "#dcdcdc" : "#222"
      }
    },
  });

export default profileTheme;
