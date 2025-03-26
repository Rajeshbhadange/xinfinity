import React, { useState } from "react";
import {
  InputLabel,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  Box,
  Button,
} from "@mui/material";

const Theme = () => {
  const [selectedTheme, setSelectedTheme] = useState("Classic Theme");

  const handleThemeChange = (event) => {
    setSelectedTheme(event.target.value);
  };

  return (
    <div>
      <InputLabel>Select Theme</InputLabel>
      <FormControl>
        <Box display="flex" flexDirection="row" fontSize="15px">
          <RadioGroup
            aria-label="theme"
            name="theme"
            value={selectedTheme}
            onChange={handleThemeChange}
            row // This prop is added to make the RadioGroup horizontal
          >
            <FormControlLabel
              value="Classic Theme"
              control={<Radio />}
              label="Classic Theme"
            />
            <FormControlLabel
              value="Modern Theme"
              control={<Radio />}
              label="Modern Theme"
            />
          </RadioGroup>
        </Box>
        <Button
          type="button"
          variant="contained"
          sx={{ backgroundColor: "royalblue", color: "#FFF", width: "50px" }}
        >
          Save
        </Button>
      </FormControl>
    </div>
  );
};

export default Theme;
