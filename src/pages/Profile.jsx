import { Button, ThemeProvider, Typography } from "@mui/material";
import useHistory from "../hooks/useHistory";
import profileTheme from "../themes/ProfileTheme";

const Profile = () => {
  const routeChange = useHistory("/home");
  return (
    <ThemeProvider theme={profileTheme}>
      <Typography variant="p" color="secondary">
        This is a separate component / page containing its own theme
        implementation. The primary and secondary colors are overridden in this
        page's theme object
      </Typography>
      <br />
      <Button variant="contained" color="primary" onClick={routeChange}>
        Click here
      </Button>
      <Typography variant="p" color="secondary">
        to Go Back to Home
      </Typography>
    </ThemeProvider>
  );
};

export default Profile;
