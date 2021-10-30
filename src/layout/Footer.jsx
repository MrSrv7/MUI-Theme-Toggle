import { AppBar, Toolbar, Typography } from "@mui/material";

const Footer = () => {
  return (
    <AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0 }}>
      <Toolbar sx={{ justifyContent: "center" }}>
        <Typography variant="h5"> Footer </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
