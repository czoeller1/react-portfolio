import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Footer from "./components/Footer";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#484848",
      main: "#212121",
      dark: "#000000",
      contrastText: "#ffffff",
    },
    secondary: {
      light: "#9c4dcc",
      main: "#6a1b9a",
      dark: "#38006b",
      contrastText: "#ffffff",
    },
  },
  overrides: {
    // Style sheet name ⚛️
    MuiButton: {
      textSecondary: {
        "&:hover": { backgroundColor: "#9c4dcc", color: "#ffffff" },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path={["/", "/about"]}>
              <About />
            </Route>

            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route path="/projects">
              <Portfolio />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
