import React from "react";
import { Box, Stack, useScrollTrigger, Slide } from "@mui/material";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import PropTypes from 'prop-types'


function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};



function Navbar() {




  return (
    <HideOnScroll>
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "primary",
        top: 0,
        justifyContent: "space-between",
        zIndex: "10",
        backgroundColor: "primary.main",
      }}
    >
      <Link
        to="/"
        style={{ display: "flex", alignItems: "center", paddingLeft: "10px" }}
      >
        <img src={require("../public/pelilogo.png")} alt="logo" height={60} />
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <img
            src={require("../public/logotextgrt.png")}
            alt="logo"
            height={20}
            style={{ marginLeft: "10px" }}
          />
        </Box>
      </Link>
      <SearchBar />
    </Stack>
    </HideOnScroll>
  );
}

export default Navbar;
