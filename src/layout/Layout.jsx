import { Grid } from "@mui/material";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

const Layout = () => {
  return (
    <Grid container direction="column">
      <Grid item xs>
        <Header />
      </Grid>
      <Grid item xs>
        <Main />
      </Grid>
      <Grid item xs>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default Layout;
