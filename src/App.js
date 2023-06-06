import React, { useState } from "react";
import darkTheme from "./components/themes/darkTheme";
import lightTheme from "./components/themes/lightTheme";

import { ThemeProvider, Typography } from "@mui/material";
import { Box } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Navbar,
  Feed,
  SearchFeed,
  ChannelDetail,
  VideoDetail,
} from "./components";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline>
          <Box sx={{ backgroundColor: "primary.main" }}>
            <Navbar />
            <Routes>
              <Route path="/" exact element={<Feed />} />
              <Route path="/video/:id" element={<VideoDetail />} />
              <Route path="/channel/:id" element={<ChannelDetail />} />
              <Route path="/search/:searchTerm" element={<SearchFeed />} />
            </Routes>
          </Box>
        </CssBaseline>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
