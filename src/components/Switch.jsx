import { Box } from "@mui/material";
import React from "react";
import Cookies from "js-cookie";
import { useState } from "react";
import darkTheme from "./themes/darkTheme";

function Switch({ onColor }) {
  const [value, setValue] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [theme, setTheme] = useState("lightTheme");
  const handleToggle = (event) => {
    setValue(!value);
    setIsChecked(!isChecked);
    if (!value) {
      setTheme("darkTheme");
    } else {
      setTheme("lightTheme");
    }
  };

  return (
    <Box>
      <input
        checked={isChecked}
        onChange={handleToggle}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
        style={{ background: value && onColor }}
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button`} />
      </label>
      <p style={{ color: "white" }}>{theme}</p>
    </Box>
  );
}

export default Switch;
