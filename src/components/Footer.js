import React from "react";
import resume from "../assets/Resume.pdf";

import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";

import Box from "@material-ui/core/Box";
import { useTheme } from "@material-ui/core/styles";

function Footer() {
  const theme = useTheme();
  return (
    <>
      <AppBar
        color="primary"
        position="fixed"
        style={{ top: "auto", bottom: 0 }}
      >
        <Box mx="auto">
          <Toolbar>
            <Button
              style={{ color: theme.palette.secondary.main }}
              href="https://github.com/czoeller1"
              target="blank"
            >
              GitHub
            </Button>
            <Button
              style={{ color: theme.palette.secondary.main }}
              href={resume}
              target="blank"
            >
              Resume
            </Button>
            <Button
              style={{ color: theme.palette.secondary.main }}
              href="https://www.linkedin.com/in/charles-zoeller/"
              target="blank"
            >
              LinkedIn
            </Button>
          </Toolbar>
        </Box>
      </AppBar>
      <Toolbar />
    </>
  );
}

export default Footer;
