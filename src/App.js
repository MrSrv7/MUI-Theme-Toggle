import { CssBaseline, ThemeProvider } from "@mui/material";
import { Component } from "react";
import { connect } from "react-redux";
import Layout from "./layout/Layout";
import MuiTheme from "./themes/MuiTheme";

class App extends Component {
  render() {
    const appTheme = MuiTheme({ mode: this.props.allPages });
    return (
      <>
        <ThemeProvider theme={appTheme}>
          <CssBaseline />
          <Layout />
        </ThemeProvider>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const { allPages } = state.general;
  return { allPages };
};

export default connect(mapStateToProps)(App);
