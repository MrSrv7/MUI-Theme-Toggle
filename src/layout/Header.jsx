import { AppBar, Toolbar, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import ThemeSwitch from "../components/ThemeSwitcher";
import useToggleHook from "../hooks/useToggleTheme";

const Header = () => {
  const themeSwitch = useToggleHook();
  const currentTheme = useSelector((state) => state.general.allPages);
  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div />
        <Typography
          variant="h5"
          sx={{
            marginLeft: 16,
          }}
        >
          MUI Theme Toggle
        </Typography>
        <section>
          <Typography variant="span">Light</Typography>
          <ThemeSwitch checked={currentTheme === "dark"} onChange={() => themeSwitch()} />
          <Typography variant="span">Dark</Typography>
        </section>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
