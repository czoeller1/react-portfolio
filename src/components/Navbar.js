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
