import React from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { useTheme } from "@material-ui/core/styles";

const NavWrapper = React.forwardRef((props, ref) => (
  <NavLink ref={ref} to="/" activeStyle={{ color: "white" }} {...props} />
));

function Navbar() {
  const theme = useTheme();

  return (
    <>
      {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-end">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            Charles Zoeller
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/projects">
                  Portfolio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/">
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
      <AppBar color="primary" position="sticky">
        <Toolbar>
          <Box pr="2rem">
            <Typography variant="h6" style={{ color: "#d0d0d0" }}>
              Charles Zoeller
            </Typography>
          </Box>
          <Button
            style={{ color: theme.palette.secondary.light }}
            component={NavWrapper}
            exact
            to="/"
          >
            About
          </Button>
          <Button
            style={{ color: theme.palette.secondary.light }}
            component={NavWrapper}
            to="/projects"
          >
            Portfolio
          </Button>
          <Button
            style={{ color: theme.palette.secondary.light }}
            component={NavWrapper}
            to="/contact"
          >
            Contact
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
